console.log('[Popup] Loaded')

import { h, render } from 'preact'
import App from './components/app'
import './index.scss'

render(<App />, document.body)