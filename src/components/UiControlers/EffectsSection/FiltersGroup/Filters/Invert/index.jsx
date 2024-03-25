import { Box, Typography } from "@mui/material"
import SliderInput from "../../../../../Inputs/SliderInput"

// eslint-disable-next-line react-refresh/only-export-components
const Invert = ({baseSource}) => {
  return (
    <Box display="flex" gap={4} alignItems="center">
      <Typography variant="body1" fontWeight={600}>Invert:</Typography>
      <SliderInput source={`${baseSource}.value`} min={0} max={100} />
    </Box>
  )
}

const configInvert = {
  id: "invert",
  label: "Invert",  
  Component: Invert,
  getFilter: (config) => `invert(${config.value}%)`,
  defaultValues: {
    type: "invert",
    value: "100"
  }
}

export default configInvert