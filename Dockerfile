# ==== CONFIGURE =====
# Use a Node 18 base imag
FROM node:18-alpine 

RUN apk update
RUN apk add nginx
RUN apk add supervisor

RUN rm -f /etc/nginx/http.d/default.conf
ADD ./docker/nginx/default.conf /etc/nginx/http.d/default.conf

COPY ./docker/supervisord.conf /etc/supervisor/supervisord.conf
COPY ./docker/supervisor.conf /etc/supervisor/conf.d/supervisor.conf

RUN mkdir -p /app/node_modules && chown -R node:node /app
RUN mkdir -p /var/log/supervisor && chown -R node:node /var/log/supervisor

WORKDIR /app
COPY . .
RUN npm install
RUN npm ci
COPY --chown=node:node . ./
EXPOSE 5173

CMD ["/usr/bin/supervisord", "-n", "-c", "/etc/supervisor/supervisord.conf"]
