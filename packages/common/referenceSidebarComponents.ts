import TextComponent from "@packages/components/Text";
import React from "react";

// A workaround to generate random id
const id = () => {
  return (Math.random() * 10000).toString();
};

export const ReferenceSidebarComponents = [
  {
    id: id(),
    title: "Text",
    target: "text",
  },
  {
    id: id(),
    title: "Button",
    target: "text",
  },
  {
    id: id(),
    title: "Text",
    target: "text",
  },
  {
    id: id(),
    title: "Button",
    target: "text",
  },
  {
    id: id(),
    title: "Text",
    target: "text",
  },
];
