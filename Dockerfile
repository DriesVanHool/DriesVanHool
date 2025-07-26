# Build stage
FROM node:18-alpine AS builder
WORKDIR /app
COPY . .
COPY .env .env
RUN npm install
RUN npm run build

# Serve stage with NGINX
FROM nginx:alpine
COPY --from=builder /app/dist /usr/share/nginx/html
EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]
