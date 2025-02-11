import React from "react";
import Output from "./output";
import { Panel, PanelGroup, PanelResizeHandle } from "react-resizable-panels";

type Props = {};

const EditorCode = (props: Props) => {
  return (
    <div className="h-full w-full">
      <PanelGroup direction="vertical">
        <Panel defaultSize={50} minSize={20} maxSize={100}>
          <div>Editor</div>
        </Panel>
        <PanelResizeHandle />
        <Panel defaultSize={50} minSize={20} maxSize={100}>
          <Output />
        </Panel>
      </PanelGroup>
    </div>
  );
};

export default EditorCode;
