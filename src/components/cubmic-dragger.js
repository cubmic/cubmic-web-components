import { LitElement, html, css } from 'lit'
import { dragElement, findParentBySelector } from '../utils.js'

export default class CubmicDragger extends LitElement {

  static styles = css`
    :host {
      position: absolute;
      padding-top: 20px;
      min-width: 20px;
      display: inline-block;
      cursor: grab;
      transition: box-shadow 0.5s;
      z-index: 0;
      color: #fff;
      background: repeating-linear-gradient(
        -55deg,
        #222,
        #222 10px,
        #444 10px,
        #444 20px
      );
    }
    :host > div {
      cursor: initial;
    }
    :host(.drag) {
      box-shadow: 0 0 20px rgba(0,0,0,0.5);
      z-index: 1;
    }
  `

  static properties = {
    // two way
    position: { type: Object, reflect: true },

    // private
    drag: { type: Boolean, state: true },
    grid: { type: Number }
  }

  constructor() {
    super()

    this.drag = false
    this.position = { x: 0, y: 0 }
    this.grid = 1
  }

  get container () {
    return findParentBySelector(this, 'cubmic-container')
  }

  firstUpdated () {
    this.style.left = this.position.x +'px'
    this.style.top = this.position.y +'px'

    dragElement(this, this.container, this.grid, ({ pos, drag }) => {
      this.position = pos
      this.drag = drag
    })
  }

  render() {
    // toggle host class
    this.classList.toggle('drag', this.drag)

    if (this.container) {
      this.container.style.backgroundSize = `${this.grid * 2}px ${this.grid * 2}px`
      this.container.classList.toggle('drag', this.drag)
    }

    return html`
      <div>
        <slot></slot>
      </div>
    `
  }

}
