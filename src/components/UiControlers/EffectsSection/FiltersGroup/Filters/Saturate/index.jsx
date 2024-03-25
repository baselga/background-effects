import { Box, Typography } from "@mui/material"
import SliderInput from "../../../../../Inputs/SliderInput"

// eslint-disable-next-line react-refresh/only-export-components
const Saturate = ({baseSource}) => {
  return (
    <Box display="flex" gap={4} alignItems="center">
      <Typography variant="body1" fontWeight={600}>Saturate:</Typography>      
      <SliderInput source={`${baseSource}.value`} min={0} max={300} />
    </Box>
  )
}

const configSaturate = {
  id: "saturate",
  label: "Saturate",  
  Component: Saturate,
  getFilter: (config) => `saturate(${config.value}%)`,
  defaultValues: {
    type: "saturate",
    value: "100"
  }
}

export default configSaturate