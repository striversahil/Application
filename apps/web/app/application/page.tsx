import React from "react";
import { DragDropZone } from "@repo/layouts";
import CodeBlock from "@repo/layouts/CodeBlock";

type Props = {};

const page = (props: Props) => {
  return (
    <div className="relative flex h-screen">
      <DragDropZone />
      <CodeBlock />
    </div>
  );
};

export default page;
