import { useMutationData } from "@/hooks/useMutation";
import axios from "axios";

axios.defaults.withCredentials = true; // Global axios config to enable cookies
const source = (process.env.NEXT_PUBLIC_BASE_URL as string) + "/codeblock";

const TabBlockAction = {
  useAdd: () => {
    const OptimisticFn = (previousData: any, variables: any) => {
      return {
        ...previousData,
        payload: [...previousData.payload, variables],
      };
    };

    const { mutate } = useMutationData(
      ["CodeBlockAction.add"],
      async (payload: any) => {
        const response = await axios.post(`${source}/`, payload);
        return response;
      },
      ["ProjectAction.getCodeBlocks"],
      OptimisticFn
    );

    return { mutate };
  },

  useDelete: () => {
    const OptimisticFn = (previousData: any, variables: any) => {
      return {
        ...previousData,
        payload: [...previousData.payload].filter(
          (item: any) => item._id !== variables._id
        ),
      };
    };

    const { mutate, isPending } = useMutationData(
      ["CodeBlockAction.delete"],
      async (payload: any) => {
        const response = await axios.delete(`${source}/${payload._id}`);
        return response;
      },
      ["ProjectAction.getCodeBlocks"],
      OptimisticFn
    );

    return { mutate, isPending };
  },

  useNameChange: () => {
    const { mutate } = useMutationData(
      ["CodeBlockAction.nameChange"],
      async (payload: any) => {
        const response = await axios.post(
          `${source}/${payload._id}/name`,
          payload
        );
        return response;
      },
      ["ProjectAction.getCodeBlocks"]
    );
    return { mutate };
  },
};

export default TabBlockAction;
