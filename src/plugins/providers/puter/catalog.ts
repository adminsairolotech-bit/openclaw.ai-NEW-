export interface CatalogModel {
  provider: string;
  id: string;
  name: string;
  capabilities?: {
    vision?: boolean;
    toolUse?: boolean;
    streaming?: boolean;
  };
  isFree?: boolean;
  freeBadge?: string;
}

export const catalog: CatalogModel[] = [
  // OpenAI Models
  {
    provider: "puter",
    id: "puter/openai/gpt-5.4-mini",
    name: "GPT-5.4 Mini",
    capabilities: { vision: false, toolUse: true, streaming: true },
    isFree: true,
    freeBadge: "🆓 FREE",
  },
  {
    provider: "puter",
    id: "puter/openai/gpt-5.4",
    name: "GPT-5.4",
    capabilities: { vision: false, toolUse: true, streaming: true },
  },
  {
    provider: "puter",
    id: "puter/openai/gpt-4o",
    name: "GPT-4o",
    capabilities: { vision: true, toolUse: true, streaming: true },
  },

  // Anthropic Models
  {
    provider: "puter",
    id: "puter/anthropic/claude-opus-4.7",
    name: "Claude Opus 4.7",
    capabilities: { vision: true, toolUse: true, streaming: true },
  },
  {
    provider: "puter",
    id: "puter/anthropic/claude-sonnet-4.6",
    name: "Claude Sonnet 4.6",
    capabilities: { vision: true, toolUse: true, streaming: true },
  },

  // Google Models
  {
    provider: "puter",
    id: "puter/google/gemini-2.5-pro",
    name: "Gemini 2.5 Pro",
    capabilities: { vision: true, toolUse: true, streaming: true },
    isFree: true,
    freeBadge: "🆓 FREE",
  },
  {
    provider: "puter",
    id: "puter/google/gemini-2.5-flash",
    name: "Gemini 2.5 Flash",
    capabilities: { vision: true, toolUse: true, streaming: true },
    isFree: true,
    freeBadge: "🆓 FREE",
  },
  {
    provider: "puter",
    id: "puter/google/gemini-3.0-flash-lite",
    name: "Gemini 3 Flash Lite",
    capabilities: { vision: true, toolUse: true, streaming: true },
    isFree: true,
    freeBadge: "🆓 FREE",
  },

  // xAI Models
  {
    provider: "puter",
    id: "puter/x-ai/grok-4.20",
    name: "Grok 4.20",
    capabilities: { vision: true, toolUse: true, streaming: true },
  },
  {
    provider: "puter",
    id: "puter/x-ai/grok-2-vision",
    name: "Grok 2 Vision",
    capabilities: { vision: true, toolUse: true, streaming: true },
  },

  // DeepSeek Models
  {
    provider: "puter",
    id: "puter/deepseek/deepseek-v3.2",
    name: "DeepSeek V3.2",
    capabilities: { vision: false, toolUse: true, streaming: true },
    isFree: true,
    freeBadge: "🆓 FREE",
  },

  // Meta Models
  {
    provider: "puter",
    id: "puter/meta/llama-4-scout",
    name: "Llama 4 Scout",
    capabilities: { vision: false, toolUse: true, streaming: true },
    isFree: true,
    freeBadge: "🆓 FREE",
  },

  // Mistral Models
  {
    provider: "puter",
    id: "puter/mistral/mistral-large",
    name: "Mistral Large",
    capabilities: { vision: false, toolUse: true, streaming: true },
  },

  // Qwen Models
  {
    provider: "puter",
    id: "puter/qwen/qwen-2.5-plus",
    name: "Qwen 2.5 Plus",
    capabilities: { vision: true, toolUse: true, streaming: true },
    isFree: true,
    freeBadge: "🆓 FREE",
  },
];

export function getFreeModels(): CatalogModel[] {
  return catalog.filter((m) => m.isFree);
}

export function getModelById(id: string): CatalogModel | undefined {
  return catalog.find((m) => m.id === id);
}
