window.onload = function onload () {
  document.body
    .addEventListener('click', function onClick (event) {
      const { target } = event
      if (target) {
        if ([ 'BUTTON', 'INPUT', 'SELECT', 'A' ].indexOf(target.tagName)) {
          const position = adaptPosition({ left: event.pageX, top: event.pageY })
          renderDialog(position)
        }
      }
    })
}

const ViewWidth = 200
const OffSet = 20

function adaptPosition ({ left, top }) {
  const position = {}
  const { clientWidth } = document.documentElement
  
  if (left + ViewWidth + OffSet > clientWidth ) {
    position.right = clientWidth - left + 2 * OffSet
  } else {
    position.left = left + 2 * OffSet
  }

  position.top = (top > 2*OffSet) ? (top - OffSet) : (top + OffSet)

  return position
}

let dialog

function renderDialog (position) {
  detachDialog()
  dialog = createDialog(position)
  document.body.appendChild(dialog)
}

function createDialog ({ left, top, right }) {
  const element = document.createElement('div')

  element.style = `
    top: ${top}px;
    ${left ? `left: ${left}px` : `right: ${right}px`};
    max-width: ${ViewWidth}px;
    position: absolute;
    background: rgba(233, 233, 233, 0.6);
    padding: 12px;
    border: 1px solid #ddd;
    border-radius: 5px;
    -webkit-backdrop-filter: blur(10px);
    backdrop-filter: blur(10px);
    box-shadow: 0 1px 10px 5px rgba(150, 150, 150, 0.07), 0 1px 5px 5px rgba(150, 150, 150, 0.06);
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