// const { ModuleFederationPlugin } = require('webpack').container;
// const path = require('path');

// module.exports = {
//   output: {
//     uniqueName: 'web_recargas',
//     publicPath: 'auto',
//     scriptType: 'text/javascript'
//   },
//   optimization: {
//     runtimeChunk: false
//   },
//   plugins: [
//     new ModuleFederationPlugin({
//       name: 'web_recargas',
//       filename: 'remoteEntry.js',
//       exposes: {
//         './RecargasModule': './src/app/recargas/recargas.module.ts'
//       },
//       shared: {
//         '@angular/core': {
//           singleton: false,
//           strictVersion: false,
//           requiredVersion: 'auto'
//         },
//         '@angular/common': {
//           singleton: false,
//           strictVersion: false,
//           requiredVersion: 'auto'
//         },
//         '@angular/router': {
//           singleton: false,
//           strictVersion: false,
//           requiredVersion: 'auto'
//         }
//         // ...otros paquetes compartidos...
//       }
//     })
//   ]
// };

const {
  shareAll,
  withModuleFederationPlugin
} = require('@angular-architects/module-federation/webpack');

module.exports = withModuleFederationPlugin({
  name: 'web_recargas',

  exposes: {
    './RecargasModule': './src/app/recargas/recargas.module.ts'
  },

  shared: {
    ...shareAll({
      singleton: true,
      strictVersion: true,
      requiredVersion: 'auto'
    })
  }
});
