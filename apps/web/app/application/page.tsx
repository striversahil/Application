import React from "react";
import { DragDropZone } from "@repo/layouts";

type Props = {};

const page = (props: Props) => {
  return (
    <div className="flex h-screen">
      <DragDropZone />
    </div>
  );
};

export default page;
