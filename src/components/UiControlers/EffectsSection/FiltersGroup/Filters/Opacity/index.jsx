import { Box, Typography } from "@mui/material"
import SliderInput from "../../../../../Inputs/SliderInput"

// eslint-disable-next-line react-refresh/only-export-components
const Opacity = ({baseSource}) => {
  return (
    <Box display="flex" gap={4} alignItems="center">
      <Typography variant="body1" fontWeight={600}>Opacity:</Typography>
      <SliderInput source={`${baseSource}.value`} min={0} max={100} />
    </Box>
  )
}

const configOpacity = {
  id: "opacity",
  label: "Opacity",  
  Component: Opacity,
  getFilter: (config) => `opacity(${config.value}%)`,
  defaultValues: {
    type: "opacity",
    value: "50"
  }
}

export default configOpacity