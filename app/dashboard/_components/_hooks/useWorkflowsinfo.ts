import useBackend from "@hooks/useBackend";
import { useQuery } from "@tanstack/react-query";

export const getWorkspaceInfo = (workspaceId: string): any =>
  useQuery({
    queryKey: ["workspace-info"],
    queryFn: () => {
      return useBackend({
        endpoint: `user/workspace/${workspaceId}`,
        method: "get",
      });
    },
    // refetchOnWindowFocus: false,
    // retry: true,
    // staleTime: 1000 * 60 * 60,
  });
