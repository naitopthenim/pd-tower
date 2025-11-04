# Stage 1: Build Astro static site
ARG NODE_VERSION=22.14.0
FROM node:${NODE_VERSION}-alpine AS builder

WORKDIR /app

# ติดตั้ง pnpm
RUN npm install -g pnpm

# Copy dependencies
COPY package.json pnpm-lock.yaml ./
RUN pnpm install --frozen-lockfile

# Copy source code
COPY . .

# Build static site
RUN pnpm build

# Stage 2: Serve with Caddy
FROM caddy:latest

# Copy built static site ไปที่ /srv (Caddy root)
COPY --from=builder /app/dist /srv

# คัดลอก Caddyfile
COPY Caddyfile /etc/caddy/Caddyfile

# คัดลอก entrypoint script
COPY docker-entrypoint.sh /usr/local/bin/docker-entrypoint
RUN chmod +x /usr/local/bin/docker-entrypoint

# Expose default port
EXPOSE 80

# ใช้ entrypoint script
ENTRYPOINT ["docker-entrypoint"]
