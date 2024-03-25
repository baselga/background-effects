import { Box, Typography } from "@mui/material"
import SliderInput from "../../../../../Inputs/SliderInput"

// eslint-disable-next-line react-refresh/only-export-components
const Grayscale = ({baseSource}) => {
  return (
    <Box display="flex" gap={4} alignItems="center">
      <Typography variant="body1" fontWeight={600}>Grayscale:</Typography>
      <SliderInput source={`${baseSource}.value`} min={0} max={100} />
    </Box>
  )
}

const configGrayscale = {
  id: "grayscale",
  label: "Grayscale",  
  Component: Grayscale,
  getFilter: (config) => `grayscale(${config.value}%)`,
  defaultValues: {
    type: "grayscale",
    value: "100"
  }
}

export default configGrayscale