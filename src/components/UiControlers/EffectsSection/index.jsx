import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import {
  Accordion,
  AccordionDetails,
  AccordionSummary,
  Box,
  Stack,
  Typography,
} from "@mui/material";
import SelectInput from "../../Inputs/SelectInput";
import FiltersGroup from "./FiltersGroup";
import { mixBlendModeChoices } from "./constants/mixBlendModeChoices";

const EffectSection = () => {
  return (
    <Accordion defaultExpanded>
      <AccordionSummary
        expandIcon={<ExpandMoreIcon />}
        aria-controls="panel-text-content"
        id="panel-text-header"
      >
        <Typography>Efectos</Typography>
      </AccordionSummary>
      <AccordionDetails>
        <Stack gap={3}>
          <Box>
            <SelectInput
              label="Mix blend mode"
              source="effects.mixBlendMode"
              choices={mixBlendModeChoices}
              sx={{ width: "200px" }}
            />
          </Box>
          <FiltersGroup />
        </Stack>
      </AccordionDetails>
    </Accordion>
  );
};

export default EffectSection;
