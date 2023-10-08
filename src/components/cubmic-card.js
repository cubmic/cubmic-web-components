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
    :host(.round) {
      border-radius: 10px;
    }
    :host(.border) {
      border: 2px solid #000;
    }
  `

  static properties = {
    round: { type: Boolean },
    border: { type: Boolean }
  }

  constructor() {
    super()
    this.round = false
    this.border = false
  }

  render() {
    this.classList.toggle('round', this.round)
    this.classList.toggle('border', this.border)
    return html`
      <slot>Content</slot>
    `
  }

}
