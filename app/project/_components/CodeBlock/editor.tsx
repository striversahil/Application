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
          console.log(item);
          return (
            <div
              key={index}
              className="w-full"
              onClick={() =>
                localStorage.setItem("currentStep", JSON.stringify(index))
              }
            >
              <TabsContent value={item._id}>
                <PanelGroup direction="vertical">
                  <Panel defaultSize={50} minSize={20} maxSize={100}>
                    <EditorZone />
                  </Panel>
                  <PanelResizeHandleComp />
                  <Panel defaultSize={50} minSize={20} maxSize={100}>
                    <Output />
                  </Panel>
                </PanelGroup>
              </TabsContent>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default EditorCode;
