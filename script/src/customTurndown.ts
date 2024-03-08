import TurndownService from "turndown";
import * as turndownPluginGfm from "turndown-plugin-gfm";

export default class CustomTurndownService extends TurndownService {
  constructor() {
    super({
      headingStyle: "atx",
      bulletListMarker: "-",
      emDelimiter: "*",
      codeBlockStyle: "fenced",
    });

    this.use(turndownPluginGfm.gfm);
    this.addRule("dl-note", {
      filter: function (node) {
        return (
          node.nodeName === "DL" &&
          node.classList.contains("note")
        )
      },
      replacement: function (content) {
        return ":::note" + content + ":::"
      }
    })
    this.addRule("dl-warning", {
      filter: function (node) {
        return (
          node.nodeName === "DL" &&
          node.classList.contains("warning")
        )
      },
      replacement: function (content) {
        return ":::waring" + content + ":::"
      }
    })
    this.addRule("dt", {
      filter: "dt",
      replacement: () => ""
    })
    // this.addRule("caption-image", {
    //   filter: "img",
    //   replacement: function (content, node) {
    //     console.log("caption image!");
    //     console.log(node.nodeType);
    //     if (node.ELEMENT_NODE) {
    //       node.
    //       const src = node.getAttribute("src");
    //       const caption = node.getAttribute("alt");
    //       console.log(src, caption);
    //       return `<CaptionImage src="${src}" caption="${caption}"`
    //     }
    //     return "error";
    //   }
    // })
    // this.keep("CaptionImage" as TurndownService.Filter);
    // this.addRule("fragment-to-codeblock", {
    //   filter: function (node) {
    //     return (
    //       node.nodeName === "DIV" &&
    //       node.classList.contains("fragment")
    //     )
    //   },
    //   replacement: function (content) {
    //     return "```cpp\n" + content + "\n```"
    //   }
    // })
  }
}
