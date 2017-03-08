import { translate, setAttr } from './translator-core';

const json = require('../data/invite.json');

function invite() {
  const opts = { childList: true, characterData: true, subtree: true };
  const inviteForm = document.querySelector('#invite_form');
  new MutationObserver((_, observer) => {
    const formBody = document.querySelector('#invite_form_body');
    observer.disconnect();
    if (formBody.querySelector('#names_container')) {
      setAttr(formBody.querySelector('h1'), 'invite.form.set_name.title');
      setAttr(formBody.querySelector('#names_container > label'), 'invite.form.set_name.realname');
      setAttr(formBody.querySelector('#names_container > p:last-child'), 'invite.form.set_name.realname_help');
      setAttr(formBody.querySelector('#username_container > label'), 'invite.form.set_name.username');
      setAttr(formBody.querySelector('#username_container > p:last-child'), 'invite.form.set_name.username_help');
      const err = formBody.querySelector('#username_error_message');
      if (err.textContent.includes('Please fill in')) {
        setAttr(err, 'invite.form.error.username.fill');
      } else if (err.textContent.includes('Sorry, usernames can only contain')) {
        setAttr(err, 'invite.form.error.username.invalid_chars');
      } else if (err.textContent.includes('Sorry, but this username is not available')) {
        setAttr(err, 'invite.form.error.username.not_available');
      }
      setAttr(inviteForm.querySelector('#email_checkbox > label'), 'invite.form.set_name.allow_email');
      setAttr(inviteForm.querySelector('#submit_btn > span.ladda-label'), 'invite.form.next');
    } else if (formBody.querySelector('#password_container')) {
      setAttr(formBody.querySelector('h1'), 'invite.form.set_password.title');
      setAttr(inviteForm.querySelector('#invite_form_body > p'), 'invite.form.set_password.title_help');
      setAttr(formBody.querySelector('#password_container > label'), 'invite.form.set_password.password');
      setAttr(formBody.querySelector('#password_container > p:last-child'), 'invite.form.set_password.password_help');
      const err = formBody.querySelector('#password_error_message');
      if (err.textContent.includes('Please enter a password')) {
        setAttr(err, 'invite.form.error.password.empty');
      } else if (err.textContent.includes('Your password must be at least')) {
        setAttr(err, 'invite.form.error.password.short');
      } else if (err.textContent.includes('Your password cannot solely')) {
        setAttr(err, 'invite.form.error.password.sequence');
      } else if (err.textContent.includes('That password is pretty common')) {
        setAttr(err, 'invite.form.error.password.common');
      }
      setAttr(inviteForm.querySelector('#submit_btn > span.ladda-label'), 'invite.form.next');
    } else if (formBody.querySelector('h1.tos_title_form')) {
      setAttr(formBody.querySelector('h1'), 'invite.form.tos.title');
      // should not translate TOS
      setAttr(inviteForm.querySelector('div.tos_i_agree_banner p.tos_disclaimer'), 'invite.form.tos.disclaimer');
      setAttr(inviteForm.querySelector('div.tos_i_agree_banner p.tos_disclaimer > strong'), 'invite.form.tos.disclaimer_agree');
      setAttr(inviteForm.querySelector('div.tos_i_agree_banner p.tos_disclaimer > a'), 'invite.form.tos.disclaimer_link');
      setAttr(inviteForm.querySelector('#submit_btn > span.ladda-label'), 'invite.form.agree');
    }
    translate(json);
    observer.observe(inviteForm, opts);
  }).observe(inviteForm, opts);
}

invite();