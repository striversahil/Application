import { useMutationData } from "@/hooks/useMutation";
import axios from "axios";
import { toast } from "sonner";

axios.defaults.withCredentials = true; // Global axios config to enable cookies
const source = (process.env.NEXT_PUBLIC_BASE_URL as string) + "/codeblock";

const StepsBlockAction = {
  useadd: () => {
    const { mutate } = useMutationData(
      ["CodeBlockAction.addstep"],
      async (payload: any) => {
        const response = await axios.post(`${source}/step/new`, payload);
        return response.data;
      },
      ["ProjectAction.getCodeBlocks"],
      undefined
      // (previousData: any, variables: any) => {
      //   return {
      //     ...previousData,
      //     payload: [...previousData.payload].map((item: any) => {
      //       if (item._id === variables._id) {
      //         return {
      //           ...item,
      //           steps: [
      //             ...item.steps,
      //             { name: "Loading... " + item.steps.length + 1 },
      //           ],
      //         };
      //       }
      //       return item;
      //     }),
      //   };
      // }
    );
    return { mutate };
  },

  useduplicate: () => {
    const { mutate } = useMutationData(
      ["CodeBlockAction.duplicateStep"],
      async (payload: any) => {
        const response = await axios.post(`${source}/step/duplicate`, payload);
        return response.data;
      },
      ["ProjectAction.getCodeBlocks"],
      (previousData: any, variables: any) => {
        return {
          ...previousData,
          payload: [...previousData.payload].map((item: any) => {
            if (item._id === variables.id) {
              return {
                ...item,
                steps: [...item.steps].splice(variables.step, 0, {
                  name: "Loading... " + item.steps.length + 1,
                }),
              };
            }
            return item;
          }),
        };
      },
      () => toast("Success", { description: "Successfully duplicated step" })
    );
    return { mutate };
  },

  usedelete: () => {
    const { mutate } = useMutationData(
      ["CodeBlockAction.deleteStep"],
      async (payload: any) => {
        const response = await axios.post(`${source}/step/delete`, payload);
        return response.data;
      },
      ["ProjectAction.getCodeBlocks"],
      (previousData: any, variables: any) => {
        return {
          ...previousData,
          payload: [...previousData.payload].map((item: any) => {
            if (item._id === variables.id) {
              return {
                ...item,
                steps: [...item.steps].filter(
                  (_, index) => index !== variables.step
                ),
              };
            }
            return item;
          }),
        };
      },
      () => toast("Success", { description: "Successfully deleted step" })
    );
    return { mutate };
  },
};

export default StepsBlockAction;
