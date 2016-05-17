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
    ' Sign in to ' : 'サインイン ',
    'Log in': 'サインイン',
    'Create a new team': '新たなチームを作成',
    ' Keep me signed in': 'サインインしたままにする',
    'I forgot my password': 'パスワードを忘れた場合',
    "\n			Trying to create a team?\n				" : 'チームを作成しますか?',
    'Sign up on the home page' : 'サインアップ',
    " to get started.\n		" : 'して始めましょう',
    ' Sorry, you entered an incorrect email address or password.' : '正しいメールアドレスとパスワードを入力してください.',

    // Sign in page - footer
    'Slack Guides' : 'Slackガイド',
    'Video Guides' : 'ビデオガイド',
    'App Directory' : 'Appディレクトリ',
    'Jobs' : 'お仕事',
    'Customers' : 'お客様',
    'Developers' : '開発者',
    'Events' : 'イベント',
    'Podcast' : 'ポッドキャスト',
    'Slack Shop' : 'Slackショップ',
    'Privacy' : 'プライバシー',
    'Security' : 'セキュリティ',
    'Terms of Service' : '利用規約',
    'Policies' : 'ポリシー',
    'Download desktop app' : 'デスクトップアプリ',
    'Download mobile app' : 'モバイルアプリ',
    'Brand Guidelines' : 'ブランドガイドライン',
    'Slack at Work' : 'Slackを仕事で',
    'Status' : 'ステータス',

    // Sign out page
    'Signed Out' : 'サインアウトしました',
    'Sign back in' : '再サインイン',

    // Desktop Notifications
    "\n		Slack needs your permission to " : 'Slackからの通知を許可してください ',
    'enable desktop notifications' : '有効化',
    "\n		We strongly recommend enabling desktop notifications if you'll be using Slack on this computer.\n		" : 'このPCでSlackを利用する場合,デスクトップ通知を有効化することをお勧めします.',
    'Enable notifications' : '有効化',
    'Ask me next time' : '後で',
    'Never ask again on this computer' : 'このPCでは使わない',

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
    'Sign out of ': 'サインアウト',
    ' Sign in to another team …': '別チームへサインイン …',
    "\n											CHANNELS\n											": 'チャネル',
    'Browse all channels': 'すべてのチャネルを表示',
    'DIRECT MESSAGES ': 'ダイレクトメッセージ',
    'Direct Messages': 'ダイレクトメッセージ',
    'Open a Direct Message': 'ダイレクトメッセージを開く',
    ' Invite People': '招待する',

    // Main page - messages
    "\n				Only paid teams can start calls from channels.\n			": '音声通話(有料版のみ)',
    'Channel Settings': 'チャネル設定',
    'Show Channel Details': 'チャネル詳細の表示',
    'Show Mentions & Reactions': 'あなた宛の発言&リアクション',
    'Show Starred Items': 'スターを表示',
    'More Items': 'その他',
    'Your Files': 'あなたのファイル',
    'All Files': '全てのファイル',
    'Team Directory': 'チームディレクトリ',
    'Help': 'ヘルプ',
    "What's New": 'お知らせ',
    ' (edited)': '(編集済)',
    'Add reaction …': 'リアクションの追加',
    'Copy link': 'リンクをコピー',
    'Show message actions': 'メッセージへのアクションを表示',
    'Mark unread': '未読にする',
    'Remind me about this ': 'リマインド',
    'in 20 minutes': '20分後',
    'in 1 hour': '1時間後',
    'in 3 hours': '3時間後',
    'Tomorrow': '明日',
    'Next Week': '来週',
    'Delete message': 'メッセージを削除',

    'Narrow your search': '絞込検索',
    'Learn more': 'kwsk'
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
    if (monthandday.length !== 2) {
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

  // initial translate
  translateNode(document);

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
