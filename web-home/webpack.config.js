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
  plugins: [
    new ModuleFederationPlugin({
      name: 'web_home',
      remotes: {
        web_apuestas: 'web_apuestas@http://localhost:4201/remoteEntry.js',
        web_recargas: 'web_recargas@http://localhost:4202/remoteEntry.js'
      },
      shared: {
        '@angular/core': {
          singleton: false,
          strictVersion: false,
          requiredVersion: 'auto'
        },
        '@angular/common': {
          singleton: false,
          strictVersion: false,
          requiredVersion: 'auto'
        },
        '@angular/router': {
          singleton: false,
          strictVersion: false,
          requiredVersion: 'auto'
        }
        // ...otros paquetes compartidos...
      }
    })
  ]
};
