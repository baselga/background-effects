import RadioButtonCheckedIcon from "@mui/icons-material/RadioButtonChecked";
import WidthNormalIcon from "@mui/icons-material/WidthNormal";
import { Box } from "@mui/material";
import _get from "lodash/get";

import useAppContextContext from "../../../context/useAppContextContext";
import ColorInput from "../ColorInput";
import SliderInput from "../SliderInput";
import ToggleGroupInput from "../ToggleGroupInput";
import PreviewGradient from "../../PreviewGradient";
import RangeSlider from "./RangeSlider";

const typeChoices = [
  {
    value: "linear",
    icon: <WidthNormalIcon />,
  },
  {
    value: "radial",
    icon: <RadioButtonCheckedIcon />,
  },
];

/**
 *
 * @param {{
 * baseSource: string
 * }} param0
 * @returns
 */
const GradientInput = ({ baseSource }) => {
  const { values } = useAppContextContext();
  const gradientValues = _get(values, baseSource);

  return (
    <Box display="flex" alignItems="center" gap={2}>
      <ToggleGroupInput
        source={`${baseSource}.type`}
        choices={typeChoices}
        exclusive
      />
      <SliderInput
        source={`${baseSource}.angle`}
        disabled={gradientValues.type === "radial"}
        min={0}
        max={360}
        step={45}
        marks
        sx={{
          width: "150px",
        }}
      />
      <Box display="flex" gap={1}>
        <ColorInput source={`${baseSource}.steps[0].color`} />
        <ColorInput source={`${baseSource}.steps[1].color`} />
      </Box>
      <RangeSlider baseSource={baseSource} />
      <PreviewGradient
        config={gradientValues}
        sx={{
          height: "40px",
          flex: 1,
        }}
      />
    </Box>
  );
};

export default GradientInput;
