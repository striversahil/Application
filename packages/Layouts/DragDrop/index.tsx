import React from "react";
import { DevTableUsage } from "@repo/ui";

type Props = {};

const DragDrop = (props: Props) => {
  return (
    <div className="flex-grow bg-slate-900">
      <div>DragDrop</div>
      <DevTableUsage />
    </div>
  );
};

export default DragDrop;
