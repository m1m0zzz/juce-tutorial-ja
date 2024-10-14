import fs from "fs";
import path from "path";
import axios from "axios";
import * as cheerio from "cheerio";
import * as deepl from "deepl-node";
import * as dotenv from "dotenv";

import CustomTurndownService from "./src/customTurndown";
import { ensureDir, kebabCase } from "./src/file";
import { color, Yellow } from "./src/colors";

// options
const OUTPUT_DIR = "out";
// const OUTPUT_DIR = "../docs";
const LOG = true;
const DO_TRANSLATE = false;
// const CATEGORY_FILTER: string[] = []
const CATEGORY_FILTER_FLAG = true
const CATEGORY_FILTER: string[] = ["DSP"]

function log(message?: any, ...optionalParams: any[]) {
  if (LOG) {
    console.log(message, ...optionalParams)
  }
}

dotenv.config();
const turndownService = new CustomTurndownService();
const translator = new deepl.Translator(process.env.DEEPL_API_KEY as string);

async function t(texts: string) {
  if (!DO_TRANSLATE) return "aaaa";
  return (await translator.translateText(texts, null, "ja")).text
}

type Link = {
  href: string,
  title: string
}

type Group = {
  category: string,
  links: Link[]
}

function searchCategory(groups: Group[], link: Link) {
  for (let i = 0; i < groups.length; i++) {
    const links = groups[i].links;
    for (let j = 0; j < links.length; j++) {
      const _link = links[j];
      if (link.title == _link.title && link.href == _link.href) {
        return groups[i].category
      }
    }
  }
}


function searchCategoryWithRef(groups: Group[], ref: string) {
  for (let i = 0; i < groups.length; i++) {
    const links = groups[i].links;
    for (let j = 0; j < links.length; j++) {
      const _link = links[j];
      if (_link.href.includes(ref)) {
        return groups[i].category
      }
    }
  }
}

const getHTML = async (url: string) => {
  const response = await axios.get(url);
  if (response.status != 200) {
    throw Error(`${url} is not working!`);
  }
  return await response.data as string;
}

const readListPage = async (): Promise<Group[]> => {
  const url = "https://juce.com/learn/tutorials/";
  const groups: Group[] = [];
  const html = await getHTML(url);
  const $ = cheerio.load(html);
  const parent = $(".ct-section-inner-wrap").first();

  parent.children().map((_i, el) => {
    const category = $(el).find("div > h2").text().trim();
    const anchors = $(el).find("div > a");
    const links: Link[] = [];

    anchors.map((_j, link) => {
      links.push({
        href: link.attribs.href,
        title: $(link.children).find("h3").text().trim()
      });
    });

    groups.push({
      category: category,
      links: links
    });
  });
  return groups;
}

const readTutorialPage = async (link: Link, path: string, index: number, groups: Group[]) => {
  const baseUrl = "https://docs.juce.com/master/";
  const html = await getHTML(link.href);
  const $ = cheerio.load(html);
  const doc = $("body > div").eq(1);
  const heading = doc.find(".header").text().trim();
  const contents = doc.find(".textblock");
  // juceチュートリアルのサイトに合わせた変更
  // update link
  const levelLabel = contents.find("p:nth-child(2)").text().trim();
  const level = levelLabel.match(/Level:\s+(.+)/)?.[1]
  const level2Tag: {[lv: string]: string} = {
    Beginner: "初級",
    Intermediate: "中級",
    Advanced: "上級"
  }
  const tags = [level && level2Tag[level]].filter(v => v) as string[]

  contents.find("a[href]").each((_i, el) => {
    const href = $(el).attr("href") || "";
    console.log(href)
    if (/^http?s/.test(href))  {
      return true; // continue
    }
    const m = href.match(/(tutorial_)(.+)\.html$/);
    console.log(m)
    if (m && m[1]) { // tutorial
      const ref = m[1] + m[2]
      // ref includes
      const thisCategory = searchCategory(groups, link)
      const refCategory = searchCategoryWithRef(groups, ref)
      if (!thisCategory || !refCategory) throw Error("no category")

      if (thisCategory == refCategory) {
        $(el).attr("href", "../" + ref + "/");
      } else {
        $(el).attr("href", "../../" + kebabCase(refCategory) + "/" + ref + "/");
      }

    } else { // external link
      if (href.startsWith("/")) {
        $(el).attr("href", baseUrl + href.slice(1));
      } else {
        $(el).attr("href", baseUrl + href);
      }
    }
  })
  // TODO; div.image -> caption image (JSX)
  contents.find("div.image").each((i, el) => {
    const src = $(el).find("img").attr("src") || "undefined";
    const caption = $(el).find("div.caption").text().trim();
    // @site/src/components/CaptionImage
    $(el).replaceWith(`<img src="${src}" alt="${caption}" />`)
    const m = src.match(/(.+)\.png$/);
    if (m) {
      $(el).attr("src", baseUrl + m[1]);
    }
  })
  // pre code
  contents.find("div.fragment").each((i, el) => {
    const code = $(el).text();
    $(el).replaceWith(`<pre><code class="language-cpp">${code}</code></pre>`);
  })

  const formattedHtml = contents.html();
  if (!formattedHtml) {
    throw Error("failed: search DOM");
  }
  const markdown = await convertMarkdownJa(formattedHtml, link, heading, tags, index);

  fs.writeFile(path, markdown, (err) => {
    if (err) throw err;
    log(`write: ${path}`);
  });
}

const translatePage = async ($: cheerio.CheerioAPI, elements: cheerio.Cheerio<cheerio.AnyNode>) => {
  for (let i = 0; i < elements.length; i++) {
    const element = elements[i];
    const el = $(element);
    const tagName = el.prop("tagName");
    if (tagName == "PRE" || tagName == "CODE") {
      continue
    }

    if (element.type == "text") {
      const text = element.data
      // if (text == "\n") continue
      const m = text.match(/^([\s\r\n]*)([^\s\r\n]+)([\s\r\n]*)/)
      if (m) {
        element.data = m[1] + (await t(m[2])) + m[3];
      }
    } else {
      await translatePage($, el.contents());
    }
 }
}

// translation and html -> markdown
const convertMarkdownJa = async (html: string, link: Link, heading: string, tags: string[], sidebar_position: number) => {
  let translatedHTML;
  // log("translating ...");
  let $ = cheerio.load(html, {}, false); // cheerio fragment mode
  await translatePage($, $.root()); // overwrite $.root()
  translatedHTML = $.root().html();
  if (!translatedHTML) {
    throw Error(`error: convertMarkdownJa() title: ${link.title}`)
  }
  const baseUrl = /https?:\/\/docs\.juce\.com\/master\//
  const markdown = turndownService.turndown(translatedHTML || html).trim();
  const frontMatter =
`---
title: ${await t(link.title)}
sidebar_position: ${sidebar_position}
tags: [${tags.join(", ")}]
---

# ${await t(heading)}

<SourcePageLink path="${link.href.replace(baseUrl, "").replace(".html", "")}" />

`;
  return frontMatter + markdown + "\n";
}

// main
(async () => {
  log("config:");
  log("output dir:", OUTPUT_DIR);
  log("translation:", DO_TRANSLATE);
  log("category filter:", CATEGORY_FILTER_FLAG);
  if (CATEGORY_FILTER_FLAG)
    log("category filter:", CATEGORY_FILTER);
  log("")

  const groups = await readListPage();
  // log(JSON.stringify(groups, null, 2));
  // for (let i = 0; i < 1; i++) {
  fs.rmSync(OUTPUT_DIR, { recursive: true, force: true });
  ensureDir(OUTPUT_DIR);

  for (let i = 0; i < groups.length; i++) {
    const group = groups[i];
    const category = groups[i].category;
    if (CATEGORY_FILTER_FLAG && !CATEGORY_FILTER.includes(category)) {
      log(color(`skip: ${category}`, Yellow))
      continue;
    }
    const dir = path.join(OUTPUT_DIR, kebabCase(category));
    ensureDir(dir);

    const json =
`{
  "label": "${category}",
  "position": ${i + 2},
  "link": {
    "type": "generated-index"
  }
}`
    const categoryPath = path.join(dir, "_category.json")
    fs.writeFile(categoryPath, json + "\n", (err) => {
      if (err) throw err;
      log(`write: ${categoryPath}`);
    });
    // TODO
    // for (let j = 0; j < group.links.length; j++) {
    for (let j = 0; j < 1; j++) {
      const link = group.links[j];
      // href: https://docs.juce.com/master/XXX.html
      const filename = new URL(link.href).pathname.replace("/master/", "").replace(".html", ".mdx");
      const outputPath = path.join(dir, filename);
      await readTutorialPage(link, outputPath, j + 1, groups);
    }
  }
})();
