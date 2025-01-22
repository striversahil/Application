"use client";
import React, { useEffect } from "react";

import { Reference } from "@/packages/ages/common/Json/Reference";
import { data } from "@/packages/ages/common/Json";

import DraggableToolboxItem from "../../../apps/web/components/DragDropZone/Sidebar";

type Props = {};

const Components = (props: Props) => {
  return (
    <div className="grid grid-cols-2">
      {Reference.map((item, index) => (
        <div key={index} className="m-5 bg-slate-400 rounded-md gap-10">
          {/* Passing the props to the draggable component we created to make each draggable*/}
          <DraggableToolboxItem
            id={item.href}
            Component={item.title}
            href={item.href}
          />
        </div>
      ))}
    </div>
  );
};

export default Components;
