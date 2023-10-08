import { LitElement, html, css, nothing } from 'lit'
import { styleMap } from 'lit/directives/style-map.js'
import { classMap } from "lit/directives/class-map.js"
import { COLORS } from '../enums.js'
  
export default class CubmicButton extends LitElement {

  static styles = css`
    button {
      font-weight: bold;
      font-size: 20px;
      line-height: 20px;
      height: 40px;
      padding: 0 10px;
      color: currentColor;
      border: 2px solid currentColor;
      box-sizing: border-box;
      display: flex;
      justify-content: center;
      align-items: center;
      align-content: center;
      gap: 10px;
      cursor: pointer;
      transition: box-shadow 0.25s, padding-top 0.25s;
    }
    button:disabled {
      cursor: not-allowed;
    }
    button:focus,
    button:hover {
      filter: brightness(110%) saturate(140%);
    }
    button:focus-visible {
      outline-offset: 2px;
      outline: 2px solid #f00;
    }
    button:active { 
      box-shadow: inset 0px 5px 10px rgba(0, 0, 0, 0.7);
      padding-top: 5px;
    } 
    button.round {
      border-radius: 20px;
    }
  `

  static properties = {
    // in only
    type: { type: String },
    color: { type: String },
    disabled: { type: Boolean },
    tabindex: { type: Number },
    round: { type: Boolean }
  }

  static shadowRootOptions = {
    ...LitElement.shadowRootOptions,
    delegatesFocus: true
  }

  constructor() {
    super()
    this.type = nothing
    this.color = 'default'
    this.disabled = false
    this.round = false
  }

  render() {
    const cssClass = classMap({
      round: this.round
    })
    const style = styleMap(COLORS[this.disabled ? 'disabled' : this.color])
    return html`
      <button
        .type=${this.type}
        style=${style}
        class=${cssClass}
        ?disabled=${this.disabled}
      >
        <slot>Button</slot>
      </button>
    `
  }

}
