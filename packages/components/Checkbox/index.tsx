import { Input } from "@/components/ui/input";
import { cn } from "@/lib/utils";
import React from "react";

const Checkbox = ({ payload, configuration }: any) => {
  return (
    <div>
      <Input
        type="checkbox"
        checked={payload.checked}
        className={cn(
          "size-4 bg-background shadow-none focus-visible:ring-2 focus-visible:ring-sidebar-ring",
          `p-${configuration.padding}px`
        )}
      />
    </div>
  );
};

export default Checkbox;
