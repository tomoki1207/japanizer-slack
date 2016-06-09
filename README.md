# [Japanize for Slack](https://addons.mozilla.org/ja/firefox/addon/japanizer-for-slack/)
Slackのチームページを翻訳するFirefoxアドオンです


## 参考

[japanizer-for-trello](https://github.com/iso2022jp/japanizer-for-trello)

## コントリビューション

1. リポジトリをフォーク
1. 翻訳/新機能 ブランチを作成 (`git checkout -b my-translation`)
1. 変更をコミット
1. ブランチへプッシュ (`git push origin my-translation`)
1. プルリクエストを作成

### Firefoxでのデバッグ

1. ソースをローカルへクローン
1. プラグインのルートフォルダへ移動 (`cd japanizer-slack`)
1. node.js と npm をインストール
1. npm で jpm をインストール (`npm install -g jpm`)
1. [jpm](https://developer.mozilla.org/en-US/Add-ons/SDK/Tools/jpm) を起動
  + 新しいプロファイルでFirefoxを起動してデバッグする場合: `jpm run`
  + 現在のFirefoxでデバッグする場合: `jpm watchpost --post-url http://localhost:8888`
1. デバッグの終了
  + `jpm run` でのデバッグ: ブラウザを閉じる
  + `jpm watchpost` でのデバッグ: `Ctrl` + `c`

## 注意とか

- Slackの公式ページやドキュメントページなどは翻訳しません (翻訳の正確性を保証できないため)
- japanizer-for-trelloのソースを流用しているため、作者から申し出があった場合、公開は停止されます
