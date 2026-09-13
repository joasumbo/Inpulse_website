#!/usr/bin/env bash
# Deploy do Website: git pull + rebuild + restart. Nao toca em mais nada.
set -euo pipefail
cd /opt/inpulse-website
echo "==> git pull"
git fetch --all --quiet
git reset --hard origin/main
echo "==> build + up"
docker compose up -d --build
docker compose ps
