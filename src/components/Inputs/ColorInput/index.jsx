import { Backdrop, Box, Fade, Paper, Popper } from "@mui/material";
import _get from "lodash/get";
import { useCallback, useState } from "react";
import { ChromePicker } from "react-color";
import useAppContextContext from "../../../context/useAppContextContext";

/**
 *
 * @param {{
 * source: string
 * }} param0
 * @returns
 */

const ColorInput = ({ source }) => {
  const [anchor, setAcnchor] = useState(false);
  const { values, updateValue } = useAppContextContext();
  const [pickerColor, setPickerColor] = useState(_get(values, source));

  const onChange = useCallback(
    (value) => {
      const c = value.rgb;
      updateValue(source, `rgba(${c.r}, ${c.g}, ${c.b}, ${c.a})`);
    },
    [source, updateValue]
  );

  const handleColorChange = useCallback((color) => {
    let colorStr = color.hex;
    if (color.rgb.a !== 1) {
      colorStr = `rgba(${color.rgb.r}, ${color.rgb.g}, ${color.rgb.b}, ${color.rgb.a})`;
    }

    setPickerColor(colorStr);
  }, []);

  const open = useCallback((e) => {
    setAcnchor(e.currentTarget);
  }, []);

  const close = useCallback(() => {
    setAcnchor(false);
  }, []);

  return (
    <>
      <Box
        sx={{
          cursor: "pointer",
          width: "38px",
          height: "38px",
          backgroundColor: _get(values, source),
          borderRadius: (theme) => `${theme.shape.borderRadius}px`,
          border: (theme) =>
            `1px solid ${theme.palette.action.disabledBackground}`,
        }}
        onClick={open}
      ></Box>
      <Backdrop open={!!anchor} onClick={close} invisible>
        <Popper anchorEl={anchor} open={!!anchor} placement="right-start" transition>
          {({ TransitionProps }) => (
            <Fade {...TransitionProps} timeout={350}>
              <Paper
                onClick={(e) => {
                  e.stopPropagation();
                }}
              >
                <ChromePicker
                  color={pickerColor}
                  onChange={handleColorChange}
                  onChangeComplete={onChange}
                />
              </Paper>
            </Fade>
          )}
        </Popper>
      </Backdrop>
    </>
  );
};

export default ColorInput;
