import merge from 'merge';
import { translate, setAttr } from './translator-core';
import { setGlobalAttrs, getGlobalDefenition } from './global-translator';

const json = require('../data/signin.json');

function signin() {
  setGlobalAttrs();
  setAttr(document.querySelector('#signin_header'), 'signin.content.title');
  const contentForm = document.querySelector('#page_contents div.signin_card form');
  setAttr(contentForm.querySelector('p.browser_password'), 'signin.content.title_tip');
  setAttr(contentForm.querySelector('p.browser_password strong:first-child'), 'signin.content.title_tip_email');
  setAttr(contentForm.querySelector('p.browser_password strong:last-child'), 'signin.content.title_tip_password');
  setAttr(contentForm.querySelector('button#signin_btn span.ladda-label'), 'signin.content.signin_btn');
  setAttr(contentForm.querySelector('label.checkbox.normal'), 'signin.content.remember');
  setAttr(contentForm.querySelector('#forgot-pw'), 'signin.content.forgotpw');
  setAttr(contentForm.querySelector('#forgot_email > a'), 'signin.content.forgot_email');
  const real = document.querySelector('#page_contents div.real_content:last-child');
  const createAccount = real.querySelector('p:first-child');
  if (createAccount.textContent.includes('Don\'t have an account on')) {
    setAttr(real.querySelector('span:first-child'), 'signin.content.dont_have_account');
    setAttr(real.querySelector('span:last-child'), 'signin.content.contact_to_admin');
  } else if (createAccount.textContent.startsWith('If you have')) {
    setAttr(createAccount, 'signin.content.create_account_tip');
    setAttr(real.querySelector('p:first-child a'), 'signin.content.create_account');
  }
  if (real.querySelector('a.btn')) {
    setAttr(real.querySelector('p:nth-child(2)'), 'signin.content.already_signed');
  }
  setAttr(real.querySelector('p:last-child'), 'signin.content.create_team_tip');
  setAttr(real.querySelector('p:last-child a'), 'signin.content.create_team');

  setAttr(document.querySelector('p.alert.alert_error'), 'signin.error.incorrect');
  setAttr(document.querySelector('#error_ratelimit'), 'signin.error.ratelimit');
  setAttr(document.querySelector('#error_ratelimit strong'), 'signin.error.ratelimit_tip');
  setAttr(document.querySelector('#error_unknown'), 'signin.error.unknown');

  translate(merge(getGlobalDefenition(), json));
}

signin();