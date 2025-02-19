import { useMutationData } from "@/hooks/useMutation";
import axios from "axios";

axios.defaults.withCredentials = true; // Global axios config to enable cookies
const source = (process.env.NEXT_PUBLIC_BASE_URL as string) + "/codeblock";

class TabBlockAction {
  static useAdd() {
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
      ["CodeBlockAction.getCodeBlock"],
      OptimisticFn
    );

    return { mutate };
  }

  static useDelete = () => {
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
      ["CodeBlockAction.getCodeBlock"],
      OptimisticFn
    );

    return { mutate, isPending };
  };
  // +++++++++++++++++++++++++++++++++++++++++++++ Steps API +++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

  static useNameChange() {
    const { mutate } = useMutationData(
      ["CodeBlockAction.nameChange"],
      async (payload: any) => {
        const response = await axios.post(
          `${source}/${payload._id}/name`,
          payload
        );
        return response;
      },
      ["CodeBlockAction.getCodeBlock"]
    );
    return { mutate };
  }
}

export default TabBlockAction;
