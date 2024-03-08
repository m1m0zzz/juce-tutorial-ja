import fs from "fs";
import path from "path";
import axios from "axios";
import * as cheerio from "cheerio";
import CustomTurndownService from "./src/customTurndown";
import * as deepl from "deepl-node";
import * as dotenv from "dotenv";

const OUTPUT_DIR = "out";
// const OUTPUT_DIR = "../docs";
const DO_TRANSLATE = true;

dotenv.config();
const turndownService = new CustomTurndownService();
const translator = new deepl.Translator(process.env.DEEPL_API_KEY as string);
const t = async (texts: string) => {
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

const readTutorialPage = async (link: Link, path: string, index: number) => {
  const baseUrl = "https://docs.juce.com/master/";
  const html = await getHTML(link.href);
  const $ = cheerio.load(html);
  const doc = $("body > div").eq(1);
  const heading = doc.find(".header").text().trim();
  const contents = doc.find(".textblock");
  // console.log(contents.html())
  // juceチュートリアルのサイトに合わせた変更
  // update link
  contents.find("a[href]").each((i, el) => {
    const href = $(el).attr("href") || "";
    if (/^http?s/.test(href))  {
      return true; // continue
    }
    const m = href.match(/(tutorial_)?(.+)\.html$/);
    if (!m) {
    } else if (m[1]) { // tutorial
      $(el).attr("href", "../" + m[1] + m[2] + "/");
    } else { // external link
      $(el).attr("href", baseUrl + m[2]);
    }
  })
  // div.image -> caption image (JSX)
  contents.find("div.image").each((i, el) => {
    const src = $(el).find("img").attr("src") || "undefined";
    const caption = $(el).find("div.caption").text().trim();
    // @site/src/components/CaptionImage
    $(el).replaceWith(`<img src="${src}" alt="${caption}" />`)
    // console.log($(el).html());
    const m = src.match(/(.+)\.png$/);
    if (m) {
      $(el).attr("src", baseUrl + m[1]);
    }
  })
  // pre code
  contents.find("div.fragment").each((i, el) => {
    const code = $(el).text();
    $(el).replaceWith(`<pre><code>${code}</code></pre>`);
    // console.log($(el).html());
  })
  // console.log(contents.html());

  const formattedHtml = contents.html();
  if (!formattedHtml) {
    throw Error("failed: search DOM");
  }
  const markdown = (await convertMarkdownJa(formattedHtml, link, heading, index)).trim();

  fs.writeFile(path, markdown, (err) => {
    if (err) throw err;
    console.log(`success convert md`);
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

const convertMarkdownJa = async (html: string, link: Link, heading: string, sidebar_position: number) => {
  let translatedHTML;
  if (DO_TRANSLATE) {
    console.log("translating ...");
    let $ = cheerio.load(html, {}, false); // cheerio fragment mode
    await translateDOMText($, $.root()); // overwrite $.root()
    translatedHTML = $.root().html();
    if (!translatedHTML) {
      throw Error(`error: convertMarkdownJa() title: ${link.title}`)
    }
  }
  const baseUrl = /https?:\/\/docs\.juce\.com\/master\//
  const markdown = turndownService.turndown(translatedHTML || html);
  const frontMatter =
`---
title: ${await t(link.title)}
sidebar_position: ${sidebar_position}
---

import CaptionImage from "@site/src/components/CaptionImage";
import SourcePageLink from "@site/src/components/SourcePageLink";

<SourcePageLink path="${link.href.replace(baseUrl, "")}" />

`;
  const h1 = "# " + await t(heading) + "\n\n";
  return frontMatter + h1 + markdown + "\n";
}

// main
(async () => {
  const groups = await readListPage();
  // for (let i = 0; i < 1; i++) {
  for (let i = groups.length - 1; i < groups.length; i++) {
    const group = groups[i];
    const category = groups[i].category;
    const categorySanitized = category.toLowerCase().replace(/\s/, "-")
    const dir = path.join(OUTPUT_DIR, categorySanitized);

    if (!fs.existsSync(dir)) {
      fs.mkdir(dir, { recursive: true }, (err) => {
        if (err) throw err;
      });
    }
    const json =
`{
  "label": "${category}",
  "position": ${i + 2},
  "link": {
    "type": "generated-index"
  }
}`
    fs.writeFile(path.join(dir, "_category.json"), json + "\n\n", (err) => {
      if (err) throw err;
    });
    for (let j = 0; j < group.links.length; j++) {
    // for (let j = 0; j < 1; j++) {
      const link = group.links[j];
      console.log(link);
      // href: https://docs.juce.com/master/XXX.html
      const filename = new URL(link.href).pathname.replace("/master/", "").replace(".html", "");
      const outputPath = path.join(dir, filename + ".mdx");
      await readTutorialPage(link, outputPath, j + 1);
    }
  }
})();
