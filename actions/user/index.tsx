// Contains user actions related to authentication
import { useQuery } from "@tanstack/react-query";
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
    refetchOnWindowFocus: false,
    retry: false,
    staleTime: 1000 * 60 * 5,
  });
