import { describe, expect, it } from "vitest";
import getCssFilters from "./getCssFilters";

describe("getCssFilters", () => {  
  it("Should get css from mitiple filters", () => {
    const result = getCssFilters([
      { type: "brightness", value: 80 },
      { type: "blur", value: 1.5 },
      { type: "grayscale", value: 20 },
    ]);
    expect(result).toEqual("brightness(80%) blur(1.5px) grayscale(20%)");
  });


  it("Should get css from blur", () => {
    const result = getCssFilters([{ type: "blur", value: 1.5 }]);
    expect(result).toEqual("blur(1.5px)");
  });
  
  it("Should get css from brightness", () => {
    const result = getCssFilters([{ type: "brightness", value: 80 }]);
    expect(result).toEqual("brightness(80%)");
  });
  
  it("Should get css from contrast", () => {
    const result = getCssFilters([{ type: "contrast", value: 60 }]);
    expect(result).toEqual("contrast(60%)");
  });
  
  it("Should get css from dropShadow", () => {
    const result = getCssFilters([{ 
      type: "dropShadow", 
      offsetX: 5, 
      offsetY: 10, 
      radius: 15,
      color: "#FF11DD",
    }]);
    expect(result).toEqual("drop-shadow(5px 10px 15px #FF11DD)");
  });
  
  it("Should get css from grayscale", () => {
    const result = getCssFilters([{ type: "grayscale", value: 60 }]);
    expect(result).toEqual("grayscale(60%)");
  });
  
  it("Should get css from Hue Rotate", () => {
    const result = getCssFilters([{ type: "hueRotate", value: 150 }]);
    expect(result).toEqual("hue-rotate(150deg)");
  });
  
  it("Should get css from invert", () => {
    const result = getCssFilters([{ type: "invert", value: 50 }]);
    expect(result).toEqual("invert(50%)");
  });
  
  it("Should get css from opacity", () => {
    const result = getCssFilters([{ type: "opacity", value: 50 }]);
    expect(result).toEqual("opacity(50%)");
  });
  
  it("Should get css from saturate", () => {
    const result = getCssFilters([{ type: "saturate", value: 50 }]);
    expect(result).toEqual("saturate(50%)");
  });
  
  it("Should get css from sepia", () => {
    const result = getCssFilters([{ type: "sepia", value: 50 }]);
    expect(result).toEqual("sepia(50%)");
  });
});
