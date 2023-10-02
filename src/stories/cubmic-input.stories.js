import { html } from 'lit'
import { cubmicDefine } from '../../index.js'
cubmicDefine('cubmic-input')

export default {
  title: "cubmic-input",
  component: "cubmic-input"
}

function Template({
  value,
  name,
  tabindex,
  disabled
}) {
  return html`
    <cubmic-input
      .name=${name}
      .tabindex=${tabindex}
      ?disabled=${disabled}
      value="${value}"
    />
  `
}
export const Input = Template.bind({})
Input.argTypes = {
  name: {
    control: 'text'
  },
  tabindex: {
    type: 'number'
  }
}
Input.args = {
  value: 'Titel',
  name: undefined,
  tabindex: undefined,
  disabled: false
}
