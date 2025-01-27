import React from "react";

import {
  DropdownMenuContent,
  DropdownMenuItem,
} from "@components/ui/dropdown-menu";

type Props = {};

const Dropdown = (props: Props) => {
  return (
    <DropdownMenuContent className="w-[--radix-popper-anchor-width] bg-white/80 backdrop-blur">
      <DropdownMenuItem>
        <span>Acme Inc</span>
      </DropdownMenuItem>
      <DropdownMenuItem>
        <span>Acme Corp.</span>
      </DropdownMenuItem>
    </DropdownMenuContent>
  );
};

export default Dropdown;
