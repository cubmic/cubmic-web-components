import { LitElement, html, css } from 'lit'
import { ICONS, ICONS_NAMES } from '../enums.js'

export default class CubmicIcon extends LitElement {

  static styles = css`
    :host {
      line-height: 0;
      display: inline-block;
    }
  `

  static properties = {
    // in only
    name: { type: String },
    size: { type: Number }
  }

  constructor() {
    super()
    this.name = ICONS_NAMES[0]
    this.size = 24
  }

  render() {
    return html`
      <svg
        xmlns="http://www.w3.org/2000/svg"
        height=${this.size}
        width=${this.size}
        viewBox="0 -960 960 960"
        fill="currentColor"
        fill-rule="evenodd"
      >
        <path d=${ICONS[this.name]} />
      </svg>
    `
  }

}
