import CodeBlockAction from "@/actions/project/codeBlock";
import { useMutationData } from "@/hooks/useMutation";

export const useaddSteps = () => {
  const OptimisticFn = (previousData: any, variables: any) => {
    return {
      ...previousData,
      payload: [...previousData.payload].map((item: any) => {
        if (item._id === variables._id) {
          return {
            ...item,
            steps: [
              ...item.steps,
              { name: "Loading... " + item.steps.length + 1 },
            ],
          };
        }
        return item;
      }),
    };
  };

  const { mutate } = useMutationData(
    ["CodeBlockAction.addstep"],
    CodeBlockAction.addstep,
    "CodeBlockAction.getall",
    OptimisticFn
  );
  return { mutateStepAdd: mutate };
};
