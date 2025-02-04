import React from "react";
import Editor from "../../_components/Editor";

interface ComponentData {
  id: number;
  x: number;
  y: number;
  content: string;
  // Add more configurable properties as needed
}
type Props = {};

const test: ComponentData[] = [
  {
    id: 1,
    content: "Component 1",
    x: 1274,
    y: 415,
  },
  {
    id: 2,
    content: "Component 2",
    x: 574,
    y: 1175,
  },
  {
    id: 3,
    content: "Component 3",
    x: 18,
    y: 822,
  },
  {
    id: 4,
    content: "Component 4",
    x: 877,
    y: 14259,
  },
  {
    id: 5,
    content: "Component 5",
    x: 154,
    y: 421,
  },
];

const page = (props: Props) => {
  return (
    <div>
      <Editor />
    </div>
  );
};

export default page;
