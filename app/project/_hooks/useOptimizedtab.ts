import CodeBlockAction from "@actions/project/codeBlock";
import { useMutationData } from "@hooks/useMutation";
import {
  MutationFunction,
  MutationKey,
  useMutation,
  useQueryClient,
} from "@tanstack/react-query";
import { toast } from "sonner";

export const useAddTab = () => {
  // Creating a query client for Mutation
  const OptimisticFn = (previousData: any, variables: any) => {
    return {
      ...previousData,
      payload: [...previousData.payload, variables],
    };
  };

  const { mutate: mutateAdd } = useMutationData(
    ["CodeBlockAction.add"],
    CodeBlockAction.new,
    "CodeBlockAction.getall",
    OptimisticFn
  );

  return { mutateAdd };
};

export const useDeleteTab = () => {
  // Creating a query client for Mutation
  const OptimisticFn = (previousData: any, variables: any) => {
    return {
      ...previousData,
      payload: [...previousData.payload].filter(
        (item: any) => item._id !== variables._id
      ),
    };
  };

  const { mutate: mutateDelete, isPending } = useMutationData(
    ["CodeBlockAction.delete"],
    CodeBlockAction.delete,
    "CodeBlockAction.getall",
    OptimisticFn
  );

  return { mutateDelete, isPending };
};
