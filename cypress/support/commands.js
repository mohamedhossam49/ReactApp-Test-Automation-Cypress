// eslint-disable-next-line import/prefer-default-export

export const ignoreUncaughtException = () => {
  Cypress.on('uncaught:exception', () => false);
};
