import merge from 'merge';
import { translate, setAttr } from './translator-core';
import { setGlobalAttrs, getGlobalDefenition } from './global-translator';

const json = require('../data/signout.json');

function signout() {
  setGlobalAttrs();

  const content = document.querySelector('#page_contents div.card');
  setAttr(content.querySelector('h1:first-child'), 'signout.content.title');
  setAttr(content.querySelector('a[data-qa="sign_back_in"]'), 'signout.content.sign_back_in');

  translate(merge(getGlobalDefenition(), json));
}

signout();