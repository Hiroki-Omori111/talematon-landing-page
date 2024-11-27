# ベースイメージ
FROM node:18.18.0-slim as base
WORKDIR /app
RUN npm install -g gatsby-cli

# 開発環境用イメージ
FROM base as develop
ENV NODE_ENV=development
ENV GATSBY_WEBPACK_PUBLICPATH=/

COPY package*.json ./
RUN npm ci

EXPOSE 8000
EXPOSE 9000

CMD ["npm", "run", "develop", "-H", "0.0.0.0"]

# プロダクション用ビルダー
FROM base as prod-builder
ENV NODE_ENV=production

COPY package*.json ./
RUN npm ci

COPY . .
RUN npm run build

# プロダクション環境用イメージ（Cloud Run向け）
FROM nginx:alpine as production
# Cloud Runは$PORTを環境変数として提供
ENV PORT=80
EXPOSE 80

# Nginxの設定をCloud Run用に調整
COPY nginx.cloud.conf /etc/nginx/templates/default.conf.template
COPY --from=prod-builder /app/public /usr/share/nginx/html

# Cloud Run用のエントリーポイント
COPY docker-entrypoint.sh /
RUN chmod +x /docker-entrypoint.sh
ENTRYPOINT ["/docker-entrypoint.sh"]
CMD ["nginx", "-g", "daemon off;"]