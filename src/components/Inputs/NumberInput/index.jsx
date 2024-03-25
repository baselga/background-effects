import { TextField } from "@mui/material";
import _get from "lodash/get";
import { useCallback } from "react";

import useAppContextContext from "../../../context/useAppContextContext";

/**
 *
 * @param {{
 *  label: string,
 *  source: string
 *  disabled?: boolean
 *  step?: number
 *  sx?: object
 * }} param0
 * @returns
 */
const NumberInput = ({ label, source, disabled, step = 1, sx, }) => {
  const { values, updateValue } = useAppContextContext();

  const onChange = useCallback(
    (e) => {
      updateValue(source, e.target.value);
    },
    [source, updateValue]
  );

  return (
    <TextField
      type="number"
      label={label}
      value={_get(values, source)}
      variant="standard"
      onChange={onChange}
      disabled={disabled}
      inputProps={{
        step
      }}
      sx={sx}      
    />
  );
};

export default NumberInput;
