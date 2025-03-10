import React, { useCallback, useEffect, useRef, useState } from "react";
import { debounce } from "lodash";

type Props = {
  children: React.ReactNode;
};

const ResizableBox = ({ children }: Props) => {
  const [width, setWidth] = useState(200);
  const [height, setHeight] = useState(200);
  const DOMref = useRef<HTMLDivElement>(null);
  const initialX = useRef(0);
  const initialY = useRef(0);
  const isResizing = useRef(false);
  const initialWidth = useRef<number>(0);
  const initialHeight = useRef<number>(0);

  const handleMouseX = useRef((e: MouseEvent) => {
    //UseRef because it won't will cause rerender's and i was not having any dependency
    //useRef returns a mutable ref object
    if (!isResizing.current) return; // If not resizing, do nothing
    const newWidth =
      initialWidth.current +
      Math.floor((e.clientX - initialX.current) / 10) * 10; // Set Width in Snap Size of 10px
    setWidth(newWidth);
  });

  // Debounced mouse move handler
  const handleMouseY = useRef((e: MouseEvent) => {
    if (!isResizing.current) return;

    const newHeight =
      initialHeight.current +
      Math.floor((e.clientY - initialY.current) / 10) * 10;

    setHeight(newHeight);
  });

  const handleMouseDownCommon = (e: React.MouseEvent<HTMLDivElement>) => {
    handleMouseDownX(e);
    handleMouseDownY(e);
  };
  const handleMouseDownX = (e: React.MouseEvent<HTMLDivElement>) => {
    isResizing.current = true;
    initialX.current = e.clientX;
    initialWidth.current = DOMref.current?.offsetWidth || 200;

    document.addEventListener("mousemove", handleMouseX.current);
    document.addEventListener("mouseup", handleMouseUp);
  };

  const handleMouseDownY = (e: React.MouseEvent<HTMLDivElement>) => {
    isResizing.current = true;
    initialY.current = e.clientY;
    initialHeight.current = DOMref.current?.offsetHeight || 200;

    document.addEventListener("mousemove", handleMouseY.current);
    document.addEventListener("mouseup", handleMouseUp);
  };

  //  Cleanup all Event listeners
  const handleMouseUp = useCallback(() => {
    isResizing.current = false;
    document.removeEventListener("mousemove", handleMouseX.current);
    document.removeEventListener("mousemove", handleMouseY.current);
    document.removeEventListener("mouseup", handleMouseUp);
  }, []);

  // Cleanup Callback listener
  useEffect(() => {
    return () => {
      document.removeEventListener("mousemove", handleMouseX.current);
      document.removeEventListener("mousemove", handleMouseY.current);
      document.removeEventListener("mouseup", handleMouseUp);
    };
  }, [handleMouseUp]);

  return (
    <div className="relative">
      <div
        ref={DOMref}
        style={{
          // width: `${width}px`,
          height: `${height}px`,
          //     resize: "both",
          overflow: "hidden",
        }}
        className="relative border shadow-md"
      >
        {children}
        {/* Resizable Handle */}
        <div
          onMouseDown={handleMouseDownX}
          className="absolute right-0 top-0 h-full w-1 bg-gray-600 cursor-e-resize"
        />
        <div
          onMouseDown={handleMouseDownY}
          className="absolute bottom-0 w-full  h-1 bg-gray-600 cursor-n-resize "
        />
        <div
          className="absolute bottom-0 right-0 h-2 w-2 rounded-full bg-gray-600 cursor-nw-resize"
          onMouseDown={handleMouseDownCommon}
        />
      </div>
      {/* Resizable Handle */}
    </div>
  );
};

export default ResizableBox;
