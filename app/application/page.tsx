import React from "react";
import { DragDropZone } from "@packages/Layouts";
import Modification from "@packages/Layouts/Modification";
import CodeBlock from "../../components/Codeblock";

type Props = {};

const page = (props: Props) => {
  return (
    <div className="relative flex h-screen">
      <DragDropZone />
      <CodeBlock />
      <Modification />
    </div>
  );
};

export default page;
