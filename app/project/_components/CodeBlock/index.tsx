import React, { useEffect, useState } from "react";

import Tabs from "./tabs";
import Steps from "./steps";
import EditorCode from "./editor";
import { Panel, PanelGroup, PanelResizeHandle } from "react-resizable-panels";

import { useOpen } from "@/app/project/_hooks/useOpenCode";
import PanelResizeHandleComp from "../utils/PanelResizeHandle";
import { useQueryData } from "@/hooks/useQueryData";
import CodeBlockAction from "../../../../api/project/codeBlock";
import { TabsContent } from "@radix-ui/react-tabs";
import ProjectAction from "@/actions/project";
import StepEditorRoot from "./_components/StepEditorRoot";
import { Skeleton } from "@/components/ui/skeleton";

type Props = {};

const CodeBlock = ({}: Props) => {
  const { openCode, handleOpenCode } = useOpen();

  const { isLoading, data } = ProjectAction.getCodeBlocks();

  const [currentTab, setCurrentTab] = useState("");

  useEffect(() => {
    const defaultTab = localStorage.getItem("currentTab") as string;

    setCurrentTab(defaultTab);
  }, [currentTab]);

  return (
    <>
      <Tabs
        handleOpen={handleOpenCode}
        Open={openCode}
        currentTab={currentTab}
        setCurrentTab={setCurrentTab}
        // BlockData={(item) => setBlockData(item)}
      />
      {openCode && <PanelResizeHandleComp />}
      {openCode && (
        <Panel
          defaultSize={40}
          minSize={20}
          collapsible
          onCollapse={handleOpenCode}
        >
          <div className="ml-1 h-full bg-slate-800">
            {!isLoading &&
              data &&
              data.payload.map((item: any, index: number) => {
                return (
                  <TabsContent
                    key={index}
                    className="w-full h-full"
                    value={item._id}
                  >
                    {currentTab === item._id && <StepEditorRoot value={item} />}
                    {currentTab !== item._id && (
                      <>
                        <div className="flex">
                          <div className="w-[25%]">
                            <Steps value={item} />
                          </div>
                          <Skeleton className="w-full h-full" />
                        </div>
                      </>
                    )}
                  </TabsContent>
                );
              })}
          </div>
        </Panel>
      )}
    </>
  );
};

export default CodeBlock;
