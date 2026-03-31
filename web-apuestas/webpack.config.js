const { ModuleFederationPlugin } = require('webpack').container;
const path = require('path');

module.exports = {
  output: {
    uniqueName: 'web_apuestas',
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
      path.resolve(__dirname, '..', 'web-home'),
      path.resolve(__dirname, '..', 'web-recargas')
    ]
  },
  plugins: [
    new ModuleFederationPlugin({
      name: 'web_apuestas',
      filename: 'remoteEntry.js',
      exposes: {
        './ApuestasModule': './src/app/apuestas/apuestas.module.ts'
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
