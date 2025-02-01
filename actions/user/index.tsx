// Contains user actions related to authentication

import { useMutation, useQuery } from "@tanstack/react-query";
import useBackend from "../../hooks/useBackend";
import { useMutationData } from "../../hooks/useMutation";
import { redirect } from "next/navigation";

export const getUserInfo = (): any =>
  useQuery({
    queryKey: ["userinfo"],
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
