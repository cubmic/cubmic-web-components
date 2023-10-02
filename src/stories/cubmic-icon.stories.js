import { html } from 'lit'
import { cubmicDefine } from '../../index.js'
cubmicDefine('cubmic-icon')

import { ICONS_NAMES } from '../enums.js'

export default {
  title: "cubmic-icon",
  component: "cubmic-icon"
}

function Template({
  name,
  color,
  size,
}) {
  return html`
    <cubmic-icon
      name=${name}
      size=${size}
      style="color:${color};"
    />
  `
}
export const Icon = Template.bind({})
Icon.argTypes = {
  name: {
    control: 'select',
    options: ICONS_NAMES
  }
}
Icon.args = {
  name: ICONS_NAMES[0],
  color: '#f00',
  size: 40
}
