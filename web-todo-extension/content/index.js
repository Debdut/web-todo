import m from './m'
import loadStyles from './style'

let dialog
let mouseDownAt

window.onload = function onload () {
  loadStyles()

  document.body
    .addEventListener('mousedown', function mousedown (event) {
      mouseDownAt = (new Date()).getTime()

      if (dialog) {
        if(!dialog.contains(event.target)) {
          detachDialog(dialog)
        }
      }
    })

  document.body
    .addEventListener('mouseup', function mousedown (event) {
      const mouseUpAt = (new Date()).getTime()
      
      if (mouseUpAt - mouseDownAt >= 500) {
        const { target } = event
        if (target) {
          if (isValidTarget(target)) {
            const position = adaptPosition({ left: event.pageX, top: event.pageY })
            renderDialog(position)
          }
        }
      }
    })

  document.body
    .addEventListener('long-click', function onLongClick (event) {
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

function createTodo () {

}

function createDialog ({ top, left, right }) {
  return m('div', { style: `top: ${top}px; left: ${left}px; right: ${right}px; max-width: ${ViewWidth}px`, className: 'WebTodoExtension--Content' },
    [
      m('h3', 'Create Web Todo'),
      m('input', { placeholder: 'Title', className: 'Title' }),
      m('textarea', { placeholder: 'Notes', className: 'Notes' }),
      m('button', 'Create Web Todo', { className: 'btn' } )
    ])
}

function renderDialog (position) {
  detachDialog()
  dialog = createDialog(position)
  document.body.appendChild(dialog)
}