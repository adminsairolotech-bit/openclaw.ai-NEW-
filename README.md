# OpenClaw Server on Railway - One-Click Deploy

A Docker-based OpenClaw server deployment optimized for Railway.

## One-Click Deploy

[![Deploy on Railway](https://railway.app/button.svg)](https://railway.app/new/template?template=https://github.com/openclaw/openclaw)

Or manually deploy using the Dockerfile in this directory.

## Environment Variables

Required:
- `OPENCLAW_TOKEN` - Authentication token for the gateway

Optional:
- `OPENCLAW_LLM_PROVIDER` - LLM provider (openai/anthropic/google/etc)
- `OPENCLAW_LLM_MODEL` - Model to use
- `OPENCLAW_API_KEY` - API key for your LLM provider
- `NVIDIA_API_KEY` - NVIDIA API key for cloud inference
- `GOOGLE_API_KEY` - Google/Gemini API key
- `OPENCLAW_PORT` - Default: 18789
- `OPENCLAW_HOST` - Default: 0.0.0.0
- `OPENCLAW_SANDBOX` - Enable agent sandbox (1/0)

## Features

- Pre-configured Docker image from GitHub Container Registry
- Health checks at `/healthz` and `/readyz`
- Persistent storage via Railway volumes
- Automatic restart on failure

## Ports

- **18789**: Main gateway HTTP port
- **18790**: WebSocket port