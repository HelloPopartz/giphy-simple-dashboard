const { ESLINT_MODES } = require('@craco/craco')
reactHotReloadPlugin = require('craco-plugin-react-hot-reload')

const NODE_ENV = process.env.REACT_APP_CUSTOM_NODE_ENV || process.env.NODE_ENV

// Testing
const productionPlugins = [
  [
    'babel-plugin-transform-imports',
    {
      lodash: {
        transform: 'lodash/${member}',
        preventFullImport: true,
      },
    },
  ],
]

module.exports = {
  eslint: { mode: ESLINT_MODES.file },
  plugins: [{ plugin: reactHotReloadPlugin }],
  babel: {
    ...(NODE_ENV !== 'test' ? productionPlugins : []),
  },
}
