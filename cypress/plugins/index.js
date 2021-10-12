/// <reference types="cypress" />
/**
 * @type {Cypress.PluginConfig}
 */

const cucumber = require('cypress-cucumber-preprocessor').default;
const browserify = require('@cypress/browserify-preprocessor');

module.exports = (on) => {
  const options = browserify.defaultOptions;

module.exports = (on, config) => {
  require('cypress-mochawesome-reporter/plugin')(on);
};

  options.browserifyOptions.plugin.unshift(['tsify']);
  // Or, if you need a custom tsconfig.json for your test files:
  // options.browserifyOptions.plugin.unshift(['tsify', {project: 'tsconfig.json'}]);

  on('file:preprocessor', cucumber(options));
};

