import { translate, setAttr, observe } from './translator-core';

const json = require('../data/messages.json');

function translateTeamMenu(menu) {
  setAttr(menu.querySelector('#member_account_item > a'), 'messages.team_menu.account');
  setAttr(menu.querySelector('#member_prefs_item > a'), 'messages.team_menu.prefs');
  const setTo = menu.querySelector('#member_presence > a > span');
  setAttr(setTo, 'messages.team_menu.presence');
  const presence = setTo.querySelector('strong');
  setAttr(presence, presence.textContent === 'away' ? 'messages.team_menu.away' : 'messages.team_menu.active');
  setAttr(menu.querySelector('#team_help > a'), 'messages.team_menu.help');
  setAttr(menu.querySelector('#team_invitations > a'), 'messages.team_menu.invitations');
  setAttr(menu.querySelector('#manage_team > a'), 'messages.team_menu.team');
  setAttr(menu.querySelector('#team_settings > a'), 'messages.team_menu.settings');
  setAttr(menu.querySelector('#team_services > a'), 'messages.team_menu.services');
  setAttr(menu.querySelector('#team_customize > a'), 'messages.team_menu.customize');
  setAttr(menu.querySelector('#team_statistics > a'), 'messages.team_menu.statistics');
  setAttr(menu.querySelector('#team_billing > a'), 'messages.team_menu.billing');
  setAttr(menu.querySelector('#logout > a'), 'messages.team_menu.logout');
  setAttr(menu.querySelector('#add_team > a'), 'messages.team_menu.add_team');

  translate(json);
}

function translateChannelMenu(menu) {
  setAttr(menu.querySelector('#channel_jump_item > a'), 'messages.channel_menu.jump');
  setAttr(menu.querySelector('#channel_invite_item > a'), 'messages.channel_menu.invite');
  setAttr(menu.querySelector('#channel_details_item > a'), 'messages.channel_menu.details');
  setAttr(menu.querySelector('#channel_advanced_item > a'), 'messages.channel_menu.advanced');
  setAttr(menu.querySelector('#channel_prefs > a'), 'messages.channel_menu.prefs');
  setAttr(menu.querySelector('#channel_mute_item > a'), 'messages.channel_menu.mute');
  setAttr(menu.querySelector('#channel_add_service_item > a'), 'messages.channel_menu.add_service');

  translate(json);
}

function init() {
  // watch menu panel
  observe(document.querySelector('#client-ui'), (mutations, observer) => {
    const teamMenu = document.querySelector('#menu.team_menu');
    if (teamMenu) {
      return translateTeamMenu(teamMenu);
    }
    const channelMenu = document.querySelector('#menu[data-qa="channel_menu"]');
    if (channelMenu) {
      return translateChannelMenu(channelMenu);
    }
    return false;
  });
}

init();