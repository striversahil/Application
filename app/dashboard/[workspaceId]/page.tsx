import { useRouter, redirect } from "next/navigation";
import { getWorkspaceInfo } from "@actions/user";
import { ApplicationSelectionBoxes } from "@app/dashboard/_components/application";
import React from "react";
import Sidebar from "@app/dashboard/_components/Sidebar";

type Props = {
  params: {
    workspaceId: string;
  };
};

const page = (props: Props) => {
  const WorkspaceId = props.params.workspaceId;
  console.log(WorkspaceId);

  // const { workspaceInfo, isLoading } = getWorkspaceInfo(WorkspaceId);

  return (
    <div className="flex bg-slate-950 gap-1">
      <Sidebar />
      <main className="flex-1 bg-transparent">
        <div className="p-8">
          <h1 className="text-3xl font-bold mb-8">
            Here is the list of Applications Available for{" "}
            <span className="text-blue-500 select-none">{WorkspaceId}</span>{" "}
          </h1>
          <ApplicationSelectionBoxes />
        </div>
      </main>
    </div>
  );
};

export default page;
