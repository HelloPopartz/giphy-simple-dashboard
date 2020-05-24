import browserDetect from 'browser-detect'

export function isInternetExplorer() {
  const browserName = browserDetect().name
  return browserName === 'ie' || browserName === 'edge'
}
