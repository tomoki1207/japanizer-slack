import { translate, setAttr, observe } from './translator-core';

const json = require('../data/messages.json');

function translateTeamMenu(menu) {
  setAttr(menu.querySelector('#member_account_item > a'), 'messages.menu.profile_n_account');
  setAttr(menu.querySelector('#member_prefs_item > a'), 'messages.menu.preferences');
  const setTo = menu.querySelector('#member_presence > a > span');
  setAttr(setTo, 'messages.menu.set_to');
  const presence = setTo.querySelector('strong');
  setAttr(presence, presence.textContent === 'away' ? 'messages.menu.away' : 'messages.menu.active');
  setAttr(menu.querySelector('#team_help > a'), 'messages.menu.help_n_feedback');
  setAttr(menu.querySelector('#team_invitations > a'), 'messages.menu.invite_people');
  setAttr(menu.querySelector('#manage_team > a'), 'messages.menu.manage_members');
  setAttr(menu.querySelector('#team_settings > a'), 'messages.menu.team_settings');
  setAttr(menu.querySelector('#team_services > a'), 'messages.menu.apps_n_integrations');
  setAttr(menu.querySelector('#team_customize > a'), 'messages.menu.customize_slack');
  setAttr(menu.querySelector('#team_statistics > a'), 'messages.menu.statistics');
  setAttr(menu.querySelector('#team_billing > a'), 'messages.menu.billing');
  setAttr(menu.querySelector('#logout > a'), 'messages.menu.logout');
  setAttr(menu.querySelector('#add_team > a'), 'messages.menu.signin_to_another');

  translate(json);
}

function init() {
  // watch menu panel
  observe(document.querySelector('#client-ui'), (mutations, observer) => {
    const menu = document.querySelector('#menu.team_menu');
    if (menu) {
      translateTeamMenu(menu);
    }
  }, { childList: true });
}

init();