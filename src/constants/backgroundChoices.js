import { formatChoices } from "../utils/formatChoices";

export const backgroundRepeatChoices = formatChoices([
  "inherit",
  "initial",
  "no-repeat",
  "repeat",
  "repeat-x",
  "repeat-y",
  "space",
  "round",
])

export const backgroundPosition = formatChoices([
  "inherit",
  "initial",
  "top",
  "bottom",
  "left",
  "right",
  "center center",
  "center right",
  "center left",
  "top right",
  "top left",
  "top center",
  "bottom right",
  "bottom left",
  "bottom center",
])

export const backgroundSize = formatChoices([
  "inherit",
  "initial",
  "cover",
  "contain",
  "auto auto",
])
