import React from "react";
import { DragDropZone } from "@repo/layouts";
import Modification from "@repo/layouts/Modification";
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
