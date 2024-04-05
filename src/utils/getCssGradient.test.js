import { describe, expect, it } from "vitest";
import getCssGradient from "./getCssGradient";

describe("getCssGradient", () => {
  it("Should get css from a lineal gradient", () => {
    const result = getCssGradient({
      type: "linear",
      angle: 180,
      steps: [{color: "#FFF", stop: 50}]
    });
    expect(result).toEqual("linear-gradient(180deg, #FFF 50%)")
  })
  
  it("Should get css from a lineal gradient with two steps", () => {
    const result = getCssGradient({
      type: "linear",
      angle: 120,
      steps: [{color: "#FFF", stop: 30}, {color: "#AAFFCC", stop: 70}]
    });
    expect(result).toEqual("linear-gradient(120deg, #FFF 30%, #AAFFCC 70%)")
  })

  it("Should get css from a gradient gradient", () => {
    const result = getCssGradient({
      type: "gradient",      
      steps: [{color: "#FFF", stop: 50}]
    });
    expect(result).toEqual("radial-gradient(circle, #FFF 50%)")
  })

  it("Should get css from a gradient gradient with two steps", () => {
    const result = getCssGradient({
      type: "gradient",
      angle: 180,
      steps: [{color: "#FFF", stop: 30}, {color: "#AAFFCC", stop: 70}]
    });
    expect(result).toEqual("radial-gradient(circle, #FFF 30%, #AAFFCC 70%)")
  })
})