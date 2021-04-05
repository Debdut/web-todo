window.onload = function onload () {
  document.body
    .addEventListener('click', function onClick (event) {
      const { target } = event
      if (target) {
        if ([ 'BUTTON', 'INPUT', 'SELECT', 'A' ].indexOf(target.tagName)) {
          const position = { x: event.pageX, y: event.pageY }
          renderDialog(position)
        }
      }
    })
}

let dialog

function renderDialog (position) {
  detachDialog()
  dialog = createDialog(position)
  document.body.appendChild(dialog)
}

function createDialog (position) {
  const element = document.createElement('div')
  
  element.style = `
    position: absolute;
    top: ${position.y}px;
    left: ${position.x}px;
    font-size: 20px;
    background: white;
    padding: 16px;
  `

  element.innerHTML = `
    <h3>Web Todo</h3>
  `

  return element
}

function detachDialog () {
  if (dialog) {
    dialog.remove()
  }
}