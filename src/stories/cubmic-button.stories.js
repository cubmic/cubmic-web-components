import { html } from 'lit'
import { cubmicDefine } from '../../index.js'
cubmicDefine('cubmic-button')
cubmicDefine('cubmic-icon')

import { COLORS_NAMES } from '../enums.js'

export default {
  title: "cubmic-button",
  component: "cubmic-button"
}

function Template({
  label,
  color,
  disabled
}) {
  return html`
    <cubmic-button
      color=${color}
      ?disabled=${disabled}
    >
      ${label}
      <cubmic-icon name="close"></cubmic-icon>
    </cubmic-button>
  `
}
export const Button = Template.bind({})
Button.argTypes = {
  color: {
    control: 'select',
    options: COLORS_NAMES
  }
}
Button.args = {
  label: 'Click mich...',
  color: COLORS_NAMES[0],
  disabled: false
}
