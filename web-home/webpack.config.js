const {
  shareAll,
  withModuleFederationPlugin
} = require('@angular-architects/module-federation/webpack');
// const path = require('path');

// module.exports = {
//   output: {
//     uniqueName: 'web_home',
//     publicPath: 'auto',
//     scriptType: 'text/javascript'
//   },
//   plugins: [
//     withModuleFederationPlugin({
//       name: 'web_home',
//       remotes: {
//         web_apuestas: 'web_apuestas@http://localhost:4201/remoteEntry.js',
//         web_recargas: 'web_recargas@http://localhost:4202/remoteEntry.js'
//       },
//       shared: {
//         ...shareAll({
//           singleton: true,
//           strictVersion: false,
//           requiredVersion: 'auto'
//         })
//       }
//     })
//   ]
// };

const moduleFederationConfig = withModuleFederationPlugin({
  remotes: {
    web_apuestas: 'web_apuestas@http://localhost:4202/remoteEntry.js',
    web_recargas: 'web_recargas@http://localhost:4201/remoteEntry.js'
  },

  shared: {
    ...shareAll({
      singleton: true,
      strictVersion: false,
      requiredVersion: 'auto'
    })
  }
});

moduleFederationConfig.output.publicPath = 'http://localhost:4200/';

module.exports = moduleFederationConfig;
