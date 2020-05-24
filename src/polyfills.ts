import 'babel-polyfill'
import 'react-app-polyfill/ie11'
import 'react-app-polyfill/stable'

import 'proxy-polyfill'

import { WebpMachine } from 'webp-hero'

const webpMachine = new WebpMachine()
webpMachine.polyfillDocument()
