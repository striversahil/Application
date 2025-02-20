import React from "react";
import { CodeiumEditor as IDE } from "@codeium/react-code-editor";

type Props = {};

const IDEeditor = (props: Props) => {
  function handleEditorChange(value: any, event: any) {
    console.log("Content changed:", value);
  }
  return (
    <div className="relative w-full h-full">
      <IDE
        language="javascript"
        theme="vs-dark"
        path="/editor.ts"
        defaultValue="console.log('hello world')"
        height={"100%"}
        loading="Loading..."
        onChange={handleEditorChange}
      />
      <div className="absolute w-12 h-full z-10 top-0  right-0 bg-[#1e1e1e]"></div>
    </div>
  );
};

export default IDEeditor;
