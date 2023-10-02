import { LitElement, html, css } from 'lit'
import { cubmicDefine } from '../../index.js'
cubmicDefine('cubmic-input')

export default class CubmicCard extends LitElement {

  static styles = css`
    :host {
      position: relative;
      display: inline-block;
      background: #ccc;
      width: 300px;
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
