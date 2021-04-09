import m from './m'
import loadStyles from './style'
import getSelector from './get-selector'

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

let todo = {}

function onChange (key) {
  return function (event) {
    todo[key] = event.target.value
  }
}

function createTodo () {
  if (!todo.title) {
    todo.title = document.title
  }

  const selection = window.getSelection()
  if (selection) {
    todo.selection = selection.toString()
  }

  todo.link = window.location.href

  console.log(todo)
}

function createDialog ({ top, left, right }) {
  return m('div', { style: `top: ${top}px; left: ${left}px; right: ${right}px; max-width: ${ViewWidth}px`, className: 'WebTodoExtension--Content' },
    [
      m('h3', '✅  Web Todos'),
      m('input', { placeholder: 'Title', className: 'Title', onchange: onChange('title') }),
      m('textarea', { placeholder: 'Notes', className: 'Notes', onchange: onChange('notes') }),
      m('button', 'Create Web Todo', { className: 'btn', onclick: createTodo } )
    ])
}

function renderDialog (position) {
  detachDialog()
  dialog = createDialog(position)
  document.body.appendChild(dialog)
}