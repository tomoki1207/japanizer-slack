/*
  Original Source (for Trello):
    https://github.com/iso2022jp/japanizer-for-trello/blob/master/Firefox/lib/main.js
 */
require('sdk/tabs').on('ready', function(tab) {
  if (/^https:\/\/[^\/]*\.slack\.com\//i.test(tab.url)) {
    tab.attach({
      contentScriptFile: require('sdk/self').data.url('japanizer-for-slack.js'),
    });
  }
});
