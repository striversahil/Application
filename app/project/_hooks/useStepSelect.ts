import React from "react";

export const useStepSelect = () => {
  const [select, setSelect] = React.useState<string>("");
  const setter = (id: string) => {
    localStorage.setItem("currentStep", id);
    setSelect(id);
  };

  const getter = () => {
    const id = localStorage.getItem("currentStep");
    return id;
  };
  return {
    setter,
    getter,
  };
};
