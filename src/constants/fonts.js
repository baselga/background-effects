
export const  fonts = {
  "roboto": {
    name: "Roboto",
    fontFamily: `"Roboto", sans-serif`,    
  },
  "rubikBrokenFax": {
    name: "Rubik Broken Fax",
    fontFamily: `"Rubik Broken Fax", system-ui`,    
  },
  "workbench": {
    name: "Workbench",
    fontFamily: `"Workbench", sans-serif`,    
  },
  "alfaSlabOne": {
    name: "Alfa Slab One",
    fontFamily: `"Alfa Slab One", serif`,    
  },
}

export const fontsChoices = Object.keys(fonts).map((key) => ({
  name: fonts[key].name,
  value: key
}))

console.log("dani fontsChoices", fontsChoices)