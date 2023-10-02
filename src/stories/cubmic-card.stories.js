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
  color
}) {
  return html`
    <cubmic-card style="background:${color};">
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
  content: 'Content'
}
export const CardWithColor = Template.bind({})
CardWithColor.args = {
  title: 'Titel',
  content: 'Content',
  color: '#68A'
}
