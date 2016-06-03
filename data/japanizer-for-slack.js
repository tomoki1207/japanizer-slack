/*
  Original Source (for Trello):
    https://github.com/iso2022jp/japanizer-for-trello/blob/master/Firefox/data/japanizer-for-trello.js
 */
'use strict'

! function() {

  // ------------------ Translate mapping --------------------------

  var texts = {

    // Sign in page
    "Product": "プロダクト",
    "Pricing": "価格",
    "Support": "サポート",
    "Blog": "ブログ",
    "Sign in": "サインイン",
    "Log in": "サインイン",
    "Enter your <strong>email address</strong> and <strong>password</strong>.": "<strong>メールアドレス</strong>と<strong>パスワード</strong>を入力.",
    " Caps Lock is on": "Caps Lock が有効です",
    "Create a new team": "新たなチームを作成",
    "Find your team": "チームを検索",
    " Keep me signed in": "サインインしたままにする",
    "I forgot my password": "パスワードを忘れた場合",
    " Sorry, you entered an incorrect email address or password.": "正しいメールアドレスとパスワードを入力してください.",
    " You need to sign in to see this page.": "サインインしてください",
    "Unsure which email address? <a href=\"https://slack.com/signin/find\">We can help</a>.": "どのメールアドレスかわかりませんか? <a href=\"https://slack.com/signin/find\">お助けします</a>.",
    "You're already signed in to this team:": "このチームにはすでにサインインしています:",
    "You're already signed in to these teams:": "これらのチームにはすでにサインインしています:",
    "\n			Trying to create a team?\n				<a href=\"https://slack.com/\" class=\"bold\">Sign up on the home page</a> to get started.\n		": "チームを作成しますか? <a href=\"https://slack.com/\" class=\"bold\">サインアップ</a> して始めましょう.",

    // Sign in page - footer
    "Slack Guides": "Slackガイド",
    "Video Guides": "ビデオガイド",
    "App Directory": "Appディレクトリ",
    "Jobs": "お仕事",
    "Customers": "お客様",
    "Developers": "開発者",
    "Events": "イベント",
    "Podcast": "ポッドキャスト",
    "Slack Shop": "Slackショップ",
    "Privacy": "プライバシー",
    "Security": "セキュリティ",
    "Terms of Service": "利用規約",
    "Policies": "ポリシー",
    "Download desktop app": "デスクトップアプリ",
    "Download mobile app": "モバイルアプリ",
    "Brand Guidelines": "ブランドガイドライン",
    "Slack at Work": "Slackを仕事で",
    "Status": "ステータス",

    // Password Reset page
    "Password Reset": "パスワードをリセット",
    "Reset my password": "パスワードをリセットする",
    " Please enter an email address.": "メールアドレスを入力してください.",
    " Please enter a valid email address.": "正しいメールアドレスを入力してください.",
    "If we found an account associated with that email address, you will find an email from us in your inbox shortly.": "メールアドレスが登録されていた場合,すぐに私たちからメールが届きます.",
    "Unsure which email you used to create your Slack account? Please contact <a href=\"mailto:feedback@slack.com\">feedback@slack.com</a>.": "どのメールアドレスでアカウントを作ったか分かりませんか? <a href=\"mailto:feedback@slack.com\">feedback@slack.com</a>へご連絡ください.",
    "Once you have reset your password, <a href=\"/signin\">sign in</a> to your account to continue.": "パスワードをリセットしたら,<a href=\"/signin\">サインイン</a>して続けましょう.",

    // Sign up page
    "Enter your  email address to get started.": "メールアドレスを入力して始めましょう",
    "Create Account": "アカウント作成",
    "An email is on its way.": "メールを送信しました",
    "When your email arrives, click the link provided to complete signup.": "メールが届いたらリンクをクリックしてサインアップを完了してください。",

    // Sign out page
    "Signed Out": "サインアウトしました",
    "Sign back in": "再サインイン",

    // Desktop Notifications
    "\n		Slack needs your permission to ": "Slackからの通知を許可してください ",
    "enable desktop notifications": "有効化",
    "\n		We strongly recommend enabling desktop notifications if you'll be using Slack on this computer.\n		": "このPCでSlackを利用する場合,デスクトップ通知を有効化することをお勧めします.",
    "Enable notifications": "有効化",
    "Ask me next time": "後で",
    "Never ask again on this computer": "このPCでは使わない",

    // Main page - menu
    "Notifications": "通知",
    "Profile & account": "プロフィール設定",
    "Preferences": "表示設定",
    "\n						Set yourself to <strong>away</strong>\n				": "<strong>不在</strong>に設定",
    "\n						[Away] Set yourself to <strong>active</strong>\n				": "[不在] <strong>アクティブ</strong>に設定 ",
    "away": "不在",
    "active": "アクティブ",
    "Help & feedback": "ヘルプ & フィードバック",
    "Invite people": "メンバーの招待",
    "Manage team members": "メンバーの管理",
    "Team settings": "チーム設定",
    "\n					Apps & integrations\n				": "App & インテグレーション",
    "Customize Slack": "Slackのカスタマイズ",
    "Statistics": "統計情報",
    "Billing": "プラン",
    " Sign in to another team …": "別チームへサインイン …",
    "\n											CHANNELS\n											": "チャネル",
    "Browse all channels": "すべてのチャネルを表示",
    "DIRECT MESSAGES ": "ダイレクトメッセージ",
    "Direct Messages": "ダイレクトメッセージ",
    "Open a Direct Message": "ダイレクトメッセージを開く",
    " Invite People": "招待する",

    // Main page - menu - Preferences
    "Messages & Media": "メッセージ&メディア",
    "Sidebar Theme": "スライドバーのテーマ",
    "Search": "検索",
    "Mark as Read": "既読",
    "Advanced Options": "高度な設定",
    "Notification Settings": "通知設定",
    "Send notifications for:": "通知対象:",
    "\n	\n	Direct messages and highlight words\n	\n": "ダイレクトメッセージとハイライトワード",
    "Sound:": "サウンド:",
    "\n	Off (muted)\n": "オフ(ミュート)",
    "Display:": "表示:",
    "\n	Show text\n": "テキスト表示",
    "Desktop Notifications are currently disabled": "デスクトップ通知が無効になっています",
    "We strongly recommend enabling notifications so that you'll know when important activity happens on your Slack team.": "チームでの重要なアクティビティを知るために通知を有効にすることをお勧めします.",
    "Enable desktop notifications": "デスクトップ通知の有効化",
    "Desktop Notifications": "デスクトップ通知",
    "Click <strong>Allow</strong> in your browser's pop-up to enable notifications.": "ブラウザのポップアップ通知を <strong>許可</strong> する",
    "You've disallowed notifications in your browser. You'll need to open your browser preferences to change that.": "ブラウザからの通知を許可しない. これを変更するためにはブラウザ設定を開く必要があります.",
    "Try one of our apps": "Slack app をお試しください",
    "\n					All activity\n				": "すべて",
    "\n					Only direct messages and highlight words ": "ダイレクトメッセージとハイライトワードのみ ",
    "Recommended": "おすすめ",
    "\n					Nothing ": "なし",
    "Desktop notifications off": "デスクトップ通知オフ",
    "Sounds": "サウンド",
    "Mute all sounds": "すべてのサウンドをミュート",
    "Includes system alerts and notifications for messages": "システムアラートとメッセージ通知を含みます",
    "Notification Display": "通知表示",
    "Show message text in notifications": "通知にメッセージを表示",
    "Uncheck for additional privacy": "プライバシーを保護するためにはチェックを外してください",
    " Send test notification": "通知をテスト",
    "Highlight Words": "ハイライトワード",
    "\n			To be notified when someone mentions a word or phrase, add it here. You can separate words or phrases with commas. Highlight words are not case sensitive.\n			": "誰かがワードやフレーズに言及したら通知を受けたい場合ここに追加してください. 複数ワードをカンマ区切りで設定できます. ハイライトワードは大文字/小文字を区別しません.",
    "Do Not Disturb": "通知しない時間帯",
    "Notifications disabled": "通知を無効にする",
    "Japan Standard Time": "日本標準時間",
    "When Do Not Disturb is activated, Slack won't send desktop, mobile, or email notifications. You can manually snooze notifications by clicking the <i class=\"ts_icon ts_icon_bell_o ts_icon_inherit\"></i> icon by your name.": "通知しない時間帯を設定した場合,Slackはデスクトップでも,モバイルでも,emailでも通知しません. 名前のそばにある <i class=\"ts_icon ts_icon_bell_o ts_icon_inherit\"></i> アイコンで,手動でスヌーズ通知を設定できます",
    "Automatically disable notifications from:": "自動で通知を無効にする:",
    "change": "変更",

    // Main page - header
    "\n				Only paid teams can start calls from channels.\n			": "音声通話(有料版のみ)",
    "Channel Settings": "チャネル設定",
    "Jump to date …": "日付へジャンプ …",
    "Back to menu": "メニューへ戻る",
    "Invite team members to join …": "チームメンバーを招待 …",
    "View channel details": "チャネル詳細を見る",
    "Additional options …": "追加のオプション …",
    "Archive this channel": "チャネルをアーカイブ",
    "If you don't think it will be used any more and you want to clean up, archive it. The channel can be unarchived later (but everyone will have been removed).": "もう使っていないチャネルや整理したいチャネルをアーカイブします. チャネルはあとから元に戻すことができます(メンバは削除されます).",
    "Convert this channel to a private channel": "プライベートチャネルに変更",
    "Private channels are similar to channels, but they're hidden to non-members and the conversation is private. This conversion cannot be undone.": "プライベートチャネルはチャネルと似ていますが,会話がメンバー以外からは見られません. この操作は元に戻せません.",
    "Rename this channel": "チャネルのリネーム",
    "You can rename a channel at any time. But, use it sparingly: it might confuse or disorient your colleagues!": "チャネルの名前はいつでも変更できます. ただしメンバを混乱させるかもしれないのでほどほどに!",
    "Edit the channel purpose": "チャネルの目的を編集",
    "\n				Channel purposes are especially useful to new team members choosing which conversations to join.\n					This channel's current purpose is ": "チャネルの目的は新メンバが参加するチャネルを選択する際に便利です. このチャネルの目的は ",
    "Notification preferences …": "通知の設定 …",
    " Desktop notifications": "デスクトップ通知",
    "You have not yet allowed desktop notifications. Open the ": "デスクトップ通知が許可されていません.",
    "Preferences Dialog": "設定ダイアログ",
    " and follow the instructions to set them up.": "を開いて、指示に従って設定してください.",
    "You've disabled desktop notifications. Open the ": "デスクトップ通知が無効です.",
    " to change that.": "を開いて変更してください.",
    "Your browser does not support desktop notifications. ": "このブラウザはデスクトップ通知へ対応していません.",
    "Try one of our apps?": "Slackアプリを試してみますか?",
    " Activity of any kind ": "全て通知する",
    "(default)": "(デフォルト)",
    " Mentions of my name or highlight words ": "メンションとハイライトワードを通知",
    " Nothing ": "通知しない",
    " Mobile push notifications": "モバイルPUSH通知",
    "\n					@channel notifications\n				": "@チャネル通知",
    "(on mobile)": "(モバイル)",
    "(on desktop)": "(デスクトップ)",
    " Mute this channel\n				": "このチャネルをミュート",
    "\n			Muting prevents all notifications from this channel and prevents the channel from appearing as unread unless you are mentioned.\n		": "すべての通知が届かなくなり、メンションがある場合を除き未読ありチャネルとしても表示されなくなります.",
    "Done": "完了",
    "\n							Add an app or integration\n						": "appやインテグレーションを追加",
    "Show Channel Details": "チャネル詳細",
    "Hide Channel Details": "閉じる",
    "Channel Details": "チャネル詳細",
    "Pinned Items": "ピン留めした項目",
    "Shared Files": "シェアした項目",
    "Notification Preferences": "通知設定",
    "Show Mentions & Reactions": "メンション&リアクション",
    "Hide Mentions & Reactions": "閉じる",
    "\n					Mentions & Reactions\n					": "メンション&リアクション",
    "Show Starred Items": "スターを付けた項目",
    "Hide Starred Items": "閉じる",
    "Starred Items ": "スターを付けた項目",
    "More Items": "その他",
    "Your Files": "あなたのファイル",
    "All Files": "全てのファイル",
    "Team Directory": "チームディレクトリ",
    "Help": "ヘルプ",
    "What's New": "お知らせ",

    // Main page - messages
    " (edited)": "(編集済)",
    "Add reaction …": "リアクションの追加",
    "Share message …": "メッセージをシェア",
    "Copy link": "リンクをコピー",
    "Show message actions": "メッセージへのアクションを表示",
    "Mark unread": "未読にする",
    "Remind me about this ": "リマインド",
    "in 20 minutes": "20分後",
    "in 1 hour": "1時間後",
    "in 3 hours": "3時間後",
    "Tomorrow": "明日",
    "Next Week": "来週",
    "Pin to this conversation …": "メッセージをピン留め …",
    "Delete message": "メッセージを削除",

    "Narrow your search": "絞込検索",
    "Learn more": "kwsk",

    // Quick switcher
    "\n			Jump to a conversation\n			": "会話へジャンプ",
    "\n				<strong>tab</strong>&nbsp; or &nbsp;<strong>↑</strong> <strong>↓</strong>&nbsp; to navigate <strong class=\"small_left_margin\" aria-label=\"Return\">↵</strong>&nbsp; to select <strong class=\"small_left_margin\" aria-label=\"Escape\">esc</strong>&nbsp; to dismiss\n			": "<strong>tab</strong>&nbsp; か &nbsp;<strong>↑</strong> <strong>↓</strong>&nbsp; で移動 <strong class=\"small_left_margin\" aria-label=\"Return\">↵</strong>&nbsp; で選択 <strong class=\"small_left_margin\" aria-label=\"Escape\">esc</strong>&nbsp; で閉じる",
    "\n			No matches found. Did you spell it correctly?\n				": "見つかりません。スペルは正しいですか?",

    // Keyboard shortcuts
    "\n			Keyboard Shortcuts\n			": "キーボードショートカット",
    "Channels & DMs": "チャネル&ダイレクトメッセージ",
    "Previous in list: ": "上のチャネルへ移動: ",
    "Next in list: ": "下のチャネルへ移動: ",
    "Previous unread: ": "前の未読へ移動: ",
    "Next unread: ": "次の未読へ移動: ",
    "Back in history: ": "1つ前のチャネルへ移動: ",
    "Forward in history: ": "1つ後のチャネル移動: ",
    "Mark as read: ": "未読にする: ",
    "Mark all as read: ": "全て既読にする: ",
    "Quick switcher: ": "クイックスイッチャを開く: ",
    "Browse DMs: ": "ダイレクトメッセージを開く: ",
    "Messaging": "メッセージ",
    "\n					Autocomplete\n					": "オートコンプリート: ",
    "Names: ": "名前: ",
    "Channels: ": "チャネル: ",
    "Emoji: ": "絵文字: ",
    "New line: ": "改行: ",
    "Edit last message: ": "最新メッセージを編集: ",
    "React to last message: ": "最新メッセージへリアクション: ",
    "Extras": "その他",
    "Toggle Flexpane: ": "フレックスペインの切替: ",
    "Mentions: ": "メンション: ",
    "Stars: ": "スター: ",
    "Paste Snippet: ": "スニペットの貼付け: ",
    "Upload a File: ": "ファイルのアップロード: ",
    "Dismiss Dialogs: ": "ダイアログを閉じる: ",
    "\n			Begin a message with <strong class=\"command\">/</strong> for a list of all the commands at your disposal.\n		": "始めに <strong class=\"command\">/</strong> を入力すればコマンドのリストを表示しますので何なりと"
  };

  // Simple pattern texts
  // 親ノードがキャプチャされた場合にマッチしないように、正規表現の初め(^)と終わり($)を必ず指定すること
  var patternTexts = {
    "$1 へサインイン": /^\s+Sign in to\s+(<span(?:[^>]+)>[a-z0-9\.\-\_]+\.slack\.com<\/span>)$/,
    "$1のメールアドレスを持っている場合、$2アカウントを作成$3できます.": /^If you have an <strong>\s*<span(?:[^>]+)>\s+(@[a-z0-9\.\-\_]+)\s+<\/span>\s*<\/strong> email address, you can (<a(?:[^>]+)>)create an account(<\/a>)\.$/,
    "$1 からサインアウト": /^Sign out of\s+(<strong>\s*[A-Za-z0-9]+\s*<\/strong>)$/,
    "$1へピン留め …": /^Pin to\s*(#[a-zA-Z0-9]+)\s*…$/,
    "$1 からサインアウトしました": /^You've been signed out of the <strong>([a-zA-Z0-9\.\-_]+)<\/strong> team\.$/,
    "$1 の通知をミュート": /^Mute\s+(#[a-zA-Z0-9]+)$/,
    "$1 について": /^About\s+(<span(?:[^>]+)>\s*<i(?:[^>]+)><\/i>\s*[A-Za-z0-9]+\s*<\/span>)$/,
    "$1 メンバ": /^(\d+<span(?:[^>]+)>\s*\/\d+<\/span>)\s+Members$/,
    "$1 へサインアップ": /^\s*Sign up for\s+([a-z0-9\.\-\_]+\.slack\.com)$/,
    "$1のメールアドレスを持っていませんか?$2チームの管理者に連絡してみてください": /^\s*Don't have an\s+(<span(?:[^>]+)>\s+@[a-z0-9\.\-\_]+\s+<\/span>)\s+email address\?\s+(<br(?:[^>]+)>)\s+Contact your Team Administrator for an invitation\.\s*$/,
    "パスワードをリセットするには $1 へサインインする際に使用しているメールアドレスを入力してください.": /^To reset your password, enter the email address you use to sign in to (<strong>[a-z0-9\.\-\_]+\.slack\.com<\/strong>)\.$/,
    "$1 チャネルを作成": /^Create a channel named (#[a-zA-Z0-9\-\_]+)$/,
    "$1 表示設定": /^Your preferences for ([a-zA-Z0-9\-\_]+)$/,
    "<em>チャネル通知設定</em> からチャネル毎の通知を設定することができます. または,$1emailとモバイルの通知を設定$2できます.": /^You can override your desktop notification preference on a channel-by-channel basis by selecting <em>Channel notification preferences<\/em> in the channel menu. Or, (<a(?:[^>]+)>)set preferences for email and mobile notifications(<\/a>)\.$/,
    "いくつかのチャネルで$1通知設定が異なります$2. また,$3emailとモバイルの通知を設定$4できます.": /^Some of your channels have (<strong(?:[^>]+)data-original-title="(?:[^"]+)"(?:[^>]+)>)different notification settings(<\/strong>). You can also (<a(?:[^>]+)>)set preferences for email and mobile notifications(<\/a>)\.$/
  };

  var placeholders = {
    "Search": "検索",
    "Search channels": "チャネル検索",
    "Find or start a conversation": "検索 & チャット開始"
  };

  var titles = {
    "Close Flexpane": "ペインを閉じる",
    "Click to expand or collapse": "クリックして表示を切替",
  };

  var dates = {
    "January": "1",
    "February": "2",
    "March": "3",
    "April": "4",
    "May": "5",
    "June": "6",
    "July": "7",
    "August": "8",
    "September": "9",
    "October": "10",
    "November": "11",
    "December": "12",
    "Today": "今日",
    "Yesterday": "昨日"
  };

  // ------------------ Translate functions --------------------------

  Object.keys(texts).forEach(function(key) {
    texts[" " + key + " "] = " " + texts[key] + " ";
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
      return;
    }

    // ex. foo <strong>bar</strong>
    var pNode = node.parentNode;
    if (pNode && pNode.innerHTML in texts) {
      pNode.innerHTML = texts[pNode.innerHTML];
      return;
    }

    // ex. your.team.slack.com
    Object.keys(patternTexts).forEach(function(replacement) {
      var pattern = patternTexts[replacement];
      if (pattern.test(node.data)) {
        node.data = node.data.replace(pattern, replacement);
      } else if (pNode && pattern.test(pNode.innerHTML)) {
        pNode.innerHTML = pNode.innerHTML.replace(pattern, replacement);
      }
    });
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
    var monthandday = node.data.split(" ");
    if (monthandday.length !== 2) {
      node.data = dates[node.data];
    } else {
      // parseInt で序数を削除
      node.data = dates[monthandday[0]] + "/" + parseInt(monthandday[1]);
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
      translateAttribute(result.snapshotItem(k), "placeholder", placeholders);
    }

    // 説明
    result = document.evaluate('.//*[@title]', node, null, XPathResult.UNORDERED_NODE_SNAPSHOT_TYPE, result);
    for (var l = 0, lLength = result.snapshotLength; l < lLength; ++l) {
      translateAttribute(result.snapshotItem(l), "title", titles);
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
        case "childList":
          if (record.addedNodes) {
            for (var x = 0, xlength = record.addedNodes.length; x < xlength; ++x) {
              translateNode(record.addedNodes[x]);
            }
          }
          break;
        case "characterData":
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
