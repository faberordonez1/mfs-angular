const { withModuleFederationPlugin } = require('@angular-architects/module-federation/webpack');
const dotenv = require('dotenv');
dotenv.config(); 

const config = withModuleFederationPlugin({
  remotes: {
    web_apuestas: `web_apuestas@${process.env.REMOTE_APUESTAS_URL || 'http://localhost:4202'}/remoteEntry.js`,
    web_recargas: `web_recargas@${process.env.REMOTE_RECARGAS_URL || 'http://localhost:4203'}/remoteEntry.js`,
  },
  shared: {
    '@angular/core': { singleton: true, strictVersion: true },
    '@angular/common': { singleton: true, strictVersion: true },
    '@angular/router': { singleton: true, strictVersion: true },
  },
});

config.output.publicPath = process.env.PUBLIC_PATH || 'auto';
config.output.uniqueName = 'web_home';

module.exports = config;
