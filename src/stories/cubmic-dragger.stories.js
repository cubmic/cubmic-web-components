import { html } from 'lit'
import { cubmicDefine } from '../../index.js'
cubmicDefine('cubmic-container')
cubmicDefine('cubmic-dragger')
cubmicDefine('cubmic-card')
cubmicDefine('cubmic-card-section')
cubmicDefine('cubmic-input')

export default {
  title: "cubmic-dragge",
  component: "cubmic-dragger"
}



function Template({
  position
}) {
  return html`
    <cubmic-dragger
      .position=${position}
    >
    </cubmic-dragger>
  `
}
export const Dragger = Template.bind({})
Dragger.args = {
  position: { x: 300, y: 200 }
}



function Template2({
  grid,
  title,
  content,
  color,
  position1,
  position2,
  position3
}) {
  return html`
    <script>
      function call(element) {
        element.dragReset()
      }
    </script>
    <cubmic-container>
      <cubmic-dragger .position=${position1} .grid=${grid}>
        <cubmic-card style="background:#A86;">
          <cubmic-card-section>
            <cubmic-input .value=${title} />
          </cubmic-card-section>
          <cubmic-card-section>
            ${content}
          </cubmic-card-section>
        </cubmic-card>
      </cubmic-dragger>
      <cubmic-dragger .position=${position2} .grid=${grid}>
        <cubmic-card style="background:${color};">
          <cubmic-card-section>
            <cubmic-input .value=${title} />
          </cubmic-card-section>
          <cubmic-card-section>
            ${content}
          </cubmic-card-section>
          <cubmic-card-section>
            <cubmic-dragger style="background:#900; border-radius:50%;" .position=${position3} onmouseup="call(this)" />
          </cubmic-card-section>
        </cubmic-card>
      </cubmic-dragger>
    </cubmic-container>
  `
}
export const DraggerWithBounds = Template2.bind({})
DraggerWithBounds.args = {
  grid: 20,
  title: 'Titel',
  content: 'Content',
  color: '#68A',
  position1: { x: 300, y: 200 },
  position2: { x: 50, y: 50 },
  position3: { x: 0, y: 0 }
}
