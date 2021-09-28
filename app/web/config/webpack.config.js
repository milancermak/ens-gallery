const webpack = require('webpack')
const Dotenv = require('dotenv-webpack')

/** @returns {import('webpack').Configuration} Webpack Configuration */
module.exports = (config, { mode }) => {
  if (mode === 'development') {
    config.devServer.open = false
  }

  config.module.rules.push({
    resolve: {
      fallback: {
        buffer: require.resolve('buffer'),
        crypto: require.resolve('crypto-browserify'),
        stream: require.resolve('stream-browserify'),
      },
    },
  })

  config.plugins.push(
    new webpack.ProvidePlugin({ Buffer: ['buffer', 'Buffer'] }),
    new Dotenv({ systemvars: true })
  )

  return config
}
