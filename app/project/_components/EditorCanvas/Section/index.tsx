import { cn } from "@/lib/utils";
import { useDroppable } from "@dnd-kit/core";
import React, {
  CSSProperties,
  useCallback,
  useEffect,
  useMemo,
  useRef,
} from "react";
import { Resizable } from "re-resizable";
import ResizableBox from "../ResizableBox/ResizableBox";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
const _ = require("lodash");
import Image from "next/image";
import DeleteSection from "./DeleteSection";
import AddSection from "./AddSection";
import Component from "../Component";

type Props = {
  value?: any;
};

const Section = (props: Props) => {
  const { isOver, setNodeRef, rect, active } = useDroppable({
    id: props.value._id,
  });
  // console.log(rect?.current?.width);

  return (
    <div className="w-full h-full">
      <ResizableBox>
        <div
          ref={setNodeRef}
          className={cn(
            "relative w-full h-full border border-pink-400 flex items-center justify-center pointer-events-auto"
            // active && "bg-pink-400"
          )}
        >
          {isOver && (
            <div className="relative w-full h-full bg-blue-500">
              <div className="absolute inset-2 rounded-lg bg-white/20 overflow-clip">
                <Image
                  src="/slug.webp"
                  width={rect?.current?.width}
                  height={rect?.current?.height}
                  className="w-full h-full opacity-70 "
                  alt="slug"
                />
              </div>
            </div>
          )}
          <Label className="absolute top-[50px] left-[70px]">
            {props.value._id + props.value.name}
          </Label>
          {props.value.components.map((item: any, index: number) => (
            <div key={index} className="w-full h-full">
              <Component id={item} />
            </div>
          ))}
          <DeleteSection id={props.value._id} />
        </div>
      </ResizableBox>
      <AddSection />
    </div>
  );
};

export default Section;
