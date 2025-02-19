import CodeBlockAPI from "@/api/project/codeBlock";
import { useMutationData } from "@/hooks/useMutation";

class StepsBlockAction {
  static useaddSteps() {
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
      CodeBlockAPI.addstep,
      "CodeBlockAction.getall",
      OptimisticFn
    );
    return { mutateStepAdd: mutate };
  }

  static duplicateStep() {
    const { mutate } = useMutationData(
      ["CodeBlockAction.duplicateStep"],
      CodeBlockAPI.duplicateStep,
      "CodeBlockAction.getall"
    );
    return mutate;
  }

  static deleteStep(payload: any) {
    const { mutate } = useMutationData(
      ["CodeBlockAction.deleteStep"],
      CodeBlockAPI.deleteStep,
      "CodeBlockAction.getall"
    );
    return mutate(payload);
  }
}

export default StepsBlockAction;
