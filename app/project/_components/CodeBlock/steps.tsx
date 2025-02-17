import CodeBlockAction from "@/actions/project/codeBlock";

import { useQueryData } from "@/hooks/useQueryData";
import { useClickOutside } from "@mantine/hooks";
import React from "react";
import HeaderChange from "./_components/HeaderChange";

type Props = {
  value?: any;
};

const Steps = (props: Props) => {
  const { isLoading, data } = useQueryData(
    "CodeBlockAction.getall",
    CodeBlockAction.getall
  );

  return (
    <div className="bg-slate-900 border-r border-slate-500 w-full h-full">
      <HeaderChange value={props.value} />
    </div>
  );
};

export default Steps;
