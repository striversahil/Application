// Contains user actions related to authentication

import { useMutation, useQuery } from "@tanstack/react-query";
import useBackend from "../../hooks/useBackend";

export const getUserAuth = (): any =>
  useQuery({
    queryKey: ["test"],
    queryFn: () => {
      return useBackend({
        endpoint: "user/auth",
        method: "get",
      });
    },
  });

export const getUserInfo = (): any =>
  useQuery({
    queryKey: ["user-info"],
    queryFn: () => {
      return useBackend({
        endpoint: "user",
        method: "get",
      });
    },
    refetchOnWindowFocus: false,
    retry: false,
    staleTime: 1000 * 60 * 60,
  });

export const getWorkspaceInfo = (workspaceId: string): any =>
  useQuery({
    queryKey: ["workspace-info"],
    queryFn: () => {
      return useBackend({
        endpoint: `user/workspace/${workspaceId}`,
        method: "get",
      });
    },
    refetchOnWindowFocus: false,
    retry: false,
    staleTime: 1000 * 60 * 60,
  });
