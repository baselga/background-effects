import { ToggleButton, ToggleButtonGroup } from "@mui/material";
import _get from "lodash/get";
import { useCallback } from "react";

import useAppContextContext from "../../../context/useAppContextContext";

/**
 *
 * @param {{
 *  source: string,
 *  choices: [{
 *    value: string,
 *    icon: React.ReactNode
 *  }],
 *  exclusive?: boolean 
 * }} param0
 * @returns
 */
const ToggleGroupInput = ({ source, choices = [], exclusive }) => {
  const { values, updateValue } = useAppContextContext();  

  const onChange = useCallback(
    (_, value) => {      
      if(value){
        updateValue(source, value);
      }
    },
    [source, updateValue]
  );

  return (
    <ToggleButtonGroup
      key={source}
      value={_get(values, source)}
      exclusive={exclusive}
      onChange={onChange}      
      size="small"
      aria-label={source}
    >
      {choices.map(({ value, icon }) => (
        <ToggleButton key={value} value={value}>
          {icon}
        </ToggleButton>
      ))}
    </ToggleButtonGroup>
  );
};

export default ToggleGroupInput;
