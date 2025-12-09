const { withModuleFederationPlugin } = require('@angular-architects/module-federation/webpack');

const config = withModuleFederationPlugin({
  name: 'web_apuestas',
  exposes: {
    './Routes': './src/app/app.routes.ts',
  },
  filename: 'remoteEntry.js',
  shared: {
    '@angular/core': { singleton: true, strictVersion: true },
    '@angular/common': { singleton: true, strictVersion: true },
    '@angular/router': { singleton: true, strictVersion: true },
  },
});

config.output.publicPath = process.env.PUBLIC_PATH || 'auto';
config.output.uniqueName = 'web_apuestas';

module.exports = config;
