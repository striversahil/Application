import React from "react";
import { TextComponentData } from "../_types/text";
import { Input } from "@components/ui/input";
import { cn } from "@/lib/utils";

const TextComponent = ({
  padding = 0,
  content = "Some Demo Text",
  alignment = "left",
}: TextComponentData): JSX.Element => {
  return (
    <div>
      <Input
        value={content}
        className={cn(
          "h-8 w-full bg-background shadow-none focus-visible:ring-2 focus-visible:ring-sidebar-ring",
          `p-${padding}px`,
          `text-${alignment}`
        )}
      />
    </div>
  );
};

export default TextComponent;
