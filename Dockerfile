### Multi-stage Dockerfile: build the React app then serve with nginx

FROM node:18-alpine AS build
WORKDIR /app

# install dependencies (use npm ci if package-lock.json exists)
COPY package.json package-lock.json* ./
RUN npm install --production=false --silent

# copy sources and build
COPY . .
RUN npm run build

FROM nginx:stable-alpine

# Copy built assets
COPY --from=build /app/dist /usr/share/nginx/html

# Ensure log directory exists and is writable
RUN mkdir -p /var/log/nginx \
    && touch /var/log/nginx/access.log /var/log/nginx/error.log \
    && chown -R nginx:nginx /var/log/nginx

# Add custom nginx config to ensure logs are written to /var/log/nginx
COPY nginx.conf /etc/nginx/conf.d/default.conf

EXPOSE 80

CMD ["nginx", "-g", "daemon off;"]
