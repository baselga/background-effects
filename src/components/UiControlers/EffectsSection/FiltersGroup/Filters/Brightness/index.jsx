import { Box, Typography } from "@mui/material"
import SliderInput from "../../../../../Inputs/SliderInput"

// eslint-disable-next-line react-refresh/only-export-components
const Brightness = ({baseSource}) => {
  return (
    <Box display="flex" gap={4} alignItems="center">
      <Typography variant="body1" fontWeight={600}>Brillo:</Typography>      
      <SliderInput source={`${baseSource}.value`} min={0} max={300} />
    </Box>
  )
}

const configBrightness = {
  id: "brightness",
  label: "Brillo",  
  Component: Brightness,
  getFilter: (config) => `brightness(${config.value}%)`,
  defaultValues: {
    type: "brightness",
    value: "100"
  }
}

export default configBrightness