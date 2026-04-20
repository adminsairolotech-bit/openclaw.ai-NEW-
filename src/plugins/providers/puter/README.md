# Puter AI Provider Plugin

A provider plugin for OpenClaw that enables access to Puter AI's unified API, providing OpenAI-compatible access to multiple AI models including Gemini, GPT, Claude, Grok, DeepSeek, and more.

## Features

- **13+ Popular Models**: Access GPT-5.4, Claude Opus 4.7, Gemini 2.5 Pro/Flash, Grok 4.20, DeepSeek V3.2, and more
- **Free Tier Models**: Several models are available on Puter's free tier (marked with 🆓)
- **OpenAI Compatible**: Full streaming, tool calling, and vision support
- **Unified API**: Single endpoint for multiple providers - no need to manage separate API keys

## Setup

### 1. Create Puter Account

1. Go to [puter.com](https://puter.com)
2. Sign up for a free account (email or Google)
3. Navigate to [Dashboard](https://puter.com/dashboard#account)

### 2. Get API Token

1. In your Puter dashboard, find the "Account" section
2. Click the **Copy** button next to your auth token
3. The token starts with `pt_` followed by alphanumeric characters

### 3. Configure OpenClaw

Set the `PUTER_API_KEY` environment variable:

```bash
# Linux/macOS
export PUTER_API_KEY="pt_your_token_here"

# Windows (PowerShell)
$env:PUTER_API_KEY="pt_your_token_here"
```

Or add to your OpenClaw config:

```yaml
# openclaw.yaml
models:
  providers:
    puter:
      enabled: true
```

## Available Models

| Model | Provider | Capabilities | Free Tier |
|-------|----------|--------------|-----------|
| GPT-5.4 Mini | OpenAI | Tool Use, Streaming | 🆓 FREE |
| GPT-5.4 | OpenAI | Tool Use, Streaming | - |
| GPT-4o | OpenAI | Vision, Tool Use, Streaming | - |
| Claude Opus 4.7 | Anthropic | Vision, Tool Use, Streaming | - |
| Claude Sonnet 4.6 | Anthropic | Vision, Tool Use, Streaming | - |
| Gemini 2.5 Pro | Google | Vision, Tool Use, Streaming | 🆓 FREE |
| Gemini 2.5 Flash | Google | Vision, Tool Use, Streaming | 🆓 FREE |
| Gemini 3 Flash Lite | Google | Vision, Tool Use, Streaming | 🆓 FREE |
| Grok 4.20 | xAI | Vision, Tool Use, Streaming | - |
| Grok 2 Vision | xAI | Vision, Tool Use, Streaming | - |
| DeepSeek V3.2 | DeepSeek | Tool Use, Streaming | 🆓 FREE |
| Llama 4 Scout | Meta | Tool Use, Streaming | 🆓 FREE |
| Mistral Large | Mistral | Tool Use, Streaming | - |
| Qwen 2.5 Plus | Qwen | Vision, Tool Use, Streaming | 🆓 FREE |

## Usage in OpenClaw

Select a Puter model in your settings or use the model ID directly:

```
puter/openai/gpt-5.4-mini    # Fast & free
puter/google/gemini-2.5-pro  # Best for reasoning
puter/anthropic/claude-opus-4.7  # Best for coding
```

## Pricing Model

Puter uses a **User-Pays** model:
- You pay for API usage from your own Puter account
- Each Puter account gets free starter credits
- Developer (OpenClaw) does not charge for Puter integration
- Pricing varies by model - check Puter dashboard for rates

## Troubleshooting

### "Invalid API Key" Error
- Verify your `PUTER_API_KEY` is correct
- Get a fresh token from [puter.com/dashboard#account](https://puter.com/dashboard#account)
- Tokens start with `pt_`

### "Rate Limit Exceeded"
- Free tier has usage limits per model
- Wait before retrying or upgrade your Puter account
- Some models (marked 🆓) have lower limits

### "Network Error"
- Check your internet connection
- Puter services may be temporarily unavailable
- Try again in a few moments

## Architecture

```
src/plugins/providers/puter/
├── mod.ts          # Provider registration
├── client.ts       # OpenAI client wrapper
├── catalog.ts      # Model catalog
├── types.ts        # TypeScript types
├── errors.ts       # Error mappings
└── README.md       # This file
```

## License

MIT - Part of OpenClaw project