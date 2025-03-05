import React from "react";
import { CodeiumEditor as IDE } from "@codeium/react-code-editor";
import { useClickOutside } from "@mantine/hooks";
import { useClickOutsideEnter } from "@/app/project/_hooks/useClickOutsideEnter";

type Props = {
  value?: any;
};

const IDEeditor = (props: Props) => {
  const { ref } = useClickOutsideEnter(() => {}, props.value.code);

  function handleEditorChange(value: any, event: any) {
    console.log("Content changed:", value);
  }

  return (
    <div className="relative  w-full h-full px-2" ref={ref}>
      <IDE
        language={props.value.language}
        theme="vs-dark"
        path="/editor.ts"
        defaultValue={props.value.code}
        height={"100%"}
        loading="Loading..."
        onChange={handleEditorChange}
        className=""
      />
      <div className="absolute w-14 h-full z-10 top-3  right-2 bg-[#1e1e1e]"></div>
    </div>
  );
};

export default IDEeditor;
