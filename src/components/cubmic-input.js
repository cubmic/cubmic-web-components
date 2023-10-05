import { LitElement, html, nothing } from 'lit'
import { styleMap } from 'lit/directives/style-map.js'
import { COLORS } from '../enums.js'
import { uiForm } from '../styles/ui-form.js'

export default class CubmicInput extends LitElement {

  static styles = [uiForm]

  static properties = {
    // two way
    value: { type: String, reflect: true },
    // in only
    color: { type: String },
    name: { type: String },
    disabled: { type: Boolean }
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
  }

  render() {
    const style = styleMap(COLORS[this.disabled ? 'disabled' : this.color])
    return html`
      <input
        style=${style}
        .value=${this.value}
        .name=${this.name}
        ?disabled=${this.disabled}
      />
    `
  }

}
