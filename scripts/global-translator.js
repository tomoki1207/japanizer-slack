import { setAttr } from './translator-core';

const json = require('../data/global.json');

export function getGlobalDefenition() {
  return json;
}

export function setGlobalAttrs() {
  const headerUl = document.querySelector('nav.persistent ul');
  setAttr(headerUl.querySelector('a[data-qa="product"]'), 'global.header.product');
  setAttr(headerUl.querySelector('a[data-qa="pricing"]'), 'global.header.pricing');
  setAttr(headerUl.querySelector('a[data-qa="support"]'), 'global.header.support');
  setAttr(headerUl.querySelector('a[data-qa="download_slack"]'), 'global.header.download_slack');
  setAttr(headerUl.querySelector('a[data-qa="create_team"]'), 'global.header.create_team');
  setAttr(headerUl.querySelector('a[data-qa="find_team"]'), 'global.header.find_team');
  setAttr(headerUl.querySelector('a[data-qa="sign_in"]'), 'global.header.sign_in');
}