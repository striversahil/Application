import { useClickOutside } from "@mantine/hooks";
import React from "react";

export const useClickOutsideEnter = (Mutation: Function) => {
  const [mount, setMount] = React.useState<boolean>(false);
  const ref = useClickOutside(() => {
    setMount(false);
    Mutation();
  });
  const EnterClick = (e: React.KeyboardEvent<HTMLDivElement>) => {
    if (e.key === "Enter") {
      setMount(false);
      Mutation();
    }
  };
  return { ref, mount, setMount, EnterClick };
};
