import m from './m'

export default function loadStyles () {
  const style = m('style', styles
    .replaceAll('root', '.WebTodoExtension--Content')
    .replaceAll('\n', ''))
  document.head.appendChild(style)
}

const styles = `
root {
  position: absolute;
  z-index: 100000;
  font-family: -apple-system,system-ui,BlinkMacSystemFont,"Segoe UI",Roboto,"Helvetica Neue",Arial,sans-serif;
	font-weight: 400;
  -webkit-font-smoothing: antialiased;
	-moz-osx-font-smoothing: grayscale;
}

root * {
	box-sizing: border-box;
  border: none;
  padding: 0;
  margin: none;
  color: none;
  background: none;
  font-size: 14px;
  font-family: inherit;
  font-weight: inherit;
}

root {
  background: rgba(251, 243, 244, .9);
  padding: 12px;
  border: 1px solid #ddd;
  border-radius: 6px;
  -webkit-backdrop-filter: blur(10px);
  backdrop-filter: blur(2px);
  box-shadow: 0 1px 5px 5px rgba(150, 150, 150, 0.06), 0 1px 10px 5px rgba(150, 150, 150, 0.01);
}

root h3 {
  font-size: 1.2rem;
  line-height: 1;
  font-weight: 500;
}

root input, root textarea, root button {
  border-radius: 5px;
  padding: 6px 10px;
  background: rgba(222, 214, 215, 0.5);
  width: 100%;
  margin-bottom: 12px;
}

root .btn {
  background: #3285ff;
  color: white;
}

root .btn:hover {
  background: #0d6efd;
  color: white;
}

`