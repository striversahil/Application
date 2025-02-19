import CodeBlockAPI from "@/api/project/codeBlock";
import { useMutationData } from "@/hooks/useMutation";

// ++++++++++++++++++++++++++++++++++++++++++++++ Optimistic Updated API +++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

class CodeBlockAction {
  static useAddTab() {
    const OptimisticFn = (previousData: any, variables: any) => {
      return {
        ...previousData,
        payload: [...previousData.payload, variables],
      };
    };

    const { mutate: mutateAdd } = useMutationData(
      ["CodeBlockAction.add"],
      CodeBlockAPI.new,
      "CodeBlockAction.getall",
      OptimisticFn
    );

    return { mutateAdd };
  }

  static useDeleteTab = () => {
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
      CodeBlockAPI.delete,
      "CodeBlockAction.getall",
      OptimisticFn
    );

    return { mutateDelete, isPending };
  };
  // +++++++++++++++++++++++++++++++++++++++++++++ Steps API +++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

  static nameChange(payload: any) {
    const { mutate } = useMutationData(
      ["CodeBlockAction.nameChange"],
      CodeBlockAPI.nameChange,
      "CodeBlockAction.getall"
    );
    return mutate(payload);
  }
}
export default CodeBlockAction;
