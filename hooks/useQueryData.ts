import { QueryKey, useQuery } from "@tanstack/react-query";

// It will take query key and query function and return data states

export function useQueryData<T>(queryKey: QueryKey, queryFn: () => Promise<T>) {
  return useQuery({
    queryKey: [queryKey],
    queryFn: queryFn,
    refetchOnWindowFocus: false,
    retry: false,
    staleTime: 1000 * 60 * 60,
  });
}
