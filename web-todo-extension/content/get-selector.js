export default function getSelector (element) {
  if (!(element instanceof Element)) { 
    return
  }

  const path = []

  while (element.nodeType === Node.ELEMENT_NODE) {
    let selector = element.nodeName.toLowerCase()

    if (element.id) {
        selector += `#${element.id}`
    } else {
        let sibling = element
        let nth = 1

        while (sibling.nodeType === Node.ELEMENT_NODE) {
          sibling = sibling.previousSibling
          nth++
        }

        selector += `:nth-child(${nth})`
    }

    path.unshift(selector)
    element = element.parentNode
  }
  return path.join(' > ')
}