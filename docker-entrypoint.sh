#!/bin/sh
set -e

# ตรวจสอบไฟล์ static build
if [ ! -d "/srv" ] || [ -z "$(ls -A /srv)" ]; then
  echo "Error: Static site not found in /srv. Did you forget to run pnpm build?"
  exit 1
fi

# กำหนด environment variables (optional)
export CUSTOM_ENV=${CUSTOM_ENV:-default_value}

echo "Starting Caddy to serve static files..."
exec caddy run --config /etc/caddy/Caddyfile --adapter caddyfile
