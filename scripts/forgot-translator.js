import merge from 'merge';
import { translate, setAttr } from './translator-core';
import { setGlobalAttrs, getGlobalDefenition } from './global-translator';

const json = require('../data/forgot.json');

function forgot() {
  setGlobalAttrs();

  const content = document.querySelector('#page_contents div.card');
  const title = content.querySelector('h1:first-child');
  if (title.textContent === 'Password Reset') {
    setAttr(title, 'forgot.reset.title');
    setAttr(content.querySelector('form > p'), 'forgot.reset.reset_explain');
    setAttr(content.querySelector('#submit_password_reset span:first-child'), 'forgot.reset.send_reset_link');
  } else {
    setAttr(title, 'forgot.sent.title');
    setAttr(content.querySelector('div > p'), 'forgot.sent.check_emal');
    setAttr(content.querySelector('div p:last-child'), 'forgot.sent.help');
    setAttr(content.querySelector('div p:last-child > a'), 'forgot.sent.help_link');
  }
  translate(merge(getGlobalDefenition(), json));
}

forgot();