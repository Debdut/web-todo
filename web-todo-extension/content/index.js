import { m } from './m'

let dialog

window.onload = function onload () {
  document.body
    .addEventListener('click', function onClick (event) {
      const { target } = event
      if (target) {
        if (isValidTarget(target)) {
          const position = adaptPosition({ left: event.pageX, top: event.pageY })
          renderDialog(position)
        }
      }
    })
}

function isValidTarget (target) {
  const notPermittedTags = [ 'button', 'input', 'a', 'select', 'video', 'audio' ]

  if (notPermittedTags.indexOf(target.tagName.toLowerCase()) > -1) {
    return false
  } else if (dialog && dialog.contains(target)) {
    return false
  }

  return true
}

function getSelectedText () {
  return window.getSelection().toString()
}

const ViewWidth = 200
const OffSet = 20

function adaptPosition ({ left, top }) {
  const position = { left: 'auto', right: 'auto' }
  const { clientWidth } = document.documentElement
  
  if (left + ViewWidth + OffSet > clientWidth ) {
    position.right = clientWidth - left + 2 * OffSet
  } else {
    position.left = left + 2 * OffSet
  }

  position.top = (top > 2*OffSet) ? (top - OffSet) : (top + OffSet)

  return position
}

function detachDialog () {
  if (dialog) {
    dialog.remove()
  }
}

function createDialog ({ top, left, right }) {
  const selection = getSelectedText()

  return m(
    'div',
    { style: `top: ${top}px; left: ${left}px; right: ${right}px; max-width: ${ViewWidth}px; position: absolute; background: rgba(240, 240, 240, 0.3); padding: 12px; border: 1px solid #ddd; border-radius: 5px; -webkit-backdrop-filter: blur(10px); backdrop-filter: blur(10px); box-shadow: 0 1px 10px 5px rgba(150, 150, 150, 0.07), 0 1px 5px 5px rgba(150, 150, 150, 0.06); z-index: 100000;` },
    [
      m('h3', 'Web Todo'),
      m('input', { value: document.title }),
      selection ? m('textarea', { value: selection }) : null
    ])
}

function renderDialog (position) {
  detachDialog()
  dialog = createDialog(position)
  document.body.appendChild(dialog)
}