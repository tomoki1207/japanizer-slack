import { translate, setAttr } from './translator-core';

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

function translatePrefs(prefs) {
  setAttr(prefs.querySelector('#fs_modal_header > h3'), 'messages.prefs.header');

  // sidebar
  const sidebar = prefs.querySelector('#fs_modal_sidebar');
  setAttr(sidebar.querySelector('a[data-section="notifications"]'), 'messages.prefs.sidebar.notifications');
  setAttr(sidebar.querySelector('a[data-section="messages_media"]'), 'messages.prefs.sidebar.messages_media');
  setAttr(sidebar.querySelector('a[data-section="themes"]'), 'messages.prefs.sidebar.themes');
  setAttr(sidebar.querySelector('a[data-section="search"]'), 'messages.prefs.sidebar.search');
  setAttr(sidebar.querySelector('a[data-section="read_state_tracking"]'), 'messages.prefs.sidebar.read_state_tracking');
  setAttr(sidebar.querySelector('a[data-section="a11y"]'), 'messages.prefs.sidebar.a11y');
  setAttr(sidebar.querySelector('a[data-section="advanced"]'), 'messages.prefs.sidebar.advanced');

  const setAttrToPrefsDetail = (contents) => {
    const notifications = contents.querySelector('div#prefs_notifications');
    if (notifications) {
      setAttr(notifications.querySelector('h2.section_rollup_header'), 'messages.prefs.contents.notifications.settings.title');
      setAttr(notifications.querySelector('p span:first-child strong'), 'messages.prefs.contents.notifications.settings.description.send_for');
      setAttr(notifications.querySelector('p span:nth-child(2) strong'), 'messages.prefs.contents.notifications.settings.description.sound');
      setAttr(notifications.querySelector('p span:last-child strong'), 'messages.prefs.contents.notifications.settings.description.display');
      const dnd = contents.querySelector('div#prefs_dnd');
      setAttr(dnd.querySelector('h2.section_rollup_header'), 'messages.prefs.contents.notifications.dnd.title');
      setAttr(dnd.querySelector('p > span:first-child strong'), 'messages.prefs.contents.notifications.dnd.description.disabled');
    }
  };

  // contents
  const contents = prefs.querySelector('div.contents');
  setAttrToPrefsDetail(contents);
  translate(json);

  const config = { childList: true, subtree: true, characterData: true };
  const observer = new MutationObserver((_, obs) => {
    obs.disconnect();
    setAttrToPrefsDetail(contents);
    translate(json);
    obs.observe(contents, config);
  });
  observer.observe(contents, config);
  return observer;
}

function init() {
  // watch menu panel
  new MutationObserver(() => {
    const teamMenu = document.querySelector('#menu.team_menu');
    if (teamMenu) {
      return translateTeamMenu(teamMenu);
    }
    const channelMenu = document.querySelector('#menu[data-qa="channel_menu"]');
    if (channelMenu) {
      return translateChannelMenu(channelMenu);
    }
    return false;
  }).observe(document.querySelector('#client-ui'), { childList: true });

  // watch preference panel
  const childObservers = {};
  new MutationObserver(() => {
    const prefs = document.querySelector('#fs_modal.prefs_modal');
    if (prefs && !childObservers.prefs) {
      childObservers.prefs = translatePrefs(prefs);
    } else if (!prefs && childObservers.prefs) {
      childObservers.prefs.disconnect();
      childObservers.prefs = null;
    }
  }).observe(document.querySelector('body'), { childList: true });
}

init();