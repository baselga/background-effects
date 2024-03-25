import { Box, Typography } from "@mui/material"
import SliderInput from "../../../../../Inputs/SliderInput"

// eslint-disable-next-line react-refresh/only-export-components
const Contrast = ({baseSource}) => {
  return (
    <Box display="flex" gap={4} alignItems="center">
      <Typography variant="body1" fontWeight={600}>Contraste:</Typography>      
      <SliderInput source={`${baseSource}.value`} min={0} max={300} />
    </Box>
  )
}

const configContrast = {
  id: "contrast",
  label: "Contraste",  
  Component: Contrast,
  getFilter: (config) => `contrast(${config.value}%)`,
  defaultValues: {
    type: "contrast",
    value: "100"
  }
}

export default configContrast