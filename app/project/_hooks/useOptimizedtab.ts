import CodeBlockAction from "@/actions/project/codeBlock";
import { useMutationData } from "@/hooks/useMutation";

export const useAddTab = () => {
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
