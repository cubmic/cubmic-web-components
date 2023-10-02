import { LitElement, html, css } from 'lit'

export default class CubmicCardSection extends LitElement {

  static styles = css`
    :host {
      position: relative;
      display: inline-block;
      padding: 10px;
      width: 100%;
      box-sizing: border-box;
    }
    :host(:not(:last-child)) {
      border-bottom: 1px solid #000;
    }
  `

  static properties = {
  }

  constructor() {
    super()
  }

  render() {
    return html`
      <slot>Content</slot>
    `
  }

}
