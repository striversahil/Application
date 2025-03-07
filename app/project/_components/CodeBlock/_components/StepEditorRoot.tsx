import React, { useEffect, useState } from "react";
import { Tabs as TabRoot, TabsContent } from "@radix-ui/react-tabs";
import { Panel, PanelGroup, PanelResizeHandle } from "react-resizable-panels";
import Steps from "../steps";
import EditorCode from "../editor";
import ProjectAction from "@/actions/project";

type Props = {
  value?: any;
};

const StepEditorRoot = (props: Props) => {
  // const [currentStep, setCurrentStep] = useState("");
  console.log(props.value);

  if (!props.value) {
    return <div>Loading...</div>;
  }

  const { isLoading, data } = ProjectAction.getAllSteps(props.value.id);

  if (!data) {
    return <div>Loading...</div>;
  }
  // console.log(data.payload);

  if (data) {
    const codeBlock = data.payload;
    console.log(codeBlock);
    // const currentStep = codeBlock.steps[0]?._id;

    return (
      <div className="w-full h-full">
        {/* {currentStep && ( */}
        <TabRoot
          className="w-full h-full"
          defaultValue={codeBlock.steps[0]?._id}
        >
          <PanelGroup direction="horizontal" className="">
            <Panel defaultSize={20} minSize={20} maxSize={50}>
              <Steps value={codeBlock} />
            </Panel>
            <PanelResizeHandle className="p-[1px] cursor-row-resize hover:bg-blue-500" />
            <Panel defaultSize={80} minSize={20} maxSize={80}>
              {codeBlock.steps.map((item: any, index: number) => (
                <TabsContent
                  value={item._id}
                  className="w-full h-full"
                  key={index}
                >
                  <EditorCode value={item} />
                </TabsContent>
              ))}
            </Panel>
          </PanelGroup>
        </TabRoot>
        {/* )} */}
      </div>
    );
  }
};

export default StepEditorRoot;
