export const cubmicDefine = function (name) {
  import(`./src/components/${name}.js`)
    .then(module => {
      if (!customElements.get(name)) {
        customElements.define(name, module.default)
      }
    })
}
