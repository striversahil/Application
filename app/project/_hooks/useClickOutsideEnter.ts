import { useClickOutside } from "@mantine/hooks";
import React from "react";

export const useClickOutsideEnter = (
  Mutation: () => void,
  initialValue?: string
) => {
  const [mount, setMount] = React.useState<boolean>(false);
  const [value, setValue] = React.useState<string>(initialValue ?? "");

  function SetCheck(changedValue: string) {
    if (changedValue === "") {
      return;
    }
    if (changedValue === value) {
      return;
    }
    setValue(changedValue);
  }

  function Mutate() {
    setMount(false);
    if (value === "") {
      return;
    }
    if (value === initialValue) {
      return;
    }
    Mutation();
  }
  const ref = useClickOutside(() => {
    Mutate();
  });
  const EnterClick = (e: React.KeyboardEvent<HTMLDivElement>) => {
    if (e.key === "Enter") {
      Mutate();
    }
  };
  const ValueChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    SetCheck(e.target.value);
  };
  return { ref, mount, setMount, EnterClick, ValueChange, value };
};
