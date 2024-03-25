import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import {
  Accordion,
  AccordionDetails,
  AccordionSummary,
  Stack,
  Typography,
} from "@mui/material";
import FiltersGroup from "./FiltersGroup";

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
        <Stack gap={2}>
          <FiltersGroup />
        </Stack>
      </AccordionDetails>
    </Accordion>
  );
};

export default EffectSection;
