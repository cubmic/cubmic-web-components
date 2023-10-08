import { LitElement, html, css, nothing } from 'lit'
import { styleMap } from 'lit/directives/style-map.js'
import { COLORS } from '../enums.js'
import { cubmicDefine } from '../../index.js'
cubmicDefine('cubmic-icon')
export default class CubmicInput extends LitElement {

  static styles = css`
    :host {
      position: relative;
      display: inline-block;
    }
    input {
      font-weight: bold;
      padding: 10px;
      border: 2px solid currentColor;
      box-sizing: border-box;
      line-height: 24px;
      display: flex;
      align-content: center;
      gap: 10px;
    }
    input:disabled {
      cursor: not-allowed;
    }
    input:hover {
      filter: brightness(110%) saturate(140%);
    }
    input:focus,
    input:focus-visible {
      outline-offset: 2px;
      outline: 2px solid currentColor;
      filter: brightness(110%) saturate(140%);
    }
    input.round {
      border-radius: 40px;
    }
    cubmic-icon {
      position: absolute;
      right: 10px;
      top: 50%;
      transform: translateY(-50%);
      cursor: pointer;
    }
  `

  static properties = {
    // two way
    value: { type: String, reflect: true },
    // in only
    color: { type: String },
    name: { type: String },
    disabled: { type: Boolean },
    clerable: { type: Boolean }
  }

  static shadowRootOptions = {
    ...LitElement.shadowRootOptions,
    delegatesFocus: true
  }

  constructor() {
    super()
    this.value = ''
    this.color = 'default'
    this.name = nothing
    this.disabled = false
    this.clerable = false
  }

  render() {
    const style = styleMap(COLORS[this.disabled ? 'disabled' : this.color])
    return html`
      <input
        style=${style}
        .value=${this.value}
        .name=${this.name}
        ?disabled=${this.disabled}
      >
      </input>
      ${ this.clearable ? html`<cubmic-icon name="close"></cubmic-icon>` : nothing }
    `
  }

}
