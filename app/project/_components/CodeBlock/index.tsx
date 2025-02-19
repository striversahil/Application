import React from "react";
import { PanelBottomClose, PanelBottomOpen } from "lucide-react";
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

type Props = {};

const CodeBlock = ({}: Props) => {
  const { openCode, handleOpenCode } = useOpen();

  const { isLoading, data } = ProjectAction.getCodeBlocks();
  console.log(isLoading, data);

  return (
    <>
      <Tabs
        handleOpen={handleOpenCode}
        Open={openCode}
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
                    value={item._id}
                    className="w-full h-full"
                  >
                    <PanelGroup direction="horizontal" className="">
                      <Panel defaultSize={20} minSize={20} maxSize={50}>
                        <Steps value={item} />
                      </Panel>
                      <PanelResizeHandle className="p-[1px] cursor-row-resize hover:bg-blue-500" />
                      <Panel defaultSize={80} minSize={20} maxSize={80}>
                        <EditorCode value={item} />
                      </Panel>
                    </PanelGroup>
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
