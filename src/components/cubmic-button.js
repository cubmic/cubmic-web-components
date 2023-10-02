import { LitElement, html, nothing } from 'lit'
import { styleMap } from 'lit/directives/style-map.js'
import { COLORS } from '../enums.js'
import { uiForm } from '../styles/ui-form.js'
  
export default class CubmicButton extends LitElement {

  static styles = [uiForm]

  static properties = {
    // in only
    type: { type: String },
    color: { type: String },
    disabled: { type: Boolean },
    tabindex: { type: Number }
  }

  constructor() {
    super()
    this.type = nothing
    this.color = 'default'
    this.disabled = false
    this.tabindex = nothing
  }

  render() {
    const style = styleMap(COLORS[this.disabled ? 'disabled' : this.color])
    return html`
      <button
        .type=${this.type}
        style=${style}
        ?disabled=${this.disabled}
        .tabindex=${this.tabindex}
      >
        <slot>Button</slot>
      </button>
    `
  }

}
