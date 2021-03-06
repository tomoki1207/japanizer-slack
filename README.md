# [Japanize for Slack](#)
Slackのチームページを翻訳するFirefoxアドオンです

## コントリビューション

1. リポジトリをフォーク
1. 翻訳/新機能 ブランチを作成 (`git checkout -b my-translation`)
1. 変更をコミット
1. ブランチへプッシュ (`git push origin my-translation`)
1. プルリクエストを作成

## 開発

### 翻訳用JSONフォーマット
+ 通常のDOM `<a href="...">Foo</a>`
  - 値には文字列を設定
  - `"path.to.foo": "ほげ"` ⇒ `<a href="...">ほげ</a>`
+ 子要素を持つDOM `<p>bar<strong>baz</strong>foobar</p>`
  - 値には配列を設定
  - DOM内のテキストノードと配列の値がマッピングされる
  - `"path.to.bar": ["ふが", "ほげふが"]` ⇒ `<p>ほげ<strong>baz</strong>ほげふが</p>`
  - 子要素は別途定義
  - `"path.to.baz": "ぴよ"` ⇒ `<strong>ぴよ</strong>`
+ 動的にテキストが書き換わるDOM `<span>#general is here</span>`
  - 値には`{reg, text}`のプロパティを持つObjectを設定
  - 正規表現(`reg`)でキャプチャした部分を使用して文字列が置き換えられる
  - `{"reg": "(#.+) is here", "text": "$1はここです"}` ⇒ `<span>#generalはここです</span>`

### コンパイル

+ コマンドラインから
  - `npm run watch`

+ VSCodeから
  - <kbd>Ctrl</kbd>+<kbd>Shift</kbd>+<kbd>B</kbd>

その後は自動でコンパイル(トランスパイル)します

### デバッグ

1. ソースをローカルへクローン
1. プラグインのルートフォルダへ移動 (`cd japanizer-slack`)
1. node.js と npm をインストール
1. npm で 必要なライブラリ をインストール (`npm install`)
1. `gulp watch` を起動
1. ブラウザを開く
  - Forefox
    + about:debugging#addons へアクセス [詳細](https://developer.mozilla.org/en-US/Add-ons/WebExtensions/Your_first_WebExtension)
    + アドオンのデバッグを有効化 にチェック
    + 一時的なアドオンを読み込む で `manifest.json` を選択
  - Chrome
    + 設定 > その他のツール > 拡張機能 クリック [詳細](https://developer.chrome.com/extensions/getstarted#unpacked)
    + デベロッパーモード にチェック
    + パッケージ化されていない拡張機能を読み込む クリック
    + プロジェクトのルートフォルダを選択
1. Slack へアクセス
1. ソース変更後はブラウザをリロード
1. デバッグの終了
   + ブラウザを閉じる(?)

## 注意とか

- 翻訳の正確性は保証しません
- Slackの公式ページやドキュメントページなどは翻訳しない予定です