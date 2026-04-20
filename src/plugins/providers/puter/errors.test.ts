import { describe, expect, it } from "vitest";
import { mapPuterError, formatPuterError } from "./errors.js";

describe("puter errors", () => {
  describe("mapPuterError", () => {
    it("should map 401 auth errors", () => {
      const result = mapPuterError({
        provider: "puter",
        modelId: "puter/openai/gpt-5.4-mini",
        errorMessage: "Invalid API key",
        statusCode: 401,
      });
      expect(result).toBeDefined();
      expect(result?.retry).toBe(false);
      expect(result?.message).toContain("Invalid Puter API key");
    });

    it("should map rate limit errors", () => {
      const result = mapPuterError({
        provider: "puter",
        modelId: "puter/openai/gpt-5.4-mini",
        errorMessage: "Rate limit exceeded",
        statusCode: 429,
      });
      expect(result).toBeDefined();
      expect(result?.retry).toBe(true);
      expect(result?.message).toContain("rate limit");
    });

    it("should map free tier exhausted", () => {
      const result = mapPuterError({
        provider: "puter",
        modelId: "puter/openai/gpt-5.4-mini",
        errorMessage: "Free tier exhausted for this model",
      });
      expect(result).toBeDefined();
      expect(result?.retry).toBe(true);
    });

    it("should map server errors", () => {
      const result = mapPuterError({
        provider: "puter",
        modelId: "puter/openai/gpt-5.4-mini",
        errorMessage: "Internal server error",
        statusCode: 500,
      });
      expect(result).toBeDefined();
      expect(result?.retry).toBe(true);
    });

    it("should return undefined for unknown errors", () => {
      const result = mapPuterError({
        provider: "puter",
        modelId: "puter/openai/gpt-5.4-mini",
        errorMessage: "Some unknown error",
      });
      expect(result).toBeUndefined();
    });
  });

  describe("formatPuterError", () => {
    it("should format Error objects", () => {
      const error = new Error("Connection refused");
      const result = formatPuterError(error, {
        provider: "puter",
        modelId: "puter/openai/gpt-5.4-mini",
      });
      expect(result).toContain("Connection refused");
    });

    it("should format non-Error objects", () => {
      const result = formatPuterError("Something went wrong", {
        provider: "puter",
        modelId: "puter/openai/gpt-5.4-mini",
      });
      expect(result).toContain("Something went wrong");
    });

    it("should use mapped error for known errors", () => {
      const error = new Error("invalid token");
      const result = formatPuterError(error, {
        provider: "puter",
        modelId: "puter/openai/gpt-5.4-mini",
        errorMessage: "invalid token",
      });
      expect(result).toContain("Invalid Puter API key");
    });
  });
});