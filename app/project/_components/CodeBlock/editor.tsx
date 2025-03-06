import React, { useEffect, useState } from "react";
import Output from "./output";
import { Panel, PanelGroup } from "react-resizable-panels";
import PanelResizeHandleComp from "../utils/PanelResizeHandle";
import { EditorZone } from "./_components/Editor/EditorZone";
import { TabsContent } from "@radix-ui/react-tabs";
import ProjectAction from "@/actions/project";

type Props = {
  value?: any;
};

const EditorCode = (props: Props) => {
  const [stepsBlock, setstepBlock] = useState<any>(null);
  const { data } = ProjectAction.getStep(props.value.id);
  console.log(stepsBlock);

  useEffect(() => {
    setstepBlock(data.payload);
  }, [data]);

  return (
    <div className="w-full h-full">
      {stepsBlock && (
        <PanelGroup direction="vertical">
          <Panel defaultSize={70} minSize={20} maxSize={100}>
            <EditorZone value={stepsBlock} />
          </Panel>
          <PanelResizeHandleComp />
          <Panel defaultSize={30} minSize={20} maxSize={100}>
            <Output value={stepsBlock} />
          </Panel>
        </PanelGroup>
      )}
    </div>
  );
};

export default EditorCode;
