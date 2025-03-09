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

  // Debounced mouse move handler
  const handleMouseMove = useRef(
    debounce((e: MouseEvent) => {
      if (!isResizing.current) return;

      const newWidth = Math.max(
        50,
        initialWidth.current + (e.clientX - initialX.current)
      );
      const newHeight = Math.max(
        50,
        initialHeight.current + (e.clientY - initialY.current)
      );

      setWidth(newWidth);
      setHeight(newHeight);
    }, 10)
  );

  const handleMouseDown = (e: React.MouseEvent<HTMLDivElement>) => {
    isResizing.current = true;
    initialX.current = e.clientX;
    initialY.current = e.clientY;
    initialWidth.current = DOMref.current?.offsetWidth || 200;
    initialHeight.current = DOMref.current?.offsetHeight || 200;

    document.addEventListener("mousemove", handleMouseMove.current);
    document.addEventListener("mouseup", handleMouseUp);
  };

  const handleMouseUp = useCallback(() => {
    isResizing.current = false;
    document.removeEventListener("mousemove", handleMouseMove.current);
    document.removeEventListener("mouseup", handleMouseUp);
  }, []);

  // Cleanup on unmount
  useEffect(() => {
    return () => {
      document.removeEventListener("mousemove", handleMouseMove.current);
      document.removeEventListener("mouseup", handleMouseUp);
    };
  }, [handleMouseUp]);

  return (
    <div className="relative">
      <div
        ref={DOMref}
        style={{
          width: `${width}px`,
          height: `${height}px`,
          resize: "both",
          overflow: "hidden",
        }}
        className=" border shadow-md"
      >
        {children}
      </div>
      {/* Resizable Handle */}
      <div
        onMouseDown={handleMouseDown}
        className="absolute bottom-0 right-0 w-5 h-5 bg-gray-600 cursor-se-resize"
      />
    </div>
  );
};

export default ResizableBox;
