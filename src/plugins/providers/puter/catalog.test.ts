import { describe, expect, it } from "vitest";
import { catalog, getFreeModels, getModelById } from "./catalog.js";

describe("puter catalog", () => {
  it("should have at least 10 models", () => {
    expect(catalog.length).toBeGreaterThanOrEqual(10);
  });

  it("should have all required fields for each model", () => {
    for (const model of catalog) {
      expect(model.provider).toBe("puter");
      expect(model.id).toMatch(/^puter\//);
      expect(model.name).toBeTruthy();
      expect(model.capabilities).toBeDefined();
      expect(typeof model.capabilities.vision).toBe("boolean");
      expect(typeof model.capabilities.toolUse).toBe("boolean");
      expect(typeof model.capabilities.streaming).toBe("boolean");
    }
  });

  it("should have free badge for free models", () => {
    for (const model of catalog.filter((m) => m.isFree)) {
      expect(model.freeBadge).toBe("🆓 FREE");
    }
  });

  it("should return free models correctly", () => {
    const freeModels = getFreeModels();
    expect(freeModels.length).toBeGreaterThan(0);
    expect(freeModels.every((m) => m.isFree)).toBe(true);
  });

  it("should find model by id", () => {
    const model = getModelById("puter/openai/gpt-5.4-mini");
    expect(model).toBeDefined();
    expect(model?.name).toBe("GPT-5.4 Mini");
  });

  it("should return undefined for unknown model id", () => {
    const model = getModelById("puter/unknown-model");
    expect(model).toBeUndefined();
  });
});