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
        <PanelResizeHandle />
        <Panel defaultSize={80} minSize={20} maxSize={100}>
          <EditorCode />
        </Panel>
      </PanelGroup>
    </div>
  );
};

export default CodeBlock;
