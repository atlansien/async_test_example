## 使い方

1. このレポジトリを `git clone` する
2. cloneしたレポジトリに移動して `npm install` する。(必要なライブラリをインストールする)
3. `npm test` でテストを実行する
  - 特定の1ファイルをテストしたい場合は `npm test test/AsyncHandler.test.js` のようにテストファイルを指定する

## テストコードの詳細

- testディレクトリ内のテストコードを参照
- テストファイル名・テスト対象のファイル名は対応している
  - 例
    - `test/math.test.js` と `math.js`
    - `test/AsyncHandler.test.js` と `AsyncHandler.js`

## テストコードの書き方

Web白熱教室の学習コンテンツ 「[JavaScriptバックエンド編 > テストコード入門](https://tsuyopon.xyz/learning-contents/web-dev/javascript/backend/#i-2)」 を参照