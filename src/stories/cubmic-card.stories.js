import { html } from 'lit'
import { cubmicDefine } from '../../index.js'
cubmicDefine('cubmic-card')
cubmicDefine('cubmic-card-section')

export default {
  title: "cubmic-card",
  component: "cubmic-card"
}

function Template({
  title,
  content,
  background,
  color,
  round,
  border
}) {
  return html`
    <cubmic-card
      ?round=${round}
      ?border=${border}
      style="background:${background};color:${color};"
    >
      <cubmic-card-section>
        ${title}
      </cubmic-card-section>
      <cubmic-card-section>
        ${content}
      </cubmic-card-section>
    </cubmic-card>
  `
}
export const Card = Template.bind({})
Card.args = {
  title: 'Titel',
  content: 'Content',
  color: '#fff',
  background: '#68A',
  round: false,
  border: false
}
