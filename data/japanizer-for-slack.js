/*
  Original Source (for Trello):
    https://github.com/iso2022jp/japanizer-for-trello/blob/master/Firefox/data/japanizer-for-trello.js
 */
'use strict'

! function() {

  // ------------------ Translate mapping --------------------------

  var texts = {

    // Sign in page
    'Product': 'プロダクト',
    'Pricing': '価格',
    'Support': 'サポート',
    'Blog': 'ブログ',
    'Sign in': 'サインイン',
    'Create a new team': '新たなチームを作成',
    'Enter your email address and password': 'e-mailアドレスとパスワードを入力',
    'Keep me signed in': 'サインインしたままにする',
    'I fogot my password': 'パスワードを忘れた場合',

    // Main page - menu
    'Notifications': '通知',
    'Profile & account': 'プロフィール設定',
    'Preferences': '表示設定',
    "\n						Set yourself to ": 'モード変更 ',
    "\n						[Away] Set yourself to ": '[不在] モード変更 ',
    'away': '不在',
    'active': 'アクティブ',
    'Help & feedback': 'ヘルプ & フィードバック',
    'Invite people': 'メンバーの招待',
    'Manage team members': 'メンバーの管理',
    'Team settings': 'チーム設定',
    "\n					Apps & integrations\n				": 'アプリ & 外部サービス連携',
    'Customize Slack': 'Slackのカスタマイズ',
    'Statistics': '統計情報',
    'Billing': 'プラン',
    ' Sign in to another team …': '別チームへサインイン …',
    "\n											CHANNELS\n											": 'チャネル',
    'Browse all channels': 'すべてのチャネルを表示',
    'DIRECT MESSAGES ': 'ダイレクトメッセージ',
    'Direct Messages': 'ダイレクトメッセージ',
    'Open a Direct Message': 'ダイレクトメッセージを開く',
    ' Invite People': '招待',

    // Main page - messages
    ' (edited)': '(編集済)',


    'Narrow your search': '絞込検索',
  };

  var placeholders = {
    'Search': '検索',
    'Search channels': 'チャネル検索',
    'Find or start a conversation': '検索 & チャット開始'
  };

  var titles = {};

  var dates = {
    'January': '1',
    'February': '2',
    'March': '3',
    'April': '4',
    'May': '5',
    'June': '6',
    'July': '7',
    'August': '8',
    'September': '9',
    'October': '10',
    'November': '11',
    'December': '12',
    'Today': '今日',
    'Yesterday': '昨日'
  };

  // ------------------ Translate functions --------------------------

  Object.keys(texts).forEach(function(key) {
    texts[' ' + key + ' '] = ' ' + texts[key] + ' ';
  });

  var translatePattern = function(node, patterns) {
    if (node.data === null || node.data.length === 0)
      return;

    Object.keys(patterns).forEach(function(replacement) {
      var pattern = patterns[replacement];
      if (pattern.test(node.data)) {
        node.data = node.data.replace(pattern, replacement);
        return;
      }
    });
  };

  var translateData = function(node) {
    if (node.data in texts) {
      node.data = texts[node.data];
    }
  };

  var translateButton = function(node) {
    if (node.value in texts) {
      node.value = texts[node.value];
    }
  };

  var translateAttribute = function(node, attribute, map) {
    var value = node.getAttribute(attribute);
    if (value === null || value.length === 0)
      return;

    if (value in map) {
      node.setAttribute(attribute, map[value]);
    }
  };

  var translateDayDivider = function(node) {
    var monthandday = node.data.split(' ');
    console.log(node.data);
    if (monthandday.length !== 2){
      node.data = dates[node.data];
    } else {
      // parseInt で序数を削除
      node.data = dates[monthandday[0]] + '/' + parseInt(monthandday[1]);
    }
  };

  var translateNode = function(node) {

    // 単純置換可能なテキスト
    var result = document.evaluate('.//text()', node, null, XPathResult.UNORDERED_NODE_SNAPSHOT_TYPE, null);
    for (var i = 0, iLength = result.snapshotLength; i < iLength; ++i) {
      translateData(result.snapshotItem(i));
    }

    // ボタン類
    result = document.evaluate('.//input[@value][@type="button" or @type="submit"]', node, null, XPathResult.UNORDERED_NODE_SNAPSHOT_TYPE, result);
    for (var j = 0, jLength = result.snapshotLength; j < jLength; ++j) {
      translateButton(result.snapshotItem(j));
    }

    // プレースホルダ
    result = document.evaluate('.//*[@placeholder]', node, null, XPathResult.UNORDERED_NODE_SNAPSHOT_TYPE, result);
    for (var k = 0, kLength = result.snapshotLength; k < kLength; ++k) {
      translateAttribute(result.snapshotItem(k), 'placeholder', placeholders);
    }

    // 説明
    result = document.evaluate('.//*[@title]', node, null, XPathResult.UNORDERED_NODE_SNAPSHOT_TYPE, result);
    for (var l = 0, lLength = result.snapshotLength; l < lLength; ++l) {
      translateAttribute(result.snapshotItem(l), 'title', titles);
    }

    // 日付
    result = document.evaluate('.//*[@class="day_divider_label"]/text()', node, null, XPathResult.UNORDERED_NODE_SNAPSHOT_TYPE, result);
    for (var m = 0, mLength = result.snapshotLength; m < mLength; ++m) {
      translateDayDivider(result.snapshotItem(m));
    }
  };

  // ------------------ Do Translate --------------------------

  new MutationObserver(function(records, observed) {
    records.forEach(function(record) {
      switch (record.type) {
        case 'childList':
          if (record.addedNodes) {
            for (var x = 0, xlength = record.addedNodes.length; x < xlength; ++x) {
              translateNode(record.addedNodes[x]);
            }
          }
          break;
        case 'characterData':
          translateData(record.target);
          break;
      }
    });
  }).observe(document, {
    childList: true,
    subtree: true,
    characterData: true,
  });
}();
