import { Box, Typography } from "@mui/material"

import NumberInput from "../../../../../Inputs/NumberInput"
import ColorInput from "../../../../../Inputs/ColorInput"

// eslint-disable-next-line react-refresh/only-export-components
const DropShadow = ({baseSource}) => {
  return (
    <Box display="flex" gap={4} alignItems="flex-end">
      <Typography variant="body1" fontWeight={600} gutterBottom>Drop Shadow:</Typography>
      <NumberInput label="Offset X" source={`${baseSource}.offsetX`} sx={{width: "80px"}}/>
      <NumberInput label="Offset Y" source={`${baseSource}.offsetY`} sx={{width: "80px"}}/>
      <NumberInput label="Blur Radius" source={`${baseSource}.radius`} sx={{width: "80px"}}/>
      <ColorInput source={`${baseSource}.color`} sx={{width: "80px"}}/>
    </Box>
  )
}

const configDropShadow = {
  id: "dropShadow",
  label: "DropShadow",  
  Component: DropShadow,
  getFilter: (config) => `drop-shadow(${config.offsetX}px ${config.offsetY}px ${config.radius}px ${config.color})`,
  defaultValues: {
    type: "dropShadow",
    offsetX: "0",
    offsetY: "0",
    radius: "5",
    color: "##FFF"
  }
}

export default configDropShadow