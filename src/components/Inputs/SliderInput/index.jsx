import { Slider } from "@mui/material";
import _get from "lodash/get";

import useAppContextContext from "../../../context/useAppContextContext";
import { useCallback } from "react";

/**
 *
 * @param {{
 *   source: string,
 *   disabled?: boolean,
 *   min?: number,
 *   max?: number,
 *   marks?: boolean,
 *   step?: number,
 *   sx?: object,
 * }} param0
 * @returns
 */
const SliderInput = ({ source, disabled, min, max, marks, step, sx }) => {
  const { values, updateValue } = useAppContextContext();

  const onChange = useCallback(
    (_, value) => {
      updateValue(source, value);
    },
    [source, updateValue]
  );

  return (
    <Slider
      value={_get(values, source)}
      disabled={disabled}
      min={min}
      max={max}
      onChange={onChange}
      valueLabelDisplay="auto"
      color="primary"
      step={step}      
      marks={marks}
      sx={sx}
    />
  );
};

export default SliderInput;
