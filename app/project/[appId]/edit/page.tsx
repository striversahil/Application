"use client";
import EditorCanvas from "../../_components/EditorCanvas";

import { PanelGroup, Panel, PanelResizeHandle } from "react-resizable-panels";
import { PanelRightOpen } from "lucide-react";

import React, { use } from "react";
import Sidebar from "../../_components/Sidebar";
import CodeBlock from "../../_components/CodeBlock";
import ConfigFolder from "../../_components/Config";
import { DndContext } from "@dnd-kit/core";
import Header from "../../_components/Header";
import { useDragEnd } from "@app/project/_hooks/usedragEnd";
import { useOpen } from "@app/project/_hooks/useOpenCode";
import PanelResizeHandleComp from "@app/project/_components/utils/PanelResizeHandle";
import { Tabs as TabsRoot } from "@components/ui/tabs";

type Props = {};

const page = (props: Props) => {
  const {
    Data,
    handleDragEnd,
    setActiveId,
    setIsDropped,
    setIsDragging,
    sensors,
  } = useDragEnd();

  const { openConfig, handleOpenConfig } = useOpen();

  return (
    <DndContext
      onDragEnd={handleDragEnd}
      onDragStart={(event) => {
        setActiveId(event.active.id as string);
        setIsDropped(false);
        setIsDragging(true);
      }}
      sensors={sensors}
    >
      <TabsRoot>
        <div className="relative flex min-h-screen bg-slate-950">
          <Sidebar />
          <main className="relative flex-1 w-full">
            {/* Main Resizable Pannel Start's Here */}
            <PanelGroup direction="horizontal">
              <Panel defaultSize={80} minSize={40}>
                <PanelGroup direction="vertical">
                  <Panel defaultSize={60} minSize={40}>
                    <Header />
                    <EditorCanvas data={Data} />
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
                  <ConfigFolder handleOpen={handleOpenConfig}>
                    {/* Add Here Config Individual component with   
                  selectedItem={items.find((item) => item.id === selectedId) || null}
                  updateItem={updateItem}
                  
                  */}
                  </ConfigFolder>
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
