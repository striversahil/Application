import { PanelBottomClose, PanelBottomOpen } from "lucide-react";
import React from "react";
import Tabs from "./tabs";
import Steps from "./steps";
import EditorCode from "./editor";
import { Panel, PanelGroup, PanelResizeHandle } from "react-resizable-panels";

type Props = {
  handleOpen: () => void;
};

const CodeBlock = ({ handleOpen }: Props) => {
  return (
    <div className="w-full h-full bg-slate-800">
      <Tabs handleOpen={handleOpen} />
      <PanelGroup direction="horizontal">
        <Panel defaultSize={20} minSize={20} maxSize={50}>
          <Steps />
        </Panel>
        <PanelResizeHandle className="p-[2px] cursor-row-resize hover:bg-blue-500" />
        <Panel defaultSize={80} minSize={20} maxSize={80}>
          <EditorCode />
        </Panel>
      </PanelGroup>
    </div>
  );
};

export default CodeBlock;
