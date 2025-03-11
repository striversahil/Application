import { useCurrentTab } from "../../app/project/_hooks/useCurrentTab";
import { useMutationData } from "@/hooks/useMutation";
import axios from "axios";
import { toast } from "sonner";

axios.defaults.withCredentials = true; // Global axios config to enable cookies
const source = (process.env.NEXT_PUBLIC_BASE_URL as string) + "/stepblock";

// const currentTab = localStorage.getItem("currentTab") as string;

const StepsBlockAction = {
  useadd: (currentTab: string) => {
    const { mutate } = useMutationData(
      ["CodeBlockAction.addstep"],
      async (payload: any) => {
        const response = await axios.post(`${source}/`, payload);
        return response.data;
      },
      [
        [`ProjectAction.getAllSteps-${currentTab}` as string],
        [`ProjectAction.getOneCodeBlock-${currentTab}` as string],
      ],
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

  useCode: (step_id: string) => {
    const { mutate } = useMutationData(
      ["CodeBlockAction.changeCode"],
      async (payload: any) => {
        const response = await axios.post(`${source}/code`, payload);
        return response.data;
      },
      [[`ProjectAction.getOneStep-${step_id}` as string]],
      undefined
    );
    return { mutate };
  },

  useNameChange: () => {
    const { currentTab } = useCurrentTab();
    const { mutate } = useMutationData(
      ["CodeBlockAction.nameChangeStep"],
      async (payload: any) => {
        const response = await axios.post(`${source}/step/name`, payload);
        return response.data;
      },
      [[`ProjectAction.getOneCodeBlock-${currentTab}` as string]],
      undefined
      // (previousData: any, variables: any) => {
      //   return {
      //     ...previousData,
      //     payload: [...previousData.payload].map((item: any) => {
      //       if (item._id === variables.id) {
      //         return {
      //           ...item,
      //           steps: [...item.steps].map((step: any, index: number) => {
      //             if (index === variables.step) {
      //               return { ...step, name: variables.name };
      //             }
      //             return step;
      //           }),
      //         };
      //       }
      //     }),
      //   };
      // }
    );
    return { mutate };
  },

  useduplicate: (currentTab: string) => {
    const { mutate } = useMutationData(
      ["CodeBlockAction.duplicateStep"],
      async (payload: any) => {
        const response = await axios.post(`${source}/duplicate`, payload);
        return response.data;
      },
      [[`ProjectAction.getAllSteps-${currentTab}` as string]],
      undefined,
      // (previousData: any, variables: any) => {
      //   return {
      //     ...previousData,
      //     payload: {
      //       ...previousData.payload,
      //       steps: [
      //         ...previousData.payload.steps.slice(0, variables.step + 1),
      //         { name: "Loading... " },
      //         ...previousData.payload.steps.slice(variables.step + 1),
      //       ],
      //     },
      //   };
      // },
      () => toast("Success", { description: "Successfully duplicated step" })
    );
    return { mutate };
  },

  usedelete: (currentTab: string) => {
    const { mutate } = useMutationData(
      ["CodeBlockAction.deleteStep"],
      async (payload: any) => {
        const response = await axios.post(`${source}/delete`, payload);
        return response.data;
      },
      [[`ProjectAction.getAllSteps-${currentTab}` as string]],
      undefined,
      // (previousData: any, variables: any) => {
      //   return {
      //     ...previousData,
      //     payload: {
      //       ...previousData.payload,
      //       steps: [...previousData.payload.steps].filter(
      //         (item) => item._id != variables.id
      //       ),
      //     },
      //   };
      // },
      () => toast("Success", { description: "Successfully deleted step" })
    );
    return { mutate };
  },
};

export default StepsBlockAction;
