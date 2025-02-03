"use client";
import React from "react";
import { SortableContext, useSortable } from "@dnd-kit/sortable";
import { CSS } from "@dnd-kit/utilities";

type Props = {};

// create array of nested id's of components1

const test = [
  {
    id: 1,
    name: "Dashboard",
    icon: "📊",
    description: "View and manage your analytics and reports.",
  },
  {
    id: 2,
    name: "CRM",
    icon: "📇",
    description: "Manage customer relationships and interactions.",
  },
  {
    id: 3,
    name: "Project Management",
    icon: "📅",
    description: "Organize and track your projects and tasks.",
  },
  {
    id: 4,
    name: "Marketing",
    icon: "📢",
    description: "Plan and execute marketing campaigns.",
  },
  {
    id: 5,
    name: "Dashboard",
    icon: "📊",
    description: "View and manage your analytics and reports.",
  },
  {
    id: 6,
    name: "CRM",
    icon: "📇",
    description: "Manage customer relationships and interactions.",
  },
  {
    id: 7,
    name: "Project Management",
    icon: "📅",
    description: "Organize and track your projects and tasks.",
  },
  {
    id: 8,
    name: "Marketing",
    icon: "📢",
    description: "Plan and execute marketing campaigns.",
  },
];

const SortableItems = ({ id, name, icon, description }: any) => {
  const {
    attributes,
    listeners,
    setNodeRef,
    transform,
    transition,
    isDragging,
    isOver,
  } = useSortable({
    id: id,
  });

  const style = {
    transform: CSS.Transform.toString(transform),
    transition,
    opacity: isDragging ? 0.5 : 1,
    background: isDragging ? "lightgreen" : undefined,
  };

  return (
    <div ref={setNodeRef} style={style} {...attributes} {...listeners}>
      {/* Your content here */}
      <div>
        <p>{name}</p>
        <p>{icon}</p>
        <p>{description}</p>
      </div>
    </div>
  );
};

const page = (props: Props) => {
  return (
    <div>
      <SortableContext items={test.map((item) => item.id)}>
        {test.map((item) => (
          <SortableItems key={item.id} {...item} />
        ))}
      </SortableContext>
    </div>
  );
};

export default page;
