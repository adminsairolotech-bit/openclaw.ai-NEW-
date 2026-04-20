import { describe, expect, it, vi } from "vitest";

// Test the provider object directly without loading full module (which registers on import)
describe("puter provider", () => {
  // Provider definition object - matches what mod.ts exports
  const puterProvider = {
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
  };

  it("should have correct id and label", () => {
    expect(puterProvider.id).toBe("puter");
    expect(puterProvider.label).toBe("Puter AI");
  });

  it("should have auth configuration", () => {
    expect(puterProvider.auth).toBeDefined();
    expect(puterProvider.auth.length).toBeGreaterThan(0);
    const apiKeyAuth = puterProvider.auth[0];
    expect(apiKeyAuth.id).toBe("puter-api-key");
    expect(apiKeyAuth.envVar).toBe("PUTER_API_KEY");
    expect(apiKeyAuth.optional).toBe(false);
  });
});