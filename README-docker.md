# Docker Deployment Guide

This guide explains how to run the portfolio using Docker.

## Prerequisites

- Docker Engine 20.10+
- Docker Compose 2.0+

## Quick Start

### Production Build

```bash
# Build and run
docker-compose up -d --build

# View logs
docker-compose logs -f

# Stop
docker-compose down
```

The portfolio will be available at `http://localhost:80`

### Development Mode

```bash
# Run with live file mounting
docker-compose -f docker-compose.dev.yml up -d

# View logs
docker-compose -f docker-compose.dev.yml logs -f

# Stop
docker-compose -f docker-compose.dev.yml down
```

The portfolio will be available at `http://localhost:8080`

## Using the Deployment Script

```bash
# Make script executable
chmod +x deploy.sh

# Deploy production
./deploy.sh prod

# Deploy development
./deploy.sh dev
```

## Manual Commands

### Build Image

```bash
docker build -t isaac-portfolio .
```

### Run Container

```bash
docker run -d -p 80:80 --name portfolio isaac-portfolio
```

### View Logs

```bash
docker logs -f portfolio
```

### Stop Container

```bash
docker stop portfolio
docker rm portfolio
```

## Health Check

The container includes a health check endpoint:

```bash
curl http://localhost/health
```

## Customization

### Change Port

Edit `docker-compose.yml`:

```yaml
ports:
  - "3000:80"  # Change 3000 to your desired port
```

### Custom Nginx Config

Modify `nginx/nginx.conf` and rebuild:

```bash
docker-compose up -d --build
```

## Troubleshooting

### Container won't start

```bash
# Check logs
docker-compose logs

# Check if port is in use
lsof -i :80
```

### Files not updating (dev mode)

```bash
# Rebuild
docker-compose -f docker-compose.dev.yml up -d --build
```

### Permission issues

```bash
# Fix script permissions
chmod +x deploy.sh
```

## Production Considerations

1. **Use a reverse proxy** (Nginx, Traefik) for SSL/TLS
2. **Set up monitoring** (health checks, logs)
3. **Configure backups** for any dynamic content
4. **Use environment variables** for configuration
5. **Enable Docker auto-restart**: `restart: unless-stopped`

## Architecture

- **Base Image**: `nginx:alpine` (lightweight)
- **Multi-stage Build**: Optimized for static files
- **Health Checks**: Built-in container health monitoring
- **Security**: Security headers in Nginx config

## Environment Variables

Currently, the portfolio is static and doesn't require environment variables. If you add dynamic features, you can pass them via:

```yaml
environment:
  - VAR_NAME=value
```
