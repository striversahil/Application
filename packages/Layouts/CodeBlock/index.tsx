import React from "react";
import Steps from "./Steps";
import Output from "./Output";

type Props = {};

const CodeBlock = (props: Props) => {
  return (
    <div className="absolute bottom-0 flex h-1/3 w-full bg-slate-400 rounded-xl ">
      <Steps />
      <Output />
    </div>
  );
};

export default CodeBlock;
