FROM node:18-alpine AS build
WORKDIR /app

COPY package.json package-lock.json* ./
RUN if [ -f package-lock.json ]; then npm ci --silent; else npm install --silent; fi

COPY . .
RUN npm run build

FROM nginx:stable-alpine

# Remove the default config to avoid conflicts
RUN rm /etc/nginx/conf.d/default.conf

# Copy built assets
COPY --from=build /app/dist /usr/share/nginx/html

# Ensure log directory exists
RUN mkdir -p /var/log/nginx \
    && touch /var/log/nginx/access.log /var/log/nginx/error.log \
    && chown -R nginx:nginx /var/log/nginx

# Add your custom config
COPY nginx.conf /etc/nginx/conf.d/portfolio.conf

EXPOSE 80

CMD ["nginx", "-g", "daemon off;"]
