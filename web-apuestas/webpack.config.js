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
          strictVersion: true,
          requiredVersion: 'auto'
        },
        '@angular/common': {
          singleton: true,
          strictVersion: true,
          requiredVersion: 'auto'
        },
        '@angular/router': {
          singleton: true,
          strictVersion: true,
          requiredVersion: 'auto'
        }

        // ...otros paquetes compartidos...
      }
    })
  ]
};
