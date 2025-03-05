import React, { useEffect, useState } from "react";
import { Tabs as TabRoot } from "@radix-ui/react-tabs";
import { Panel, PanelGroup, PanelResizeHandle } from "react-resizable-panels";
import Steps from "../steps";
import EditorCode from "../editor";
import ProjectAction from "@/actions/project";

type Props = {
  value?: any;
};

const StepEditorRoot = (props: Props) => {
  // const [currentStep, setCurrentStep] = useState("");

  const { isLoading, data } = ProjectAction.getCodeBlock(props.value.id);

  console.log(isLoading, data);

  if (!data) {
    return <div>Loading...</div>;
  }

  if (data) {
    const codeBlock = data.payload;
    const currentStep = codeBlock.steps[0]._id;

    return (
      <div className="w-full h-full">
        {currentStep && (
          <TabRoot defaultValue={currentStep} className="w-full h-full">
            <PanelGroup direction="horizontal" className="">
              <Panel defaultSize={20} minSize={20} maxSize={50}>
                <Steps value={codeBlock} />
              </Panel>
              <PanelResizeHandle className="p-[1px] cursor-row-resize hover:bg-blue-500" />
              <Panel defaultSize={80} minSize={20} maxSize={80}>
                <EditorCode value={codeBlock} />
              </Panel>
            </PanelGroup>
          </TabRoot>
        )}
      </div>
    );
  }
};

export default StepEditorRoot;
