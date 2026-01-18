# Multi-stage build for portfolio static site
FROM node:18-alpine AS builder

WORKDIR /app

# Copy package files if they exist (for any build tools)
COPY package*.json ./
RUN npm ci --only=production || true

# Copy all files
COPY . .

# Build stage complete - files are ready for nginx

# Production stage with Nginx
FROM nginx:alpine

# Copy custom nginx config
COPY nginx/nginx.conf /etc/nginx/conf.d/default.conf

# Copy static files from builder
COPY --from=builder /app /usr/share/nginx/html

# Expose port
EXPOSE 80

# Health check
HEALTHCHECK --interval=30s --timeout=3s --start-period=5s --retries=3 \
  CMD wget --quiet --tries=1 --spider http://localhost/ || exit 1

# Start nginx
CMD ["nginx", "-g", "daemon off;"]
