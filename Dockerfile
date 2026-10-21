FROM node:22-alpine
ENV NODE_ENV=production
WORKDIR /app
COPY --chown=node:node index.html style.css app.js server.mjs ./
USER node
ENV PORT=8080
EXPOSE 8080
CMD ["node", "server.mjs"]
