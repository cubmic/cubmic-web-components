const dragElement = function(element, parent, grid = 0, callback) {
  var pos = null, gap = null
  if (document.getElementById(element.id + "header")) {
    document.getElementById(element.id + "header").onmousedown = dragMouseDown
  } else {
    element.onmousedown = dragMouseDown
  }

  function getBounds(parent, element) {
    const parentRect = parent.getBoundingClientRect()
    const elementRect = element.getBoundingClientRect()
    const directParentRect = element.parentNode.getBoundingClientRect()
    const left = parentRect.left - directParentRect.left
    const top = parentRect.top - directParentRect.top
    return {
      left,
      right: left + parentRect.width - elementRect.width,
      top,
      bottom: top + parentRect.height - elementRect.height
    }
  }

  function dragMouseDown(e) {
    e = e || window.event
    e.stopPropagation()

    gap = {
      x: e.clientX - element.offsetLeft,
      y: e.clientY - element.offsetTop
    }

    document.onmouseup = closeDragElement
    document.onmousemove = elementDrag
  }

  function elementDrag(e) {
    e = e || window.event
    e.stopPropagation()

    pos = {
      x: e.clientX - gap.x,
      y: e.clientY - gap.y
    }

    // grid
    if (grid) {
      pos.x -= (pos.x % grid)
      pos.y -= (pos.y % grid)
    }

    // bounds
    if (parent) {
      const b = getBounds(parent, element)
      pos = {
        x: Math.min(b.right, Math.max(b.left, pos.x)),
        y: Math.min(b.bottom, Math.max(b.top, pos.y))
      }
    }

    callback({ pos, drag: true })
    element.style.top = pos.y + "px"
    element.style.left = pos.x + "px"
  }

  function closeDragElement() {
    callback({ pos, drag: false })

    document.onmouseup = null
    document.onmousemove = null
  }
}

function collectionHas(a, b) {
  for(var i = 0, len = a.length; i < len; i ++) {
    if(a[i] == b) return true
  }
  return false
}
function findParentBySelector(elm, selector) {
  var all = document.querySelectorAll(selector)
  var cur = elm.parentNode
  while(cur && !collectionHas(all, cur)) {
      cur = cur.parentNode
  }
  return cur
}

export {
  dragElement,
  findParentBySelector
}
  
  