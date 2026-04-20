import { registerProvider } from "../providers.js";
import type { ProviderPlugin } from "../../plugins/types.js";
import { catalog } from "./catalog.js";
import { createPuterClient } from "./client.js";
import { mapPuterError } from "./errors.js";

export const puterProvider: ProviderPlugin = {
  id: "puter",
  label: "Puter AI",

  auth: [
    {
      id: "puter-api-key",
      label: "Puter API Key",
      envVar: "PUTER_API_KEY",
      description: "Get from https://puter.com/dashboard#account",
      optional: false,
    },
  ],

  augmentModelCatalog: () => catalog,

  createClient: ({ apiKey }) => createPuterClient({ apiKey }),

  buildMissingAuthMessage: () =>
    'No API key found for "puter". Create a free Puter account at https://puter.com/dashboard#account, copy your auth token, and set the PUTER_API_KEY environment variable.',

  classifyFailoverReason: ({ errorMessage }) => {
    if (/free.*tier.*exhausted|quota.*exceeded/i.test(errorMessage)) {
      return "rate_limit";
    }
    if (/invalid.*token|unauthorized|401/i.test(errorMessage)) {
      return "auth_error";
    }
    return undefined;
  },

  mapError: mapPuterError,
};

registerProvider(puterProvider);
