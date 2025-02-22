import React from "react";
import { Input } from "@/components/ui/input";
import { cn } from "@/lib/utils";

const TextComponent = ({ configuration, payload }: any): JSX.Element => {
  return (
    <div>
      <Input
        value={payload.text}
        className={cn(
          "h-8 w-full bg-background shadow-none focus-visible:ring-2 focus-visible:ring-sidebar-ring",
          `p-${configuration.padding}px`,
          `text-${configuration.fontSize}px`
        )}
      />
    </div>
  );
};

export default TextComponent;
