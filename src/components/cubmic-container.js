import { LitElement, html, css } from 'lit'

export default class CubmicContainer extends LitElement {

  static styles = css`
    :host {
      position: relative;
      display: inline-block;
      width: 100%;
      height: 600px;
      box-shadow: inset 0 0 10px rgba(0,0,0,0.5);
      overflow: hidden;
    }
    :host(.drag) {
      background-image:
        linear-gradient(to right, rgba(192, 192, 192, 0.75), rgba(192, 192, 192, 0.75)),
        linear-gradient(to right, black 50%, white 50%), linear-gradient(to bottom, black 50%, white 50%);
      background-blend-mode: normal, difference, normal;
    }
  `

  static properties = {
    // in only
    height: { type: Number }
  }

  constructor() {
    super()

    this.height = 600
  }

  firstUpdated () {
    this.style.height = this.height +'px'
  }

  render() {
    return html`
      <slot></slot>
    `
  }

}
