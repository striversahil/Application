import ProjectAction from "@/actions/project";
import ComponentAction from "@/actions/project/component";
import { PointerSensor, useSensor, useSensors } from "@dnd-kit/core";
import React, { useEffect } from "react";

export interface ComponentDataInteface {
  metadata: {
    _id: number; //Database ID
    dnd_id: number; //Unique ID for Drag and Drop
    coordinates: {
      x: number;
      y: number;
    };
    configuration: {
      type: string;
      name: string;
    };
    payload: any;
  };
  x: number;
  y: number;
  payload: any;
  // Add more configurable properties as needed
}

export const useDragEnd = () => {
  const [Data, setData] = React.useState<ComponentDataInteface[]>([]);

  const [activeId, setActiveId] = React.useState<string>("");
  const [IsDropped, setIsDropped] = React.useState(false);
  const [isDragging, setIsDragging] = React.useState(false);

  const { data } = ProjectAction.getComponents();
  const { mutate: mutateAdd } = ComponentAction.add();
  const { mutate: mutateUpdate } = ComponentAction.update();

  useEffect(() => {
    if (data) {
      setData(data);
    }
  }, [data]);

  const sensors = useSensors(
    useSensor(PointerSensor, { activationConstraint: { distance: 8 } })
  );

  const handleDragEnd = (event: any) => {
    if (event.over?.id === "droppable") {
      const mouseX = event.activatorEvent.clientX;
      const mouseY = event.activatorEvent.clientY;
      const { active } = event;
      // Check if the active item is already in the array
      const PresentElement = Data.find(
        (item) => item.metadata.dnd_id === Number(active.id)
      );

      // If the active item is not in the array, add it
      if (!PresentElement) {
        mutateAdd({
          metadata: {
            dnd_id: Date.now(),
            coordinates: { x: mouseX, y: mouseY },
            configuration: {
              type: "component",
              name: "Component " + Date.now(),
            },
          },
          payload: { Json_Data: "Component " + Date.now() },
        });
        return null;
        // Else We are modifying it from the Array
      } else {
        mutateUpdate({
          ...PresentElement,
          metadata: {
            ...PresentElement.metadata,
            _id: PresentElement.metadata._id,
          },
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
