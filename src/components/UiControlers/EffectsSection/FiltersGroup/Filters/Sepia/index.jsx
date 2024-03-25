import { Box, Typography } from "@mui/material"
import SliderInput from "../../../../../Inputs/SliderInput"

// eslint-disable-next-line react-refresh/only-export-components
const Sepia = ({baseSource}) => {
  return (
    <Box display="flex" gap={4} alignItems="center">
      <Typography variant="body1" fontWeight={600}>Sepia:</Typography>
      <SliderInput source={`${baseSource}.value`} min={0} max={100} />
    </Box>
  )
}

const configSepia = {
  id: "sepia",
  label: "Sepia",  
  Component: Sepia,
  getFilter: (config) => `sepia(${config.value}%)`,
  defaultValues: {
    type: "sepia",
    value: "100"
  }
}

export default configSepia