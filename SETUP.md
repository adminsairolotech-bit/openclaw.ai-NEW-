# OpenClaw Railway One-Click Setup

## Quick Deploy Options

### Option 1: GitHub Template (Recommended)

1. Fork this repository or copy the files to a new GitHub repo
2. Go to [Railway](https://railway.app)
3. Click **"New Project"** → **"Deploy from GitHub"**
4. Select your forked repository
5. Railway auto-detects the Dockerfile
6. Add environment variables in Railway dashboard:
   - `OPENCLAW_TOKEN` (required)
   - `OPENCLAW_API_KEY` or `GOOGLE_API_KEY` or `NVIDIA_API_KEY`

### Option 2: Direct Railway Template

[![Deploy on Railway](https://railway.app/button.svg)](https://railway.app/new/template?template=https://github.com/openclaw/openclaw)

Note: This uses the official OpenClaw repo template (if configured).

### Option 3: Docker Deploy

```bash
# Clone the repo
git clone https://github.com/your-username/openclaw-railway.git
cd openclaw-railway

# Deploy with Railway CLI
railway login
railway init
railway up

# Set variables
railway variables set OPENCLAW_TOKEN=your-token
railway variables set GOOGLE_API_KEY=your-key
```

## Post-Deploy Setup

After deployment, access your OpenClaw gateway at:
```
http://your-railway-url.railway.app:18789
```

Generate a client token:
```bash
openclaw token create --server-url http://your-railway-url.railway.app:18789
```

## Environment Variables Reference

| Variable | Required | Default | Description |
|----------|----------|---------|-------------|
| `OPENCLAW_TOKEN` | Yes | - | Gateway auth token |
| `PORT` | No | 18789 | HTTP port |
| `HOST` | No | 0.0.0.0 | Bind host |
| `OPENCLAW_LLM_PROVIDER` | No | openai | LLM provider |
| `OPENCLAW_LLM_MODEL` | No | gpt-4o | Model name |
| `OPENCLAW_API_KEY` | No | - | LLM API key |
| `GOOGLE_API_KEY` | No | - | Google/Gemini key |
| `NVIDIA_API_KEY` | No | - | NVIDIA NGC key |
| `OPENCLAW_SANDBOX` | No | 0 | Enable sandbox |

## Health Checks

- Liveness: `GET /healthz`
- Readiness: `GET /readyz`

## Troubleshooting

**Container won't start?**
- Check logs: `railway logs`
- Verify `OPENCLAW_TOKEN` is set

**LLM not working?**
- Ensure API key is set correctly
- Check provider is supported: openai, anthropic, google, azure, ollama

**Port issues?**
- Railway uses `$PORT` env var automatically
- Don't hardcode ports in railway.json