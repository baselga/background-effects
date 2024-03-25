import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import {
  Accordion,
  AccordionDetails,
  AccordionSummary,
  Box,
  Stack,
  Typography,
} from "@mui/material";

import {
  backgroundPosition,
  backgroundRepeatChoices,
  backgroundSize
} from "../../../constants/backgroundChoices";
import ColorInput from "../../Inputs/ColorInput";
import SelectInput from "../../Inputs/SelectInput";
import TextInput from "../../Inputs/TextInput";

const BackgroundSection = () => (
  <Accordion>
    <AccordionSummary
      expandIcon={<ExpandMoreIcon />}
      aria-controls="panel-background-content"
      id="panel-background-header"
    >
      <Typography>Fondo</Typography>
    </AccordionSummary>
    <AccordionDetails>
      <Stack gap={2}>
        <TextInput label="Url" source="background.url" fullWidth />
        <Box display="flex" alignItems="flex-end" gap={2}>
          <ColorInput source="background.color" />          
          <SelectInput
            label="Background Repeat"
            source="background.repeat"
            choices={backgroundRepeatChoices}
            sx={{ width: "150px" }}
          />
          <SelectInput
            label="Background Position"
            source="background.position"
            choices={backgroundPosition}
            sx={{ width: "150px" }}
          />
          <SelectInput
            label="Background Size"
            source="background.size"
            choices={backgroundSize}
            sx={{ width: "150px" }}
          />          
        </Box>
      </Stack>
    </AccordionDetails>
  </Accordion>
);

export default BackgroundSection;
