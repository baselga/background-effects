import DeleteIcon from "@mui/icons-material/Delete";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import {
  Accordion,
  AccordionDetails,
  AccordionSummary,
  Box,
  Button,
  IconButton,
  Stack,
} from "@mui/material";
import { useCallback } from "react";
import _cloneDeep from "lodash/cloneDeep";

import useAppContextContext from "../../../context/useAppContextContext";
import GradientInput from "../../Inputs/GradientInput";
import defaultGradient from "./defaulGradient";

const GradientSection = () => {
  const {
    values: { gradients },
    updateValue,
  } = useAppContextContext();

  const onAddGradient = useCallback(() => {
    updateValue("gradients", [...gradients, _cloneDeep(defaultGradient)]);
  }, [gradients, updateValue]);

  const onDelete = useCallback(
    (index) => {
      const newGradients = [...gradients];
      newGradients.splice(index, 1);
      updateValue("gradients", newGradients);
    },
    [gradients, updateValue]
  );

  return (
    <Accordion defaultExpanded>
      <AccordionSummary
        expandIcon={<ExpandMoreIcon />}
        aria-controls="panel-gradients-content"
        id="panel-gradients-header"
      >
        Degradados
      </AccordionSummary>
      <AccordionDetails>
        <Stack gap={2}>
          <Box display="flex" justifyContent="flex-end">
            <Button onClick={onAddGradient} variant="contained" color="primary">
              Añadir
            </Button>
          </Box>
          {gradients?.map((_, index) => (
            <Box
              display="grid"
              gridTemplateColumns="1fr auto"
              gap={1}
              width="100%"
              key={index}
            >
              <GradientInput baseSource={`gradients.${index}`} key={index} />
              <IconButton onClick={() => onDelete(index)} color="secondary">
                <DeleteIcon />
              </IconButton>
            </Box>
          ))}
        </Stack>
      </AccordionDetails>
    </Accordion>
  );
};

export default GradientSection;
