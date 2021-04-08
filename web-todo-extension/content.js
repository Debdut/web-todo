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
    background: rgba(240, 240, 240, 0.3);
    padding: 12px;
    border: 1px solid #ddd;
    border-radius: 5px;
    -webkit-backdrop-filter: blur(10px);
    backdrop-filter: blur(10px);
    box-shadow: 0 1px 10px 5px rgba(150, 150, 150, 0.07), 0 1px 5px 5px rgba(150, 150, 150, 0.06);
    z-index: 100000;
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

function m (...args) {
  if (args.length === 0) {
    return
  }

  if (typeof args[0] !== 'string') {
    return
  }

  const tagName = args[0]

  if (args.length === 1) {
    return createElement(tagName)
  } else if (args.length === 2) {
    if (typeof args[1] === 'string') {
      const content = args[1]

      return createElement(tagName, {}, content)
    }

    if (typeof args[1] === 'object') {
      if (Array.isArray(args[1])) {
        const children = args[1]

        return createElement(tagName, {}, '', children)
      } else {
        const props = args[1]

        return createElement(tagName, props)
      }
    }
  } else if (args.length === 3) {
    if (typeof args) {}
  }
}

function m (...args) {
  if (args.length === 0) {
    return
  }

  const types = {}
  
  args
    .forEach((arg, index) => {
      const type = getType(arg)
      if (types[type]) {
        types[type].push(index)
      } else {
        types[type] = [ index ]
      }
    })
  
  let children
  if (types['array']) {
    i = types['array'][0]
    children = args[i]
  }

  let props
  if (types['object']) {
    i = types['object'][0]
    props = args[i]
  }

  if (types['element'] && types['element'].length > 0) {
    let i = types['element'][0]
    const element = args[i]

    let content
    if (types['string']) {
      i = types['string'][0]
      content = args[i]
    }

    return fillElement(element, props, content, children)
  } else if (types['string'] && types['string'].length > 0) {
    let i = types['string'][0]
    const tagName = args[i]

    let content
    if (types['string'].length > 1) {
      i = types['string'][1]
      content = args[i]
    }

    return createElement(tagName, props, content, children)
  }

  return
}

function getType (atom) {
  if (typeof atom === 'string') {
    return 'string'
  } else if (typeof atom === 'object') {
    if (Array.isArray(atom)) {
      return 'array'
    }
    if (atom instanceof Element) {
      return 'element'
    }
    return 'object'
  }
}

function createElement (tagName, props, content, children) {
  const element = document.createElement(tagName)

  return fillElement(element, props, content, children)
}

function fillElement (element, props = {}, content, children = []) {
  for (const key in props) {
    if (Object.hasOwnProperty.call(props, key)) {
      const value = props[key]
      element[key] = value
    }
  }

  if (content) {
    element.innerText = content
  }

  for (let i = 0; i < children.length; i++) {
    const child = children[i]
    element.appendChild(child)
  }

  return element
}