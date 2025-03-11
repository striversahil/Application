"use client";
import EditorCanvas from "../../_components/EditorCanvas";

import { PanelGroup, Panel, PanelResizeHandle } from "react-resizable-panels";
import { PanelRightOpen } from "lucide-react";

import { useEffect, useState } from "react";
import Sidebar from "../../_components/Sidebar";
import CodeBlock from "../../_components/CodeBlock";
import ConfigFolder from "../../_components/Config";
import { DndContext } from "@dnd-kit/core";
import Header from "../../_components/Header";
import { useOpen } from "../../_hooks/useOpenCode";
import { Tabs as TabsRoot } from "../../../../components/ui/tabs";
import { TooltipProvider } from "../../../../components/ui/Tooltip/tooltip";
import { useCurrentTab } from "../../_hooks/useCurrentTab";
import { useDragEnd } from "../../_hooks/usedragEnd";

type Props = {};

const page = (props: Props) => {
  const {
    handleDragEnd,
    //   setActiveId,
    //   activeId,
    //   setIsDropped,
    //   setIsDragging,
    sensors,
  } = useDragEnd();

  const { openConfig, handleOpenConfig } = useOpen();

  return (
    <DndContext
      onDragEnd={handleDragEnd}
      // onDragStart={(event) => {
      //   setActiveId(event.active.id as string);
      //   setIsDropped(false);
      //   setIsDragging(true);
      // }}
      sensors={sensors}
    >
      <TabsRoot>
        <TooltipProvider>
          <div className="relative flex min-h-screen bg-slate-950">
            <Sidebar />
            <main className="relative flex-1 min-h-screen min-w-screen">
              {/* Main Resizable Pannel Start's Here */}
              <PanelGroup direction="horizontal">
                <Panel defaultSize={80}>
                  <PanelGroup direction="vertical">
                    <Panel defaultSize={60} className="relative">
                      <Header />
                      <div className="absolute inset-0 top-14 overflow-y-scroll">
                        <EditorCanvas />
                      </div>
                    </Panel>

                    <CodeBlock />
                  </PanelGroup>
                </Panel>
                {openConfig && (
                  <PanelResizeHandle className="p-[2px] cursor-row-resize hover:bg-blue-500" />
                )}
                {openConfig && (
                  <Panel
                    defaultSize={20}
                    minSize={10}
                    collapsible
                    onCollapse={handleOpenConfig}
                    maxSize={40}
                  >
                    <ConfigFolder
                      handleOpen={handleOpenConfig}
                      // selectedItem={activeId}
                    />
                  </Panel>
                )}
              </PanelGroup>
              {!openConfig && (
                <div
                  className="fixed top-2 right-0 p-2 bg-black/50 rounded-md cursor-pointer hover:bg-white/10"
                  onClick={() => handleOpenConfig()}
                >
                  <PanelRightOpen />
                </div>
              )}
            </main>
          </div>
        </TooltipProvider>
      </TabsRoot>
    </DndContext>
  );
};

export default page;

{
  /* Drag Overlay will act as Our Drag Preview */
}
{
  /* {isDragging ? (
  <div className="fixed w-screen h-screen bg-black">Dragging</div>
) : null} */
}
