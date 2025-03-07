import { useClickOutside } from "@mantine/hooks";
import React from "react";

export const useClickOutsideEnter = (
  Mutation: () => void,
  initialValue?: string
) => {
  const [mount, setMount] = React.useState<boolean>(false);
  const [value, setValue] = React.useState<string>(initialValue ?? "");

  function Mutate() {
    setMount(false);
    if (value === "") {
      setValue(initialValue ?? "");
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
    setValue(e.target.value);
  };

  ref.current?.focus();

  return { ref, mount, setMount, EnterClick, ValueChange, value };
};
