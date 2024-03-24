import { Box } from "@mui/material";
import getCssGradient from "../../utils/getCssGradient";

const PreviewGradient = ({ config, sx = {} }) => {  
  return (
    <Box
      sx={{
        background: getCssGradient(config),
        ...sx,
      }}
    ></Box>
  );
};

export default PreviewGradient;
