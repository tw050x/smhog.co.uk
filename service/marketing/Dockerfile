FROM node:12.2.0-alpine

WORKDIR /srv
RUN chmod 755 /srv && chown -R node:node /srv
COPY --chown=node:node package.json .
COPY --chown=node:node package-lock.json .
COPY --chown=node:node service/marketing/ .

USER node
RUN npm install && npm audit fix

ENTRYPOINT [ "/usr/local/bin/node" ]
CMD [ "--version" ]
