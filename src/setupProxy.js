//TODO: Not a big fan of this approach, investigate further is there is an alternative
const { createProxyMiddleware } = require('http-proxy-middleware')

const GIPHY_MAIN_ENDPOINT = process.env.REACT_APP_GIPHY_ENDPOINT
const GIPHY_PROXY_ENDPOINT = process.env.REACT_APP_GIPHY_PROXY_ENDPOINT

module.exports = function (app) {
  const proxyRegex = '^' + GIPHY_PROXY_ENDPOINT
  app.use(
    GIPHY_PROXY_ENDPOINT,
    createProxyMiddleware({
      target: GIPHY_MAIN_ENDPOINT,
      pathRewrite: {
        [proxyRegex]: '',
      },
      changeOrigin: true,
      secure: false,
    })
  )
}
