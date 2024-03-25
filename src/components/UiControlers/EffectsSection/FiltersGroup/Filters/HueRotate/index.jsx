import { Box, Typography } from "@mui/material"
import SliderInput from "../../../../../Inputs/SliderInput"

// eslint-disable-next-line react-refresh/only-export-components
const HueRotate = ({baseSource}) => {
  return (
    <Box display="flex" gap={4} alignItems="center">
      <Typography variant="body1" fontWeight={600}>HueRotate:</Typography>
      <SliderInput source={`${baseSource}.value`} min={0} max={360} sx={{maxWidith: "350px"}} />
    </Box>
  )
}

const configHueRotate = {
  id: "hueRotate",
  label: "Hue Rotate",  
  Component: HueRotate,
  getFilter: (config) => `hue-rotate(${config.value}deg)`,
  defaultValues: {
    type: "hueRotate",
    value: "1"
  }
}

export default configHueRotate