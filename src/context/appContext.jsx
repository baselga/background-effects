import { createContext, useCallback, useMemo, useState } from "react";
import _set from "lodash/set";
import _cloneDeep from "lodash/cloneDeep";
import defaultGradient from "../components/UiControlers/GradientSection/defaulGradient";

const defaultValues = {
  text: {
    title: "Lorem Ipsum",
    fontFamily: "alfaSlabOne",
    size: 64,
    justifyContent: "flex-start",
    alignItems: "center",
    color: "rgb(255, 255, 255)",
    format: [],
    backgroundClip: {
      type: "none",
      image: "",
      gradient: defaultGradient
    }
  },
  background: {
    color: "#DDD",
    url: "https://picsum.photos/id/254/1200/350",
    repeat: "no-repeat",
    position: "bottom center",
    size: "cover",
    clip: "inherit"
  },
  gradients: [],
};

export const AppContextContext = createContext(defaultValues);

/**
 * @param {{
 *  children: React.ReactNode
 * }} props
 */
export function AppContextProvider({ children }) {
  const [values, setValues] = useState(defaultValues);

  const updateValue = useCallback(
    (source, value) => {
      const newValues = _cloneDeep(values);
      _set(newValues, source, value);
      setValues(newValues);
    },
    [values]
  );

  const context = useMemo(
    () => ({
      values,
      updateValue,
    }),
    [updateValue, values]
  );

  return (
    <AppContextContext.Provider value={context}>
      {children}
    </AppContextContext.Provider>
  );
}
