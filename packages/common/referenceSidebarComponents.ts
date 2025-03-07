// A workaround to generate random id
const id = () => {
  return (Math.random() * 10000).toString();
};

export const ReferenceSidebarComponents = [
  {
    id: id(),
    title: "Label",
    target: "label",
  },
  {
    id: id(),
    title: "Button",
    target: "button",
  },
  {
    id: id(),
    title: "Dropdown",
    target: "dropdown",
  },
  {
    id: id(),
    title: "Input",
    target: "input",
  },
  {
    id: id(),
    title: "Table",
    target: "table",
  },
  {
    id: id(),
    title: "Card",
    target: "card",
  },
];
