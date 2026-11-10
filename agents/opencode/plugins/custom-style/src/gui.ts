import { Plugin, Style } from "@opencode/plugin/gui"
import css from "./submit.css?inline"
import titlebarCss from "./titlebar.css?inline"
import busyCss from "./busy.css?inline"

export default Plugin.define({
  setup(ctx) {
    ctx.add(Style, css)
    ctx.add(Style, titlebarCss)
    ctx.add(Style, busyCss)
  },
})
