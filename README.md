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

### コンパイル

+ コマンドラインから
  - `npm run watch`

+ VSCodeから
  - <kbd>Ctrl</kbd>+<kbd>Shift</kbd>+<kbd>B</kbd>

その後は自動でコンパイル(トランスパイル)します

### Firefoxでのデバッグ

1. ソースをローカルへクローン
1. プラグインのルートフォルダへ移動 (`cd japanizer-slack`)
1. node.js と npm をインストール
1. npm で 必要なライブラリ をインストール (`npm install`)
1. `gulp watch` を起動
1. about:debugging#addons へアクセス [詳細](https://developer.mozilla.org/en-US/Add-ons/WebExtensions/Your_first_WebExtension)
   + アドオンのデバッグを有効化 にチェック
   + 一時的なアドオンを読み込む で `manifest.json` を選択
   + Slack へアクセス
   + ソース変更後はブラウザをリロード
1. デバッグの終了
   + ブラウザを閉じる(?)

## 注意とか

- 翻訳の正確性は保証しません
- Slackの公式ページやドキュメントページなどは翻訳しない予定です