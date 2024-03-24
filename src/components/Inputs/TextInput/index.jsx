import { TextField } from "@mui/material";
import _get from "lodash/get";
import { useCallback } from "react";

import useAppContextContext from "../../../context/useAppContextContext";

/**
 *
 * @param {{
 *  label: string,
 *  source: string
 *  fullWidth?: boolean,
 *  sx?: object
 * }} param0
 * @returns
 */
const TextInput = ({ label, source, fullWidth, sx }) => {
  const { values, updateValue } = useAppContextContext();

  const onChange = useCallback(
    (e) => {
      updateValue(source, e.target.value);
    },
    [source, updateValue]
  );

  return (
    <TextField
      label={label}
      value={_get(values, source)}
      variant="standard"
      onChange={onChange}
      fullWidth={fullWidth}
      sx={sx}      
    />
  );
};

export default TextInput;
