import { useQueryData } from "@hooks/useQueryData";
import { getWorkspaceInfo } from "./_hooks/useWorkflowsinfo";

interface WorkspaceData {
  data: {
    name: string;
    // Add other properties of the data object here
  };
}

export const ApplicationSelectionBoxes = ({ workspaceId }: any) => {
  const applications = [
    {
      id: 1,
      name: "Dashboard",
      icon: "📊",
      description: "View and manage your analytics and reports.",
    },
    {
      id: 2,
      name: "CRM",
      icon: "📇",
      description: "Manage customer relationships and interactions.",
    },
    {
      id: 3,
      name: "Project Management",
      icon: "📅",
      description: "Organize and track your projects and tasks.",
    },
    {
      id: 4,
      name: "Marketing",
      icon: "📢",
      description: "Plan and execute marketing campaigns.",
    },
  ];

  const { data, isLoading } = useQueryData<WorkspaceData>(
    "workspace",
    getWorkspaceInfo(workspaceId!)
  );

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 p-8">
      {applications.map((app) => (
        <div
          key={app.id}
          className="flex flex-col items-center justify-center bg-slate-800 hover:bg-slate-800/50 p-6  border border-gray-200 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300 cursor-pointer"
        >
          <div className="text-4xl mb-4">{app.icon}</div>
          <h2 className="text-xl font-semibold mb-2">{app.name}</h2>
          {isLoading && <p className="text-gray-600 text-center">Loading...</p>}
          {!isLoading && (
            <p className="text-gray-600 text-center">{data?.data.name}</p>
          )}
          <p className="text-gray-600 text-center">{app.description}</p>
        </div>
      ))}
    </div>
  );
};
