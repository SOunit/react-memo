# url

- 【連載】世界一わかりみの深い OAuth 入門 〜 その 2:アクセストークンとリフレッシュトークン 〜
  https://tech-lab.sios.jp/archives/25565

# OAuth の 4 つの特徴

- 従来の ID・パスワードベースとは異なるトークンベースの認証
- トークンには限られた権限だけを与えられているので、万が一トークンが盗まれても被害が少ない
- 認可コードフローなどによりトークンを安全に取得
- トークンには有効期限が設定されており、万が一トークンを盗まれても有効期限過ぎると使えないので、セキュア

# アクセストークンタイプ

- type A
  - アクセストークンの中にアクセストークンに関する情報を内包せず、やり取りされる情報はアクセストークンを一意に識別する識別子のみで、アクセストークンに関する情報はデータベースなどに保存する。
- type B
  - アクセストークンに関する情報をアクセストークンの中に内包する形式