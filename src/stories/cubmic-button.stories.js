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
  disabled,
  round
}) {
  return html`
    <cubmic-button
      color=${color}
      ?disabled=${disabled}
      ?round=${round}
    >
      ${label}
      <cubmic-icon name="settings"></cubmic-icon>
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
  label: 'Settings',
  color: 'default',
  disabled: false,
  round: true
}
