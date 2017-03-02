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

function translateChannelPrefsDialog(dialog) {
  setAttr(dialog.querySelector('div.modal-header h3'), 'messages.channel_prefs.header');
  setAttr(dialog.querySelector('#notifications_not_working p:first-child'), 'messages.channel_prefs.disable_notify.caption');
  setAttr(dialog.querySelector('#notifications_not_yet_allowed'), 'messages.channel_prefs.disable_notify.not_yet_allowd');
  setAttr(dialog.querySelector('#notifications_not_yet_allowed > a'), 'messages.channel_prefs.disable_notify.not_yet_allowd_link');
  setAttr(dialog.querySelector('#notifications_not_enabled'), 'messages.channel_prefs.disable_notify.not_enabled');
  setAttr(dialog.querySelector('#notifications_not_enabled > a'), 'messages.channel_prefs.disable_notify.not_enabled_link');
  setAttr(dialog.querySelector('#notifications_not_allowed'), 'messages.channel_prefs.disable_notify.not_allowed');
  setAttr(dialog.querySelector('#notifications_impossible'), 'messages.channel_prefs.disable_notify.impossible');
  setAttr(dialog.querySelector('#notifications_impossible > a'), 'messages.channel_prefs.disable_notify.impossible_link');
  setAttr(dialog.querySelector('#notifications_working p:first-child'), 'messages.channel_prefs.desktop.caption');
  setAttr(dialog.querySelector('#notifications_working p:last-child > label:first-child'), 'messages.channel_prefs.settings.any');
  setAttr(dialog.querySelector('#notifications_working p:last-child > label:nth-child(2)'), 'messages.channel_prefs.settings.mentions');
  setAttr(dialog.querySelector('#notifications_working p:last-child > label:last-child'), 'messages.channel_prefs.settings.none');
  setAttr(dialog.querySelector('#all_everything_default'), 'messages.channel_prefs.settings.default');
  setAttr(dialog.querySelector('#all_mentions_default'), 'messages.channel_prefs.settings.default');
  setAttr(dialog.querySelector('#all_nothing_default'), 'messages.channel_prefs.settings.default');
  setAttr(dialog.querySelector('#non_muting_prefs > p:nth-child(2)'), 'messages.channel_prefs.mobile.caption');
  setAttr(dialog.querySelector('#non_muting_prefs > p:nth-child(3) > label:first-child'), 'messages.channel_prefs.settings.any');
  setAttr(dialog.querySelector('#non_muting_prefs > p:nth-child(3) > label:nth-child(2)'), 'messages.channel_prefs.settings.mentions');
  setAttr(dialog.querySelector('#non_muting_prefs > p:nth-child(3) > label:last-child'), 'messages.channel_prefs.settings.none');
  setAttr(dialog.querySelector('#all_push_everything_default'), 'messages.channel_prefs.settings.default');
  setAttr(dialog.querySelector('#all_push_mentions_default'), 'messages.channel_prefs.settings.default');
  setAttr(dialog.querySelector('#all_push_nothing_default'), 'messages.channel_prefs.settings.default');
  setAttr(dialog.querySelector('#single_suppressed_div > p:first-child'), 'messages.channel_prefs.suppressed.caption');
  setAttr(dialog.querySelector('#single_suppressed_div > p:last-child > label'), 'messages.channel_prefs.suppressed.mute');
  setAttr(dialog.querySelector('#single_suppressed_mobile_qualifier'), 'messages.channel_prefs.suppressed.on_mobile');
  setAttr(dialog.querySelector('#single_suppressed_desktop_qualifier'), 'messages.channel_prefs.suppressed.on_desktop');
  const mute = dialog.querySelector('#muting_div');
  setAttr(mute.querySelector('p:first-child > label'), 'messages.channel_prefs.mute.caption');
  setAttr(mute.querySelector('p:last-child'), 'messages.channel_prefs.mute.help');
  setAttr(dialog.querySelector('div.modal-footer > p'), 'messages.channel_prefs.more');
  setAttr(dialog.querySelector('div.modal-footer > p > a'), 'messages.channel_prefs.more_link');
  setAttr(dialog.querySelector('div.modal-footer > a.btn'), 'messages.channel_prefs.done');
  translate(json);
}

function setAttrToPrefsDetail(contents) {
  const notifications = contents.querySelector('div#prefs_notifications');
  if (notifications) {
    setAttr(notifications.querySelector('h2.section_rollup_header'), 'messages.prefs.contents.notifications.settings.title');
    setAttr(notifications.querySelector('p span:first-child strong'), 'messages.prefs.contents.notifications.settings.description.send_for');
    const sendFor = notifications.querySelector('p span:first-child');
    if (sendFor.textContent.includes('All activity')) {
      setAttr(sendFor, 'messages.prefs.contents.notifications.settings.description.send_all');
    } else if (sendFor.textContent.includes('Direct messages and highlight words')) {
      setAttr(sendFor, 'messages.prefs.contents.notifications.settings.description.send_dm');
    } else if (sendFor.textContent.includes('Nothing')) {
      setAttr(sendFor, 'messages.prefs.contents.notifications.settings.description.send_off');
    }
    setAttr(notifications.querySelector('p span:nth-child(2) strong'), 'messages.prefs.contents.notifications.settings.description.sound');
    const sound = notifications.querySelector('p span:nth-child(2)');
    if (sound.textContent.includes('Off (muted)')) {
      setAttr(sound, 'messages.prefs.contents.notifications.settings.description.sound_mute');
    }
    setAttr(notifications.querySelector('p span:last-child strong'), 'messages.prefs.contents.notifications.settings.description.display');
    const display = notifications.querySelector('p span:last-child');
    if (display.textContent.includes('Show text')) {
      setAttr(display, 'messages.prefs.contents.notifications.settings.description.display_show');
    } else if (display.textContent.includes('Hide text')) {
      setAttr(display, 'messages.prefs.contents.notifications.settings.description.display_hide');
    }
    const permissionDiv = notifications.querySelector('div#growls_permission_div');
    setAttr(permissionDiv.querySelector('h4'), 'messages.prefs.contents.notifications.settings.permission.caption');
    setAttr(permissionDiv.querySelector('p'), 'messages.prefs.contents.notifications.settings.permission.help');
    setAttr(permissionDiv.querySelector('#growls_permission_link'), 'messages.prefs.contents.notifications.settings.permission.enable');
    const instructionDiv = notifications.querySelector('div#growls_instructions_div');
    setAttr(instructionDiv.querySelector('h4'), 'messages.prefs.contents.notifications.settings.instructions.caption');
    setAttr(instructionDiv.querySelector('p'), 'messages.prefs.contents.notifications.settings.instructions.help');
    setAttr(instructionDiv.querySelector('p > strong'), 'messages.prefs.contents.notifications.settings.instructions.allow');
    const disallowdDiv = notifications.querySelector('div#growls_disallowed_div');
    setAttr(disallowdDiv.querySelector('h4'), 'messages.prefs.contents.notifications.settings.disallowed.caption');
    setAttr(disallowdDiv.querySelector('p'), 'messages.prefs.contents.notifications.settings.disallowed.help');
    const impossibleDiv = notifications.querySelector('div#growls_impossible_div');
    setAttr(impossibleDiv.querySelector('h4'), 'messages.prefs.contents.notifications.settings.impossible.caption');
    setAttr(impossibleDiv.querySelector('p'), 'messages.prefs.contents.notifications.settings.impossible.help');
    setAttr(impossibleDiv.querySelector('p > a'), 'messages.prefs.contents.notifications.settings.impossible.help_link');
    const allowedDiv = notifications.querySelector('div#growls_allowed_div');
    setAttr(allowedDiv.querySelector('#prefs_send_notifications_for'), 'messages.prefs.contents.notifications.settings.allowed.caption');
    setAttr(allowedDiv.querySelector('p > label:first-child'), 'messages.prefs.contents.notifications.settings.allowed.all');
    setAttr(allowedDiv.querySelector('p > label:nth-child(2)'), 'messages.prefs.contents.notifications.settings.allowed.specify');
    setAttr(allowedDiv.querySelector('p > label:nth-child(2) > span'), 'messages.prefs.contents.notifications.settings.allowed.recommended');
    setAttr(allowedDiv.querySelector('p > label:last-child'), 'messages.prefs.contents.notifications.settings.allowed.none');
    setAttr(allowedDiv.querySelector('p > label:last-child > span'), 'messages.prefs.contents.notifications.settings.allowed.off');
    setAttr(allowedDiv.querySelector('#no_non_default'), 'messages.prefs.contents.notifications.settings.allowed.default.help');
    setAttr(allowedDiv.querySelector('#no_non_default > em'), 'messages.prefs.contents.notifications.settings.allowed.default.help_cnp');
    setAttr(allowedDiv.querySelector('#no_non_default > a'), 'messages.prefs.contents.notifications.settings.allowed.default.help_link');
    setAttr(allowedDiv.querySelector('#no_non_default + p'), 'messages.prefs.contents.notifications.settings.allowed.non_default.help');
    setAttr(allowedDiv.querySelector('#no_non_default + p > strong'), 'messages.prefs.contents.notifications.settings.allowed.non_default.help_dns');
    setAttr(allowedDiv.querySelector('#no_non_default + p > a'), 'messages.prefs.contents.notifications.settings.allowed.non_default.help_link');
    const subPrefs = contents.querySelectorAll('div#prefs_notifications > div > h4');
    setAttr(notifications.querySelector('#prefs_sounds'), 'messages.prefs.contents.notifications.settings.sounds.caption');
    setAttr(notifications.querySelector('span#prefs_mute_all_sounds_label'), 'messages.prefs.contents.notifications.settings.sounds.mute');
    setAttr(notifications.querySelector('span#prefs_mute_all_sounds_label ~ span'), 'messages.prefs.contents.notifications.settings.sounds.mute_tip');
    setAttr(subPrefs[1], 'messages.prefs.contents.notifications.settings.display.caption');
    setAttr(notifications.querySelector('span#prefs_show_message_text_label'), 'messages.prefs.contents.notifications.settings.display.show_text');
    setAttr(notifications.querySelector('span#prefs_show_message_text_label ~ span'), 'messages.prefs.contents.notifications.settings.display.show_text_tip');
    setAttr(subPrefs[2], 'messages.prefs.contents.notifications.settings.threads.caption');
    setAttr(notifications.querySelector('span#prefs_threads_everything_label'), 'messages.prefs.contents.notifications.settings.threads.everything');
    setAttr(notifications.querySelector('span#prefs_threads_everything_label ~ span'), 'messages.prefs.contents.notifications.settings.threads.everything_tip');
    setAttr(notifications.querySelector('#growls_test'), 'messages.prefs.contents.notifications.settings.test');
    setAttr(notifications.querySelector('#prefs_highlight_words'), 'messages.prefs.contents.notifications.settings.hilight.caption');
    setAttr(notifications.querySelector('#prefs_highlight_words + label.normal'), 'messages.prefs.contents.notifications.settings.hilight.help');
    const dnd = contents.querySelector('div#prefs_dnd');
    setAttr(dnd.querySelector('h2.section_rollup_header'), 'messages.prefs.contents.notifications.dnd.title');
    const disturb = dnd.querySelector('p > span:first-child');
    if (disturb.textContent.includes('Do Not Disturb is not enabled.')) {
      setAttr(disturb, 'messages.prefs.contents.notifications.dnd.description.disabled');
    } else {
      setAttr(disturb.querySelector('strong'), 'messages.prefs.contents.notifications.dnd.description.enabled');
      setAttr(disturb.querySelector('span'), 'messages.prefs.contents.notifications.dnd.description.jst');
      setAttr(disturb, 'messages.prefs.contents.notifications.dnd.description.timerange');
    }
    setAttr(contents.querySelector('div#prefs_dnd > div > p'), 'messages.prefs.contents.notifications.dnd.help');
    setAttr(contents.querySelector('#prefs_dnd_checkbox_label'), 'messages.prefs.contents.notifications.dnd.auto_disable_from');
    setAttr(contents.querySelector('div#prefs_dnd > div > span'), 'messages.prefs.contents.notifications.dnd.to');
    setAttr(contents.querySelector('div#prefs_dnd > div > span:last-child > span'), 'messages.prefs.contents.notifications.dnd.jst');
    return;
  }
  if (contents.querySelector('#prefs_message_theme')) {
    setAttr(contents.querySelector('h2'), 'messages.prefs.contents.messages_media.display.title');
    setAttr(contents.querySelector('#prefs_message_theme'), 'messages.prefs.contents.messages_media.display.theme.caption');
    const theme = contents.querySelector('#prefs_message_theme ~ div div.col:first-child');
    setAttr(theme.querySelector('label:first-child'), 'messages.prefs.contents.messages_media.display.theme.clean');
    setAttr(theme.querySelector('label:first-child > span'), 'messages.prefs.contents.messages_media.display.theme.clean_tip');
    setAttr(theme.querySelector('label:last-child'), 'messages.prefs.contents.messages_media.display.theme.compact');
    setAttr(theme.querySelector('label:last-child > span'), 'messages.prefs.contents.messages_media.display.theme.compact_tip');
    setAttr(contents.querySelector('#prefs_display_options'), 'messages.prefs.contents.messages_media.display.options.caption');
    const opts = contents.querySelector('#prefs_display_options ~ p');
    setAttr(opts.querySelector('label:first-child'), 'messages.prefs.contents.messages_media.display.options.typing');
    setAttr(opts.querySelector('label:nth-child(2)'), 'messages.prefs.contents.messages_media.display.options.real_name');
    setAttr(opts.querySelector('#display_real_names_default'), 'messages.prefs.contents.messages_media.display.options.real_name_default');
    setAttr(opts.querySelector('#display_usernames_default'), 'messages.prefs.contents.messages_media.display.options.real_name_default');
    setAttr(opts.querySelector('label:nth-child(3)'), 'messages.prefs.contents.messages_media.display.options.time24');
    setAttr(opts.querySelector('label:nth-child(3) > span'), 'messages.prefs.contents.messages_media.display.options.time24_tip');
    setAttr(opts.querySelector('label:nth-child(4)'), 'messages.prefs.contents.messages_media.display.options.hex');
    setAttr(opts.querySelector('label:nth-child(5)'), 'messages.prefs.contents.messages_media.display.options.lato');
    setAttr(opts.querySelector('label:nth-child(5) > a'), 'messages.prefs.contents.messages_media.display.options.lato_link');
    setAttr(opts.querySelector('label:nth-child(5) > span'), 'messages.prefs.contents.messages_media.display.options.lato_help');
    setAttr(contents.querySelector('#prefs_emoji_style'), 'messages.prefs.contents.messages_media.display.emoji.caption');
    const emoji = contents.querySelector('#prefs_emoji');
    setAttr(emoji.querySelector('label:first-child > span'), 'messages.prefs.contents.messages_media.display.emoji.apple');
    setAttr(emoji.querySelector('label:nth-child(2) > span'), 'messages.prefs.contents.messages_media.display.emoji.google');
    setAttr(emoji.querySelector('label:nth-child(3) > span'), 'messages.prefs.contents.messages_media.display.emoji.twitter');
    setAttr(emoji.querySelector('label:nth-child(4) > span'), 'messages.prefs.contents.messages_media.display.emoji.one');
    setAttr(emoji.querySelector('label:nth-child(5)'), 'messages.prefs.contents.messages_media.display.emoji.none_tip');
    setAttr(emoji.querySelector('label:nth-child(5) > span'), 'messages.prefs.contents.messages_media.display.emoji.none_tip');
    setAttr(contents.querySelector('#jumbomoji_pref > label'), 'messages.prefs.contents.messages_media.display.emoji.jumbomoji');
    setAttr(contents.querySelector('#jumbomoji_pref > label > span'), 'messages.prefs.contents.messages_media.display.emoji.jumbomoji_help');
    setAttr(contents.querySelector('#prefs_convert_emoticons'), 'messages.prefs.contents.messages_media.display.emoticons.caption');
    setAttr(contents.querySelector('#prefs_convert_emoticons ~ p label.checkbox'), 'messages.prefs.contents.messages_media.display.emoticons.convert');
    setAttr(contents.querySelector('#prefs_inline_media'), 'messages.prefs.contents.messages_media.media_links.title');
    const links = contents.querySelector('#prefs_inline_media ~ p');
    setAttr(links.querySelector('label:first-child'), 'messages.prefs.contents.messages_media.media_links.expand_internal');
    setAttr(links.querySelector('label:nth-child(2)'), 'messages.prefs.contents.messages_media.media_links.expand_inline');
    setAttr(links.querySelector('label:nth-child(3)'), 'messages.prefs.contents.messages_media.media_links.dont_obey');
    setAttr(links.querySelector('label:nth-child(4)'), 'messages.prefs.contents.messages_media.media_links.expand_non_media');
    return;
  }
  if (contents.querySelector('#prefs_themes')) {
    setAttr(contents.querySelector('#prefs_sidebar_theme'), 'messages.prefs.contents.sidebar_theme.title');
    setAttr(contents.querySelector('#prefs_sidebar_theme ~ p'), 'messages.prefs.contents.sidebar_theme.help');
    setAttr(contents.querySelector('#customize_theme_info'), 'messages.prefs.contents.sidebar_theme.custom.info');
    setAttr(contents.querySelector('#customize_theme_info > a'), 'messages.prefs.contents.sidebar_theme.custom.info_toggle');
    const custom = contents.querySelector('#prefs_themes_customize');
    setAttr(custom.querySelector('h4'), 'messages.prefs.contents.sidebar_theme.custom.caption');
    setAttr(custom.querySelector('label:nth-child(2)'), 'messages.prefs.contents.sidebar_theme.custom.col_bg');
    setAttr(custom.querySelector('label:nth-child(3)'), 'messages.prefs.contents.sidebar_theme.custom.menu_bg_hover');
    setAttr(custom.querySelector('label:nth-child(4)'), 'messages.prefs.contents.sidebar_theme.custom.act_item');
    setAttr(custom.querySelector('label:nth-child(5)'), 'messages.prefs.contents.sidebar_theme.custom.act_item_txt');
    setAttr(custom.querySelector('label:nth-child(6)'), 'messages.prefs.contents.sidebar_theme.custom.hover_item');
    setAttr(custom.querySelector('label:nth-child(7)'), 'messages.prefs.contents.sidebar_theme.custom.txt');
    setAttr(custom.querySelector('label:nth-child(8)'), 'messages.prefs.contents.sidebar_theme.custom.act_pres');
    setAttr(custom.querySelector('label:nth-child(9)'), 'messages.prefs.contents.sidebar_theme.custom.ment_bdg');
    setAttr(custom.querySelector('label:last-child'), 'messages.prefs.contents.sidebar_theme.custom.share');
    return;
  }
  if (contents.querySelector('#prefs_search_exclusion')) {
    setAttr(contents.querySelector('#prefs_search_exclusion'), 'messages.prefs.contents.search.title');
    setAttr(contents.querySelector('#prefs_search_exclusion ~ p'), 'messages.prefs.contents.search.help');
    setAttr(contents.querySelector('#prefs_search_exclusion ~ p:last-child > label'), 'messages.prefs.contents.search.exclude');
    return;
  }
  if (contents.querySelector('#prefs_read_state_tracking')) {
    setAttr(contents.querySelector('#prefs_read_state_tracking'), 'messages.prefs.contents.read_state_tracking.title');
    setAttr(contents.querySelector('#prefs_read_state_tracking ~ p'), 'messages.prefs.contents.read_state_tracking.help');
    setAttr(contents.querySelector('#prefs_read_state_tracking ~ h4'), 'messages.prefs.contents.read_state_tracking.view.caption');
    const states = contents.querySelector('#prefs_read_state_tracking ~ p.large_bottom_margin');
    setAttr(states.querySelector('label.radio:first-child'), 'messages.prefs.contents.read_state_tracking.view.immediate_scroll');
    setAttr(states.querySelector('label.radio:nth-child(2)'), 'messages.prefs.contents.read_state_tracking.view.immediate');
    setAttr(states.querySelector('label.radio:nth-child(3)'), 'messages.prefs.contents.read_state_tracking.view.default');
    setAttr(contents.querySelector('#prefs_read_state_tracking ~ h4 ~ h4'), 'messages.prefs.contents.read_state_tracking.shortcuts.caption');
    const shortcuts = contents.querySelectorAll('#prefs_read_state_tracking ~ h4 ~ h4 ~ p');
    setAttr(shortcuts[0].querySelector('b'), 'messages.prefs.contents.read_state_tracking.shortcuts.channel');
    setAttr(shortcuts[0], 'messages.prefs.contents.read_state_tracking.shortcuts.channel_key');
    setAttr(shortcuts[1].querySelector('b'), 'messages.prefs.contents.read_state_tracking.shortcuts.everything');
    setAttr(shortcuts[1], 'messages.prefs.contents.read_state_tracking.shortcuts.everything_key');
    setAttr(shortcuts[2].querySelector('b'), 'messages.prefs.contents.read_state_tracking.shortcuts.unread');
    setAttr(shortcuts[2], 'messages.prefs.contents.read_state_tracking.shortcuts.unread_key');
    return;
  }
  if (contents.querySelector('#prefs_a11y_animations')) {
    setAttr(contents.querySelector('h2'), 'messages.prefs.contents.a11y.title');
    setAttr(contents.querySelector('#prefs_a11y_animations'), 'messages.prefs.contents.a11y.animation.caption');
    setAttr(contents.querySelector('label.checkbox'), 'messages.prefs.contents.a11y.animation.allow');
  }
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
  // translate static contents
  setAttr(document.querySelector('#notifications_banner'), 'messages.banner.notifications');
  setAttr(document.querySelector('#notifications_banner > a'), 'messages.banner.notifications_link');
  setAttr(document.querySelector('#notifications_dismiss_banner'), 'messages.banner.notifications_dismiss.caption');
  setAttr(document.querySelector('#notifications_dismiss_banner > span > a:first-child'), 'messages.banner.notifications_dismiss.enabled');
  setAttr(document.querySelector('#notifications_dismiss_banner > span > a:nth-child(2)'), 'messages.banner.notifications_dismiss.ask_later');
  setAttr(document.querySelector('#notifications_dismiss_banner > span > a:last-child'), 'messages.banner.notifications_dismiss.never');

  translate(json);

  // watch menu panel
  new MutationObserver(() => {
    const teamMenu = document.querySelector('#menu.team_menu');
    if (teamMenu) {
      translateTeamMenu(teamMenu);
      return;
    }
    const channelMenu = document.querySelector('#menu[data-qa="channel_menu"]');
    if (channelMenu) {
      translateChannelMenu(channelMenu);
      return;
    }
    const channelPref = document.querySelector('#channel_prefs_dialog');
    if (channelPref) {
      translateChannelPrefsDialog(channelPref);
    }
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