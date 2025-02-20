import React from "react";
import Output from "./output";
import { Panel, PanelGroup } from "react-resizable-panels";
import PanelResizeHandleComp from "../utils/PanelResizeHandle";
import { EditorZone } from "./_components/EditorZone";
import { TabsContent } from "@radix-ui/react-tabs";

type Props = {
  value?: any;
};

const EditorCode = (props: Props) => {
  return (
    <div className="h-full w-full ">
      <div className="w-full h-full">
        {props.value.steps?.map((item: any, index: number) => {
          return (
            <TabsContent value={item._id} className="w-full h-full" key={index}>
              <div
                key={index}
                className="w-full h-full"
                onClick={() =>
                  localStorage.setItem("currentStep", JSON.stringify(index))
                }
              >
                <PanelGroup direction="vertical" key={index}>
                  <Panel defaultSize={50} minSize={20} maxSize={100}>
                    <EditorZone value={item} />
                  </Panel>
                  <PanelResizeHandleComp />
                  <Panel defaultSize={50} minSize={20} maxSize={100}>
                    <Output value={item} />
                  </Panel>
                </PanelGroup>
              </div>
            </TabsContent>
          );
        })}
      </div>
    </div>
  );
};

export default EditorCode;
