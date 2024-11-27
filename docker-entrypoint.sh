#!/bin/sh
set -e

# 環境変数からnginxの設定ファイルを生成
envsubst '$PORT' < /etc/nginx/templates/default.conf.template > /etc/nginx/conf.d/default.conf

# コマンドの実行
exec "$@"