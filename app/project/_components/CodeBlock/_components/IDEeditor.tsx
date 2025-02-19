import React from "react";
import { CodeiumEditor as IDE } from "@codeium/react-code-editor";

type Props = {};

const IDEeditor = (props: Props) => {
  function handleEditorChange(value: any, event: any) {
    console.log("Content changed:", value);
  }
  return (
    <div className="w-full h-full">
      <IDE
        language="javascript"
        theme="vs-dark"
        path="/editor.ts"
        defaultValue="console.log('hello world')"
        height={"100%"}
        loading="Loading..."
        onChange={handleEditorChange}
      />
    </div>
  );
};

export default IDEeditor;
