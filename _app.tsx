import {
  DndContext,
  DragOverlay,
  PointerSensor,
  useSensor,
  useSensors,
  rectIntersection,
} from "@dnd-kit/core";
import { SortableContext, useSortable, arrayMove } from "@dnd-kit/sortable";
import { CSS } from "@dnd-kit/utilities";
import { useState, useEffect, useRef } from "react";

// Seperate components Configuration based on it's type
interface ComponentData {
  id: string;
  type: string;
  x: number;
  y: number;
  padding: number;
  content: string;
  // Add more configurable properties as needed
}

const ConfigPanel = ({
  selectedItem,
  updateItem,
}: {
  selectedItem: ComponentData | null;
  updateItem: (newData: ComponentData) => void;
}) => {
  if (!selectedItem) return null;

  return (
    <div className="fixed right-0 top-0 h-screen w-64 bg-white shadow-lg p-4">
      <h2 className="text-lg font-bold mb-4">Component Settings</h2>
      <div className="space-y-4">
        <div>
          <label>Padding</label>
          <input
            type="range"
            min="0"
            max="32"
            value={selectedItem.padding}
            onChange={(e) =>
              updateItem({
                ...selectedItem,
                padding: Number(e.target.value),
              })
            }
          />
        </div>
        <div>
          <label>Content</label>
          <input
            type="text"
            value={selectedItem.content}
            onChange={(e) =>
              updateItem({
                ...selectedItem,
                content: e.target.value,
              })
            }
          />
        </div>
      </div>
    </div>
  );
};
// Seperate components Configuration based on it's type
const SortableItem = ({
  item,
  isSelected,
  onClick,
}: {
  item: ComponentData;
  isSelected: boolean;
  onClick: () => void;
}) => {
  const {
    attributes,
    listeners,
    setNodeRef,
    transform,
    transition,
    isDragging,
  } = useSortable({ id: item.id });

  const style = {
    transform: CSS.Translate.toString(transform),
    transition,
    position: "absolute" as const,
    left: item.x,
    top: item.y,
    padding: `${item.padding}px`,
    opacity: isDragging ? 0.5 : 1,
    cursor: "grab",
    border: isSelected ? "2px solid blue" : "none",
  };

  return (
    <div
      ref={setNodeRef}
      style={style}
      {...attributes}
      {...listeners}
      onClick={(e) => {
        e.stopPropagation();
        onClick();
      }}
      className="bg-white rounded shadow-md touch-none"
    >
      {item.content}
    </div>
  );
};

const DroppableArea = () => {
  const [items, setItems] = useState<ComponentData[]>(() => {
    const saved = localStorage.getItem("items");
    return saved ? JSON.parse(saved) : [];
  });
  const [selectedId, setSelectedId] = useState<string | null>(null);
  const containerRef = useRef<HTMLDivElement>(null);

  const sensors = useSensors(
    useSensor(PointerSensor, {
      activationConstraint: {
        distance: 8,
      },
    })
  );

  useEffect(() => {
    localStorage.setItem("items", JSON.stringify(items));
  }, [items]);

  //  Pushing to the Array after finding that the item is dropped
  const handleDragEnd = (event: any) => {
    const { active, delta } = event;

    setItems(
      items.map((item) => {
        if (item.id === active.id) {
          return {
            ...item,
            x: item.x + delta.x,
            y: item.y + delta.y,
          };
        }
        return item;
      })
    );
  };

  const handleAddComponent = (type: string) => {
    if (!containerRef.current) return;

    const rect = containerRef.current.getBoundingClientRect();
    const newItem: ComponentData = {
      id: `comp-${Date.now()}`,
      type,
      x: rect.width / 2 - 50,
      y: rect.height / 2 - 25,
      padding: 8,
      content: "New Item",
    };

    setItems([...items, newItem]);
    setSelectedId(newItem.id);
  };

  const updateItem = (newData: ComponentData) => {
    setItems(items.map((item) => (item.id === newData.id ? newData : item)));
  };

  return (
    <div className="flex h-screen">
      <div className="w-64 p-4 border-r">
        <h3 className="font-bold mb-4">Components</h3>
        <button
          onClick={() => handleAddComponent("button")}
          className="mb-2 p-2 w-full bg-gray-100 rounded"
        >
          Add Button
        </button>
        <button
          onClick={() => handleAddComponent("text")}
          className="mb-2 p-2 w-full bg-gray-100 rounded"
        >
          Add Text
        </button>
      </div>

      <div
        ref={containerRef}
        className="flex-1 relative p-4 bg-gray-50"
        onClick={() => setSelectedId(null)}
      >
        <DndContext
          sensors={sensors}
          collisionDetection={rectIntersection}
          onDragEnd={handleDragEnd}
        >
          <SortableContext items={items}>
            {items.map((item) => (
              <SortableItem
                key={item.id}
                item={item}
                isSelected={item.id === selectedId}
                onClick={() => setSelectedId(item.id)}
              />
            ))}
          </SortableContext>
        </DndContext>
      </div>

      <ConfigPanel
        selectedItem={items.find((item) => item.id === selectedId) || null}
        updateItem={updateItem}
      />
    </div>
  );
};

export default DroppableArea;
