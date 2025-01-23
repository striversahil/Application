import { useRouter, redirect } from "next/navigation";
import { getWorkspaceInfo } from "@actions/user";
import React from "react";

type Props = {
  params: {
    workspaceId: string;
  };
};

const page = (props: Props) => {
  const WorkspaceId = props.params.workspaceId;
  console.log(WorkspaceId);

  // const { workspaceInfo, isLoading } = await getWorkspaceInfo(WorkspaceId);

  return (
    <div>Here is the list of Applications Available for {WorkspaceId} </div>
  );
};

export default page;
