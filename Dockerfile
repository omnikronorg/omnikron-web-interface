# Stage 1: Build the Vite + React app
FROM node:22-alpine AS build

WORKDIR /app

# Use a fresh npm install without the host lockfile so native bindings
# are resolved for the Docker container's platform (linux-arm64-musl)
COPY package.json ./
RUN npm install

COPY . .
RUN npm run build

# Stage 2: Serve with Nginx
FROM nginx:alpine

# Copy custom nginx config
COPY nginx.conf /etc/nginx/conf.d/default.conf

# Copy built assets from the build stage
COPY --from=build /app/dist /usr/share/nginx/html

EXPOSE 8080

CMD ["nginx", "-g", "daemon off;"]