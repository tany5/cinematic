/* eslint-disable @typescript-eslint/no-var-requires */
/* eslint-disable no-undef */
const { shareAll, withModuleFederationPlugin } = require('@angular-architects/module-federation/webpack');

module.exports = withModuleFederationPlugin({

  name: 'search-app',

  exposes: {
    './SearchModule': './projects/search-app/src/app/search/search.module.ts',
  },

  shared: {
    ...shareAll({ singleton: true, strictVersion: true, requiredVersion: 'auto' }),
  },

});
