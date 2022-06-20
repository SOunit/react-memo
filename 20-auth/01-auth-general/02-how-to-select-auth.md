# 認証方法の使い分け

https://gigazine.net/news/20201227-web-authentication-methods-compared/

- また、Shaji 氏は採用する認証方式を決める際には、以下の基準に従えばよいと語っています。
  - サーバーサイドのテンプレートを利用するアプリケーション
    - セッションベース認証。OAuth や OpenID を追加するのもよい
  - REST API
    - トークンベース認証
  - 高度な機密情報を扱う場合
    - ワンタイムパスワードを追加
