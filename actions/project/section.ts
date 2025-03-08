import { useMutationData } from "@/hooks/useMutation";
import { useQueryData } from "@/hooks/useQueryData";
import axios from "axios";

axios.defaults.withCredentials = true; // Global axios config to enable cookies
const source = (process.env.NEXT_PUBLIC_BASE_URL as string) + "/section";

const SectionAction = {
  create: () => {
    const { mutate } = useMutationData(
      ["SectionAction.add"],
      async (payload: any) => {
        const response = await axios.post(`${source}`, payload);
        return response.data;
      },
      [["ProjectAction.getSections"]]
    );
    return { mutate };
  },
  delete: () => {
    const { mutate } = useMutationData(
      ["SectionAction.delete"],
      async (payload: any) => {
        const response = await axios.post(`${source}/delete`, payload);
        return response.data;
      },
      [["ProjectAction.getSections"]]
    );
    return { mutate };
  },
};

export default SectionAction;
