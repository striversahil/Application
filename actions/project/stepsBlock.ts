import { useMutationData } from "@/hooks/useMutation";
import { itemsEqual } from "@dnd-kit/sortable/dist/utilities";
import axios from "axios";
import { toast } from "sonner";

axios.defaults.withCredentials = true; // Global axios config to enable cookies
const source = (process.env.NEXT_PUBLIC_BASE_URL as string) + "/codeblock";

// const currentTab = localStorage.getItem("currentTab") as string;

const StepsBlockAction = {
  useadd: () => {
    const currentTab = localStorage.getItem("currentTab") as string;
    const { mutate } = useMutationData(
      ["CodeBlockAction.addstep"],
      async (payload: any) => {
        const response = await axios.post(`${source}/step/new`, payload);
        return response.data;
      },
      [`ProjectAction.getOneCodeBlock-${currentTab}` as string],
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

  useChangeCode: () => {
    const currentTab = localStorage.getItem("currentTab") as string;
    const { mutate } = useMutationData(
      ["CodeBlockAction.changeCode"],
      async (payload: any) => {
        const response = await axios.post(`${source}/step/code`, payload);
        return response.data;
      },
      [`ProjectAction.getOneCodeBlock-${currentTab}` as string],
      undefined
    );
    return { mutate };
  },

  useNameChange: () => {
    const currentTab = localStorage.getItem("currentTab") as string;
    const { mutate } = useMutationData(
      ["CodeBlockAction.nameChangeStep"],
      async (payload: any) => {
        const response = await axios.post(`${source}/step/name`, payload);
        return response.data;
      },
      [`ProjectAction.getOneCodeBlock-${currentTab}` as string],
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

  useduplicate: () => {
    const currentTab = localStorage.getItem("currentTab") as string;
    const { mutate } = useMutationData(
      ["CodeBlockAction.duplicateStep"],
      async (payload: any) => {
        const response = await axios.post(`${source}/step/duplicate`, payload);
        return response.data;
      },
      [`ProjectAction.getOneCodeBlock-${currentTab}` as string],
      (previousData: any, variables: any) => {
        return {
          ...previousData,
          payload: {
            ...previousData.payload,
            steps: [
              ...previousData.payload.steps.slice(0, variables.step + 1),
              { name: "Loading... " },
              ...previousData.payload.steps.slice(variables.step + 1),
            ],
          },
        };
      },
      () => toast("Success", { description: "Successfully duplicated step" })
    );
    return { mutate };
  },

  usedelete: () => {
    const currentTab = localStorage.getItem("currentTab") as string;
    const { mutate } = useMutationData(
      ["CodeBlockAction.deleteStep"],
      async (payload: any) => {
        const response = await axios.post(`${source}/step/delete`, payload);
        return response.data;
      },
      [`ProjectAction.getOneCodeBlock-${currentTab}` as string],
      (previousData: any, variables: any) => {
        return {
          ...previousData,
          payload: {
            ...previousData.payload,
            steps: [...previousData.payload.steps].filter(
              (item) => item._id != variables.id
            ),
          },
        };
      },
      () => toast("Success", { description: "Successfully deleted step" })
    );
    return { mutate };
  },
};

export default StepsBlockAction;
