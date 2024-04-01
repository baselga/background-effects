import { Box, IconButton } from "@mui/material";
import DragIndicatorIcon from "@mui/icons-material/DragIndicator";
import { useSortable } from "@dnd-kit/sortable";
import { CSS } from "@dnd-kit/utilities";

const VerticalSortableItem = ({ id, data, index, children }) => {
  const { attributes, listeners, setNodeRef, transform, transition } =
    useSortable({ id });

  const style = {
    transform: CSS.Transform.toString(transform),
    transition,
  };

  return (
    <div ref={setNodeRef} style={style}>
      <Box
        display="grid"
        gridTemplateColumns="auto 1fr"
        alignItems="center"
        gap={1}
        width="100%"
      >
        <IconButton {...attributes} {...listeners} color="default">
          <DragIndicatorIcon />
        </IconButton>
        {children({ id, data, index })}
      </Box>
    </div>
  );
};

export default VerticalSortableItem;
