import OpenAI from "openai";

export interface PuterClientConfig {
  apiKey: string;
  baseUrl?: string;
}

const PUTER_BASE_URL = "https://api.puter.com/puterai/openai/v1/";

export function createPuterClient({ apiKey, baseUrl = PUTER_BASE_URL }: PuterClientConfig): OpenAI {
  return new OpenAI({
    apiKey,
    baseURL: baseUrl,
    defaultHeaders: {
      "HTTP-Referer": "https://openclaw.dev",
      "X-Title": "OpenClaw",
    },
  });
}