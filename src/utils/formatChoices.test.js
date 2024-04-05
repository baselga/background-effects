import { describe, expect, it } from "vitest";
import { formatChoices } from "./formatChoices";


describe("formatChoices", () => {
  it("Should get css from mitiple filters", () => {
    const result = formatChoices(["inerit", "normal", "draken"]);
    expect(result).toEqual([
      { name: "inerit", value: "inerit" },
      { name: "normal", value: "normal" },
      { name: "draken", value: "draken" },
    ]);
  });
});
