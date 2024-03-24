import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import {
  Accordion,
  AccordionDetails,
  AccordionSummary,
  Box,
  Divider,
  Stack,
  Typography,
} from "@mui/material";

import alignItemsChoices from "./constants/alignItemsChoices";
import justifyContentChoices from "./constants/justifyContentChoices";
import ColorInput from "../../Inputs/ColorInput";
import NumberInput from "../../Inputs/NumberInput";
import TextInput from "../../Inputs/TextInput";
import ToggleGroupInput from "../../Inputs/ToggleGroupInput";
import formatTextChoices from "./constants/formatTextChoices";
import useAppContextContext from "../../../context/useAppContextContext";
import GradientInput from "../../Inputs/GradientInput";
import SelectInput from "../../Inputs/SelectInput";
import { fontsChoices } from "../../../constants/fonts";

const TextSection = () => {
  const { values } = useAppContextContext();
  const {
    text: { backgroundClip },
  } = values;

  return (
    <Accordion defaultExpanded>
      <AccordionSummary
        expandIcon={<ExpandMoreIcon />}
        aria-controls="panel-text-content"
        id="panel-text-header"
      >
        <Typography>Texto</Typography>
      </AccordionSummary>
      <AccordionDetails>
        <Stack gap={2}>
          <Box display="flex" alignItems="flex-end" flexWrap="wrap" gap={2}>
            <TextInput label="Título" source="text.title" />
            <NumberInput
              label="Tamaño"
              source="text.size"
              sx={{ maxWidth: "50px" }}
            />
            <ColorInput source="text.color" />
            <ToggleGroupInput
              source="text.format"
              choices={formatTextChoices}
            />
            <ToggleGroupInput
              source="text.justifyContent"
              choices={justifyContentChoices}
              exclusive
            />
            <ToggleGroupInput
              source="text.alignItems"
              choices={alignItemsChoices}
              exclusive
            />
            <SelectInput
              label="Fuente"
              source="text.fontFamily"
              choices={fontsChoices}
              sx={{
                width: "150px"
              }}
            />
          </Box>
          <Divider />
          <Stack gap={2}>
            <Typography variant="subtitle1">Efecto background-clip</Typography>
            <ToggleGroupInput
              source="text.backgroundClip.type"
              choices={[
                { value: "none", icon: <span>Ninguno</span> },
                { value: "image", icon: <span>Imagen</span> },
                { value: "gradient", icon: <span>Degradado</span> },
              ]}
              exclusive
            />
            {backgroundClip.type === "image" && (
              <TextInput
                label="Imagen"
                source="text.backgroundClip.image"
                fullWidth
              />
            )}
            {backgroundClip.type === "gradient" && (
              <GradientInput baseSource="text.backgroundClip.gradient" />
            )}
          </Stack>
        </Stack>
      </AccordionDetails>
    </Accordion>
  );
};

export default TextSection;
