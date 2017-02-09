import { translate, setAttr } from './translator-core';

const json = require('../data/signin.json');

function signin() {
  const headerUl = document.querySelector('nav.persistent ul');
  setAttr(headerUl.querySelector('a[data-qa="product"]'), 'signin.header.product');
  setAttr(headerUl.querySelector('a[data-qa="pricing"]'), 'signin.header.pricing');
  setAttr(headerUl.querySelector('a[data-qa="support"]'), 'signin.header.support');
  setAttr(headerUl.querySelector('a[data-qa="download_slack"]'), 'signin.header.download_slack');
  setAttr(headerUl.querySelector('a[data-qa="create_team"]'), 'signin.header.create_team');
  setAttr(headerUl.querySelector('a[data-qa="find_team"]'), 'signin.header.find_team');
  setAttr(headerUl.querySelector('a[data-qa="sign_in"]'), 'signin.header.sign_in');

  setAttr(document.querySelector('#signin_header'), 'signin.content.title');
  const contentForm = document.querySelector('#page_contents div.signin_card form');
  setAttr(contentForm.querySelector('p.browser_password'), 'signin.content.title_tip');
  setAttr(contentForm.querySelector('p.browser_password strong:first-child'), 'signin.content.title_tip_email');
  setAttr(contentForm.querySelector('p.browser_password strong:last-child'), 'signin.content.title_tip_password');
  setAttr(contentForm.querySelector('button#signin_btn span.ladda-label'), 'signin.content.signin_btn');
  setAttr(contentForm.querySelector('label.checkbox.normal'), 'signin.content.remember');
  setAttr(contentForm.querySelector('#forgot-pw'), 'signin.content.forgotpw');
  const real = document.querySelector('#page_contents div.real_content:last-child');
  setAttr(real.querySelector('p:first-child'), 'signin.content.create_account_tip');
  setAttr(real.querySelector('p:first-child a'), 'signin.content.create_account');
  setAttr(real.querySelector('p:last-child'), 'signin.content.create_team_tip');
  setAttr(real.querySelector('p:last-child a'), 'signin.content.create_team');

  setAttr(document.querySelector('p.alert.alert_error'), 'signin.error.incorrect');
  setAttr(document.querySelector('#error_ratelimit'), 'signin.error.ratelimit');
  setAttr(document.querySelector('#error_ratelimit strong'), 'signin.error.ratelimit_tip');
  setAttr(document.querySelector('#error_unknown'), 'signin.error.unknown');

  translate(json);
}

signin();