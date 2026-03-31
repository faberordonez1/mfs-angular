const { ModuleFederationPlugin } = require('webpack').container;
const path = require('path');

module.exports = {
  output: {
    uniqueName: 'web_home',
    publicPath: 'auto',
    scriptType: 'text/javascript'
  },
  optimization: {
    runtimeChunk: false
  },
  devServer: {
    liveReload: false,
    hot: false
  },
  watchOptions: {
    ignored: [
      '**/node_modules',
      path.resolve(__dirname, '..', 'web-apuestas'),
      path.resolve(__dirname, '..', 'web-recargas')
    ]
  },
  plugins: [
    new ModuleFederationPlugin({
      name: 'web_home',
      remotes: {
        web_apuestas: 'web_apuestas@http://localhost:4202/remoteEntry.js',
        web_recargas: 'web_recargas@http://localhost:4201/remoteEntry.js'
      },
      shared: {
        '@angular/core': {
          singleton: true,
          strictVersion: false,
          requiredVersion: '13.3.12'
        },
        '@angular/common': {
          singleton: true,
          strictVersion: false,
          requiredVersion: '13.3.12'
        },
        '@angular/router': {
          singleton: true,
          strictVersion: false,
          requiredVersion: '13.3.12'
        },
        '@angular/common/http': {
          singleton: true,
          strictVersion: false,
          requiredVersion: '13.3.12'
        },
        '@angular/platform-browser': {
          singleton: true,
          strictVersion: false,
          requiredVersion: '~13.3.0'
        },
        '@angular/platform-browser-dynamic': {
          singleton: true,
          strictVersion: false,
          requiredVersion: '~13.3.0'
        },
        '@angular/animations': {
          singleton: true,
          strictVersion: false,
          requiredVersion: '~13.3.0'
        },
        '@angular/forms': {
          singleton: true,
          strictVersion: false,
          requiredVersion: '~13.3.0'
        }
      }
    })
  ]
};
