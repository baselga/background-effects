/**
 *
 * @param {[string]} values
 */
export function formatChoices(values) {
  return values.map((each) => ({ name: each, value: each }));
}
