import { Box, Typography } from "@mui/material"
import NumberInput from "../../../../../Inputs/NumberInput"

// eslint-disable-next-line react-refresh/only-export-components
const Blur = ({baseSource}) => {
  return (
    <Box display="flex" gap={4} alignItems="center">
      <Typography variant="body1" fontWeight={600}>Blur:</Typography>
      <NumberInput label="" source={`${baseSource}.value`} step={0.5} sx={{width: "80px"}}/>
    </Box>
  )
}

const configBlug = {
  id: "blur",
  label: "Blur",  
  Component: Blur,
  getFilter: (config) => `blur(${config.value}px)`,
  defaultValues: {
    type: "blur",
    value: "1"
  }
}

export default configBlug