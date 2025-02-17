import { useQuery } from "@tanstack/react-query";

// It will take query key and query function and return data states

export function useQueryData<T>(queryKey: string, queryFn: () => Promise<T>) {
  const { data, isLoading, error } = useQuery({
    queryKey: [queryKey],
    queryFn: queryFn,
    refetchOnWindowFocus: false,
    retry: false,
    // enabled: false,
    staleTime: 1000 * 60 * 60,
  });
  return { data, isLoading, error };
}
