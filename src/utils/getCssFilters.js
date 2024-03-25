import configFilters from "../components/UiControlers/EffectsSection/FiltersGroup/Filters";

function getCssFilters(filters) {
  return filters
    .map((config) => {
      const { getFilter } = configFilters.find(({ id }) => id === config.type);
      return getFilter(config);
    })
    .join(" ");
}

export default getCssFilters;
