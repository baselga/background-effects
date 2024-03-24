import { Slider } from "@mui/material";
import _get from "lodash/get"
import _cloneDeep from "lodash/cloneDeep"
import { useCallback } from "react";

import useAppContextContext from "../../../../context/useAppContextContext";

/**
 *
 * @param {{
 *   baseSource: string
 * }} param0
 * @returns
 */
const RangeSlider = ({ baseSource }) => {
  const { values, updateValue } = useAppContextContext();
  const gradientValues = _get(values, baseSource);

  const onSliderStopsChange = useCallback(
    (_, newValues) => {
      const steps = _cloneDeep(gradientValues.steps);
      steps[0].stop = newValues[0];
      steps[1].stop = newValues[1];

      updateValue(`${baseSource}.steps`, steps);
    },
    [baseSource, gradientValues.steps, updateValue]
  );

  return (
    <Slider
      value={[
        _get(values, `${baseSource}.steps[0].stop`),
        _get(values, `${baseSource}.steps[1].stop`),
      ]}
      onChange={onSliderStopsChange}
      min={0}
      max={100}
      valueLabelDisplay="auto"
      sx={{
        maxWidth: "300px",
        margin: (theme) => theme.spacing(0,1)  
      }}
    />
  );
};

export default RangeSlider;
