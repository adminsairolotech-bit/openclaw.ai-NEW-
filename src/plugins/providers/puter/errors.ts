export interface PuterErrorContext {
  provider: string;
  modelId: string;
  errorMessage?: string;
  statusCode?: number;
}

export function mapPuterError(context: PuterErrorContext): { message: string; retry: boolean } | undefined {
  const { errorMessage = "", statusCode } = context;

  // Auth errors
  if (/invalid.*token|unauthorized|401|authentication/i.test(errorMessage) || statusCode === 401) {
    return {
      message: "Invalid Puter API key. Please check your PUTER_API_KEY at https://puter.com/dashboard#account",
      retry: false,
    };
  }

  // Rate limit / free tier exhausted
  if (/rate.*limit|429|quota.*exceeded|free.*tier.*exhausted/i.test(errorMessage) || statusCode === 429) {
    return {
      message: "Puter rate limit reached. The free tier has usage limits. Upgrade your Puter account or wait before retrying.",
      retry: true,
    };
  }

  // Server errors
  if (/500|502|503|504|server.*error|timeout/i.test(errorMessage) || (statusCode && statusCode >= 500)) {
    return {
      message: "Puter server error. Please try again in a few moments.",
      retry: true,
    };
  }

  // Network errors
  if (/network|ECONNREFUSED|ETIMEDOUT|enotfound/i.test(errorMessage)) {
    return {
      message: "Network error connecting to Puter. Check your internet connection.",
      retry: true,
    };
  }

  return undefined;
}

export function formatPuterError(error: unknown, context: PuterErrorContext): string {
  const mapped = mapPuterError(context);
  if (mapped) {
    return mapped.message;
  }

  // Fallback for unhandled errors
  const baseMessage = error instanceof Error ? error.message : String(error);
  return `Puter API error: ${baseMessage}`;
}