# ==== CONFIGURE =====
# Use a Node 18 base image
FROM node:18-alpine 

# Update base image and install dependencies
RUN apk update
RUN apk add nginx
RUN apk add supervisor

# Configure nginx
RUN rm -f /etc/nginx/http.d/default.conf
ADD ./docker/nginx/default.conf /etc/nginx/http.d/default.conf

# Configure supervisor
COPY ./docker/supervisord.conf /etc/supervisor/supervisord.conf
COPY ./docker/supervisor.conf /etc/supervisor/conf.d/supervisor.conf
RUN mkdir -p /app/node_modules && chown -R node:node /app
RUN mkdir -p /var/log/supervisor && chown -R node:node /var/log/supervisor

# Set the working directory to /app inside the container
WORKDIR /app

# Copy app files
COPY . .

#RUN npm install
# ==== BUILD =====
# Install dependencies (npm ci makes sure the exact versions in the lockfile gets installed)
RUN npm ci
COPY --chown=node:node . ./

# Expose port
EXPOSE 5173

# Start supervisor
CMD ["/usr/bin/supervisord", "-n", "-c", "/etc/supervisor/supervisord.conf"]
