import { MenuItem, TextField } from "@mui/material";
import _get from "lodash/get";
import useAppContextContext from "../../../context/useAppContextContext";
import { useCallback } from "react";

/**
 *
 * @param {{
 *  label: string,
 *  source: string,
 *  choices: [{
 *    name: string,
 *    value: string | number
 *  }]
 *  fullWidth?: boolean,
 *  sx?: object
 * }} param0
 * @returns
 */
const SelectInput = ({ label, source, choices, fullWidth, sx }) => {
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
      select
    >
      {choices.map((option) => (
        <MenuItem key={option.value} value={option.value}>
          {option.name}
        </MenuItem>
      ))}
    </TextField>
  );
};

export default SelectInput;
