import { PointerSensor, useSensor, useSensors } from "@dnd-kit/core";
import React from "react";

interface ComponentData {
  id: number;
  x: number;
  y: number;
  payload: any;
  // Add more configurable properties as needed
}
const test: ComponentData[] = [];

export const useDragEnd = () => {
  const [Data, setData] = React.useState<ComponentData[]>(test);

  const [activeId, setActiveId] = React.useState<string>("");
  const [IsDropped, setIsDropped] = React.useState(false);
  const [isDragging, setIsDragging] = React.useState(false);

  const sensors = useSensors(
    useSensor(PointerSensor, { activationConstraint: { distance: 8 } })
  );

  const filterOperation = (event: any, mouseX: number, mouseY: number) => {
    const { active } = event;
    // Check if the active item is already in the array
    const Presence_array = Data.filter((item) => item.id === Number(active.id));
    const filtered_array = Data.filter((item) => item.id !== Number(active.id));

    // If the active item is not in the array, add it
    if (Presence_array.length === 0) {
      setData((initialData) => [
        ...initialData,
        {
          id: Date.now(),
          payload: "Component " + Date.now(),
          x: mouseX,
          y: mouseY, // Fixed typo here
        },
      ]);
      return null;
      // Else We are modifying it from the Array
    } else {
      const newData = [
        ...filtered_array,
        {
          id: Presence_array[0]?.id ?? 0,
          payload: Presence_array[0]?.payload ?? "",
          x: event.delta.x + Presence_array[0]?.x,
          y: event.delta.y + Presence_array[0]?.y,
        },
      ];
      setData(newData);
    }
  };

  const handleDragEnd = (event: any) => {
    if (event.over?.id === "droppable") {
      const mouseX = event.activatorEvent.clientX;
      const mouseY = event.activatorEvent.clientY;
      filterOperation(event, mouseX, mouseY);
      setIsDropped(true);
    }
    // setIsDragging(false);
    setActiveId("");
  };
  return {
    Data,
    setData,
    activeId,
    setActiveId,
    IsDropped,
    setIsDropped,
    setIsDragging,
    handleDragEnd,
    sensors,
  };
};
