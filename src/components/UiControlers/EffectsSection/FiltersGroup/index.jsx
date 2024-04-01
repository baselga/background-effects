import DeleteIcon from "@mui/icons-material/Delete";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import {
  Box,
  Button,
  IconButton,
  ListItemText,
  Menu,
  MenuItem,
  MenuList,
  Stack,
  Typography,
} from "@mui/material";
import _cloneDeep from "lodash/cloneDeep";
import { useCallback, useState } from "react";
import useAppContextContext from "../../../../context/useAppContextContext";
import VerticalSortable from "../../../VerticalSortable";
import configFilters from "./Filters";

const FiltersGroup = () => {
  const {
    values: { filters },
    updateValue,
  } = useAppContextContext();
  const [anchorEl, setAnchorEl] = useState(null);
  const open = Boolean(anchorEl);  

  const handleOpen = useCallback((event) => {
    setAnchorEl(event.currentTarget);
  }, []);

  const handleClose = useCallback(() => {
    setAnchorEl(null);
  }, []);

  const handleAddFilter = useCallback(
    (filterId) => {
      handleClose();
      const { defaultValues } = configFilters.find(
        (each) => each.id === filterId
      );
      updateValue("filters", [...filters, _cloneDeep(defaultValues)]);
    },
    [filters, handleClose, updateValue]
  );

  const onDelete = useCallback(
    (index) => {
      const newFilters = [...filters];
      newFilters.splice(index, 1);
      updateValue("filters", newFilters);
    },
    [filters, updateValue]
  );

  const onSort = useCallback(
    (newFilters) => {
      console.log("dani newFilters", newFilters);
      updateValue("filters", newFilters);
    },
    [updateValue]
  );

  return (
    <Stack gap={2}>
      <Box display="flex" justifyContent="space-between" alignItems="center">
        <Typography variant="subtitle1">Filtros</Typography>
        <Button
          variant="contained"
          endIcon={<KeyboardArrowDownIcon />}
          size="small"
          onClick={handleOpen}
        >
          Añadir
        </Button>
        <Menu anchorEl={anchorEl} open={open} onClose={handleClose}>
          <MenuList dense>
            {configFilters.map((filter) => (
              <MenuItem
                onClick={() => handleAddFilter(filter.id)}
                key={filter.id}
              >
                <ListItemText>{filter.label}</ListItemText>
              </MenuItem>
            ))}
          </MenuList>
        </Menu>
      </Box>
      <VerticalSortable items={filters} onSort={onSort} >
        {({ index, data }) => (
          <FilterRow
            baseSource={`filters.${index}`}
            configFilter={data}
            onDelete={() => onDelete(index)}
          />
        )}
      </VerticalSortable>
    </Stack>
  );
};

const FilterRow = ({ baseSource, configFilter, onDelete }) => {
  const { type } = configFilter;
  const { Component } = configFilters.find(({ id }) => id === type);

  return (
    <Box display="grid" gridTemplateColumns="1fr auto" gap={1} width="100%">
      <Component baseSource={baseSource} />
      <IconButton onClick={onDelete} color="secondary">
        <DeleteIcon />
      </IconButton>
    </Box>
  );
};

export default FiltersGroup;
