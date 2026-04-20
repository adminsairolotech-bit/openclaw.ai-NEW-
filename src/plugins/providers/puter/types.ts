// Puter-specific types extending OpenAI compatibility

export interface PuterModelCapabilities {
  vision: boolean;
  toolUse: boolean;
  streaming: boolean;
}

export interface PuterCatalogEntry {
  provider: string;
  id: string;
  name: string;
  capabilities: PuterModelCapabilities;
  isFree?: boolean;
  freeBadge?: string;
}

// Puter API response types (OpenAI-compatible)
export interface PuterMessage {
  role: "system" | "user" | "assistant" | "tool";
  content: string | PuterContentPart[];
}

export interface PuterContentPart {
  type: "text" | "image_url";
  text?: string;
  image_url?: {
    url: string;
  };
}

export interface PuterToolCall {
  id: string;
  type: "function";
  function: {
    name: string;
    arguments: string;
  };
}

export interface PuterUsage {
  prompt_tokens: number;
  completion_tokens: number;
  total_tokens: number;
}

// OpenAI-compatible streaming delta
export interface PuterStreamDelta {
  content?: string;
  tool_calls?: PuterToolCall[];
}