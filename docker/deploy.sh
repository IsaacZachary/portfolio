#!/bin/bash

# Portfolio Deployment Script
# Usage: ./deploy.sh [dev|prod]

set -e

MODE=${1:-prod}

echo "🚀 Starting deployment in $MODE mode..."

if [ "$MODE" = "dev" ]; then
    echo "📦 Building development container..."
    docker-compose -f docker-compose.dev.yml up -d --build
    echo "✅ Development server running at http://localhost:8080"
elif [ "$MODE" = "prod" ]; then
    echo "📦 Building production container..."
    docker-compose up -d --build
    echo "✅ Production server running at http://localhost:80"
    echo "📊 Checking health..."
    sleep 2
    curl -f http://localhost/health || echo "⚠️  Health check failed"
else
    echo "❌ Invalid mode. Use 'dev' or 'prod'"
    exit 1
fi

echo "🎉 Deployment complete!"
