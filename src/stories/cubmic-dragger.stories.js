import { html } from 'lit'
import { cubmicDefine } from '../../index.js'
cubmicDefine('cubmic-container')
cubmicDefine('cubmic-dragger')
cubmicDefine('cubmic-dropper')
cubmicDefine('cubmic-card')
cubmicDefine('cubmic-card-section')
cubmicDefine('cubmic-input')

export default {
  title: "cubmic-dragger",
  component: "cubmic-dragger"
}

function Template({
  grid,
  title,
  content,
  color,
  position1,
  position2,
  position3,
  position4,
  position5
}) {
  return html`
    <cubmic-container>

      <cubmic-dropper .position=${position4}>
        <div style="background:#090; width: 300px; height: 300px;">
          <cubmic-dropper .position=${position5}>
            <div style="background:#900; width: 200px; height: 200px;">
              <cubmic-dropper .position=${position5}>
                <div style="background:#009; width: 100px; height: 100px;">
                </div>
              </cubmic-dropper>
            </div>
          </cubmic-dropper>
        </div>
      </cubmic-dropper>

      <cubmic-dragger .position=${position1} grid=${grid}>
        <cubmic-card style="background:#A86;">
          <cubmic-card-section>
            <cubmic-input color="transparent" .value=${title} />
          </cubmic-card-section>
          <cubmic-card-section>
            ${content}
          </cubmic-card-section>
        </cubmic-card>
      </cubmic-dragger>
      <cubmic-dragger .position=${position2} grid=${grid}>
        <cubmic-card style="background:${color};">
          <cubmic-card-section>
            <cubmic-input color="transparent" .value=${title} />
          </cubmic-card-section>
          <cubmic-card-section>
            ${content}
          </cubmic-card-section>
          <cubmic-card-section>
            <cubmic-dragger
              style="background:#930; border-radius:50%;"
              .position=${position3}
              @drop="${(e) => console.log(e.detail.drop)}"
            />
          </cubmic-card-section>
        </cubmic-card>
      </cubmic-dragger>
    </cubmic-container>
  `
}
export const Dragger = Template.bind({})
Dragger.args = {
  grid: 20,
  title: 'Titel',
  content: 'Content',
  color: '#68A',
  position1: { x: 300, y: 200 },
  position2: { x: 50, y: 50 },
  position3: { x: 0, y: 0 },
  position4: { x: 400, y: 300 },
  position5: { x: 50, y: 50 },
}
