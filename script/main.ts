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
const CATEGORY_FILTER: string[] = ["DSP", "Utility Classes"]

function log(message?: any, ...optionalParams: any[]) {
  if (LOG) {
    console.log(message, ...optionalParams)
  }
}

dotenv.config();
const turndownService = new CustomTurndownService();
const translator = new deepl.Translator(process.env.DEEPL_API_KEY as string);

async function t(texts: string) {
  if (!DO_TRANSLATE) return texts;
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
    if (/^http?s/.test(href))  {
      return true; // continue
    }
    const m = href.match(/(tutorial_)?(.+)\.html$/);
    if (!m) {
    } else if (m[1] && m[2]) { // tutorial
      const ref = m[1] + m[2]
      // ref includes
      $(el).attr("href", "../" + ref + "/");
    } else { // external link
      $(el).attr("href", baseUrl + m[2]);
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
    $(el).replaceWith(`<pre><code>${code}</code></pre>`);
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

const translateDOMText = async ($: cheerio.CheerioAPI, elements: cheerio.Cheerio<cheerio.AnyNode>) => {
  for (let i = 0; i < elements.length; i++) {
    const element = elements[i];
    // TODO: escape codeblock
    if ($(element).children().length) {
      await translateDOMText($, $(element).children());
    } else {
      const text = $(element).text().trim();
      if (text != "" && text != "\n" && text != "\n\r") {
        $(element).text(await t(text));
      }
    }
 }
}

const convertMarkdownJa = async (html: string, link: Link, heading: string, tags: string[], sidebar_position: number) => {
  let translatedHTML;
  if (DO_TRANSLATE) {
    log("translating ...");
    let $ = cheerio.load(html, {}, false); // cheerio fragment mode
    await translateDOMText($, $.root()); // overwrite $.root()
    translatedHTML = $.root().html();
    if (!translatedHTML) {
      throw Error(`error: convertMarkdownJa() title: ${link.title}`)
    }
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

<SourcePageLink path="${link.href.replace(baseUrl, "")}" />

`;
  return frontMatter + markdown + "\n";
}

// main
(async () => {
  log("config:");
  log("output dir:", OUTPUT_DIR);
  log("translation:", DO_TRANSLATE);
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
    if (CATEGORY_FILTER.length != 0 && !CATEGORY_FILTER.includes(category)) {
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
    for (let j = 0; j < group.links.length; j++) {
    // for (let j = 0; j < 1; j++) {
      const link = group.links[j];
      // href: https://docs.juce.com/master/XXX.html
      const filename = new URL(link.href).pathname.replace("/master/", "").replace(".html", ".mdx");
      const outputPath = path.join(dir, filename);
      await readTutorialPage(link, outputPath, j + 1, groups);
    }
  }
})();
