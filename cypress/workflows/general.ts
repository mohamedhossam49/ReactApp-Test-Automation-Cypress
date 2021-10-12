/* eslint-disable global-require */
/// <reference types="cypress-xpath" />

export interface ICredentials {
    baseUrl: string;
  }
  
  export interface IViewPort {
    lengh: number;
    width: number;
  }

export const getProperties = (viewport?: IViewPort) => {
  const generalConfs = require('../fixtures/generalConfs.json');
  const envName: string = generalConfs.server;
  let env;

  switch (envName) {
    case 'qa':
      env = require('../fixtures/envs/qa.json');
      break;

    default:
      env = require('../fixtures/envs/qa.json');
      break;
  }

  const { baseUrl } = env;

  let vp: IViewPort;
  if (!viewport || undefined === viewport) {
    vp = { lengh: 1500, width: 800 };
  }

  cy.viewport(vp.lengh, vp.width);

  return { baseUrl };
};

export const goToApp = (baseUrl: string) => {
  cy.visit(baseUrl);
};
