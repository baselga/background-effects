import {
  DndContext,
  MouseSensor,
  TouchSensor,
  useSensor,
  useSensors,
} from "@dnd-kit/core";
import {
  restrictToParentElement,
  restrictToVerticalAxis,
} from "@dnd-kit/modifiers";
import {
  SortableContext,
  arrayMove,
  verticalListSortingStrategy,
} from "@dnd-kit/sortable";
import { useCallback } from "react";
import VerticalSortableItem from "./VerticalSortableItem";

const dndModifiers = [restrictToVerticalAxis, restrictToParentElement];

const mouseSensorOptions = {
  // Require the mouse to move by 10 pixels before activating
  activationConstraint: {
    distance: 10,
  },
};

const touchSensorOptions = {
  // Press delay of 250ms, with tolerance of 5px of movement
  activationConstraint: {
    delay: 250,
    tolerance: 5,
  },
};

function getItemId(item) {
  return item?.id || item;
}

/**
 *
 * @param {
 *   items: Object[],
 *   onSort: (Object[]) => void
 * } param0
 * @returns
 */

const VerticalSortable = ({ items, onSort, children }) => {
  const mouseSensor = useSensor(MouseSensor, mouseSensorOptions);
  const touchSensor = useSensor(TouchSensor, touchSensorOptions);
  const sensors = useSensors(mouseSensor, touchSensor);

  const arrayData = items.map((item, index) => ({
    id: item?.id || index + 1,
    data: item,
  }));

  const onDragEnd = useCallback(
    ({ active, over }) => {
      console.log("dani { active, over }", { items, active, over });
      if (over) {
        const activeIndex = arrayData.findIndex(
          (element) => getItemId(element) === active.id
        );
        const overIndex = arrayData.findIndex(
          (element) => getItemId(element) === over.id
        );
        console.log("dani aaa", {
          activeIndex,
          overIndex,
          newData: arrayMove(items, activeIndex, overIndex).map(
            (item) => item.data
          ),
        });
        onSort(
          arrayMove(arrayData, activeIndex, overIndex).map((item) => item.data)
        );
      }
    },
    [arrayData, items, onSort]
  );

  return (
    <DndContext
      onDragEnd={onDragEnd}
      sensors={sensors}
      modifiers={dndModifiers}
    >
      <SortableContext strategy={verticalListSortingStrategy} items={arrayData}>
        {arrayData?.map(({ id, data }, index) => (
          <VerticalSortableItem id={id} index={index} data={data} key={id}>
            {children}
          </VerticalSortableItem>
        ))}
      </SortableContext>
    </DndContext>
  );
};

export default VerticalSortable;
