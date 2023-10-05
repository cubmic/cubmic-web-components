import { LitElement, html, nothing } from 'lit'
import { styleMap } from 'lit/directives/style-map.js'
import { classMap } from "lit/directives/class-map.js"
import { COLORS } from '../enums.js'
import { uiForm } from '../styles/ui-form.js'
  
export default class CubmicButton extends LitElement {

  static styles = [uiForm]

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
