import ProjectAction from "@/actions/project";
import ComponentAction from "@/actions/project/component";
import { PointerSensor, useSensor, useSensors } from "@dnd-kit/core";
import React, { useEffect } from "react";

export const useDragEnd = () => {
  const [Data, setData] = React.useState<Record<string, any>[]>([]);

  const [activeId, setActiveId] = React.useState<string>("");
  const [IsDropped, setIsDropped] = React.useState(false);
  const [isDragging, setIsDragging] = React.useState(false);

  const { data } = ProjectAction.getComponents();
  const { mutate: mutateAdd } = ComponentAction.add();
  const { mutate: mutateUpdate } = ComponentAction.update();

  useEffect(() => {
    if (data) {
      setData(data.payload);
    }
  }, [data]);
  console.log(Data);

  const sensors = useSensors(
    useSensor(PointerSensor, { activationConstraint: { distance: 8 } })
  );

  const handleDragEnd = (event: any) => {
    if (event.over?.id === "droppable") {
      const mouseX = event.activatorEvent.clientX;
      const mouseY = event.activatorEvent.clientY;
      console.log(event);

      // Check if the active item is already in the array
      if (!event.active || !data) return null;
      const PresentElement = Data.find((item) => item._id === event.active.id);
      const PresentElementCoordinates = PresentElement?.coordinates as number[];

      // If the active item is not in the array, add it
      if (!PresentElement) {
        mutateAdd({
          metadata: {
            name: "Component " + Date.now(),
            coordinates: [mouseX, mouseY],
            configuration: {
              type: "component",
              name: "Component " + Date.now(),
            },
          },
          payload: { Json_Data: "Component " + Date.now() },
        });
        // Else We are modifying it from the Array
      } else {
        mutateUpdate({
          metadata: {
            _id: PresentElement._id,
            name: PresentElement.name,
            coordinates: [
              PresentElementCoordinates[0] + event.delta.x,
              PresentElementCoordinates[1] + event.delta.y,
            ],
            configuration: {
              type: "component",
            },
          },
          payload: { Json_Data: "Component " + Date.now() },
        });
      }
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
