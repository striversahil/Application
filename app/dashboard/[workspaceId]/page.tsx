import { useRouter, redirect } from "next/navigation";
import { getWorkspaceInfo } from "@actions/user";
import React from "react";
import Sidebar from "@components/Global/Sidebar";

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
    <div className="flex bg-slate-950">
      <Sidebar />
      <main className="flex-1 p-8">
        <h1 className="text-2xl font-bold">Main Content</h1>
        <p>This is the main content area.</p>
      </main>
    </div>
  );
};

export default page;
