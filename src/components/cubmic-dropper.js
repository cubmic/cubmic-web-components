import { LitElement, html, css } from 'lit'

export default class CubmicDropper extends LitElement {

  static styles = css`
    :host {
      position: absolute;
      z-index: 0;
    }
  `

  static properties = {
    // two way
    position: { type: Object, reflect: true },
  }

  constructor() {
    super()
    this.position = { x: 0, y: 0 }
  }

  setPosition () {
    this.style.left = this.position.x + 'px'
    this.style.top = this.position.y + 'px'
  }

  firstUpdated () {
    this.setPosition()
  }

  render() {
    return html`
      <slot></slot>
    `
  }

}
