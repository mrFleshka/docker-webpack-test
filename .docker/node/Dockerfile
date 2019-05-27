FROM node:8

# install yarn
RUN npm install --global yarn
ENV PATH "/var/www/app/node_modules/.bin:$PATH"

COPY ./.docker/node/entrypoint.sh /entrypoint.sh
RUN chmod +x /entrypoint.sh

USER node

WORKDIR /var/www/app

ENTRYPOINT ["/entrypoint.sh"]
CMD ["node", "index.js"]