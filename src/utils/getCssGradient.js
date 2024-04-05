
/**
 * @param {
 *   type: "linear" | radial,
 *   angle: number,
 *   steps: [{
 *    color: string,
 *    stop: number
 *   }]
 * } config 
 * @returns 
 */
function getCssGradient(config) {
  const { type, angle, steps } = config;
  const cssSteps = steps.map((step) => `${step.color} ${step.stop}%`).join(", ");

  if (type === "linear") {
    return `linear-gradient(${angle}deg, ${cssSteps})`;
  }

  return `radial-gradient(circle, ${cssSteps})`;
}

export default getCssGradient;
