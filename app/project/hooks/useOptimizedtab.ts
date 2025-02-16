import CodeBlockAction from "@actions/project/codeBlock";
import {
  MutationFunction,
  MutationKey,
  useMutation,
  useQueryClient,
} from "@tanstack/react-query";
import { toast } from "sonner";

export const useAddTab = () => {
  // Creating a query client for Mutation
  const client = useQueryClient();
  const { mutate: mutateAdd, isPending } = useMutation({
    mutationKey: ["CodeBlockAction.add"],
    mutationFn: CodeBlockAction.new,
    onMutate: async (variables) => {
      await client.cancelQueries({
        queryKey: ["CodeBlockAction.getall"],
        exact: true,
      });
      // Optimistic update to the cache
      const previousData = client.getQueryData(["CodeBlockAction.getall"]);
      client.setQueryData(["CodeBlockAction.getall"], (previousData: any) => ({
        ...previousData,
        payload: [...previousData.payload, variables],
      }));
      return { variables, previousData };
    },

    onError: (error, variables, context) => {
      client.setQueryData(["CodeBlockAction.getall"], context?.previousData);
    },
    onSuccess(data) {
      return toast("Success", {
        description: JSON.stringify(data),
      });
    },
    onSettled: () => {
      return client.invalidateQueries({
        queryKey: ["CodeBlockAction.getall"],
        exact: true,
      });
    },
  });

  return { mutateAdd, isPending };
};
export const useDeleteTab = () => {
  // Creating a query client for Mutation
  const client = useQueryClient();
  const { mutate: mutateDelete, isPending } = useMutation({
    mutationKey: ["CodeBlockAction.delete"],
    mutationFn: CodeBlockAction.delete,
    onMutate: async (variables) => {
      await client.cancelQueries({
        queryKey: ["CodeBlockAction.getall"],
        exact: true,
      });
      // Optimistic update to the cache
      const previousData = client.getQueryData(["CodeBlockAction.getall"]);
      client.setQueryData(["CodeBlockAction.getall"], (previousData: any) => ({
        ...previousData,
        payload: [...previousData.payload].filter(
          (item: any) => item._id !== variables._id
        ),
      }));
      return { variables, previousData };
    },

    onError: (error, variables, context) => {
      client.setQueryData(["CodeBlockAction.getall"], context?.previousData);
    },
    onSuccess(data) {
      return toast("Success", {
        description: JSON.stringify(data),
      });
    },
    onSettled: () => {
      return client.invalidateQueries({
        queryKey: ["CodeBlockAction.getall"],
        exact: true,
      });
    },
  });

  return { mutateDelete, isPending };
};
