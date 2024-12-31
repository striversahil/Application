import React from "react";
import { Sidebar, DragDrop } from "@repo/layouts";

type Props = {};

const page = (props: Props) => {
  return (
    <div className="flex h-screen">
      <Sidebar />
      <DragDrop />
    </div>
  );
};

export default page;
