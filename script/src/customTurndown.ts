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
        return "\n:::note\n\n" + content.trim() + "\n\n:::\n"
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
        return "\n:::warning\n\n" + content.trim() + "\n\n:::\n"
      }
    })
    this.addRule("dl-attention", {
      filter: function (node) {
        return (
          node.nodeName === "DL" &&
          node.classList.contains("attention")
        )
      },
      replacement: function (content) {
        return "\n:::danger[エクササイズ]\n\n" + content.trim() + "\n\n:::\n"
      }
    })

    this.addRule("dt", {
      filter: "dt",
      replacement: () => ""
    })
    this.addRule("caption-image", {
      filter: function (node) {
        return (
          node.nodeName === "DIV" &&
          node.classList.contains("caption-image")
        )
      },
      replacement: function (content) {
        console.log("caption image!");
        // TODO: div with JSON
        return "error";
      }
    })
    this.keep("CaptionImage" as TurndownService.Filter);
  }
}
