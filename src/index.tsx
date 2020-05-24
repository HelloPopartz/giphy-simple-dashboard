import './polyfills'

import React from 'react'
import ReactDOM from 'react-dom'

import { hot } from 'react-hot-loader/root'

import { App } from './app/App.component'
import * as serviceWorker from './serviceWorker'

import './index.css'

type AppConfig = {
  enableHotReload: boolean
}

function getMainComponent({ enableHotReload }: AppConfig) {
  if (enableHotReload) {
    return hot(App)
  } else {
    return App
  }
}

function renderApp(config: AppConfig) {
  const AppComponent = getMainComponent(config)
  ReactDOM.render(
    <React.StrictMode>
      <AppComponent />
    </React.StrictMode>,
    document.getElementById('root')
  )
}

renderApp({ enableHotReload: true })

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister()
