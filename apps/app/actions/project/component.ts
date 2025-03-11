import { useMutationData } from "@/hooks/useMutation";
import { useQueryData } from "@/hooks/useQueryData";
import axios from "axios";

axios.defaults.withCredentials = true; // Global axios config to enable cookies
const source = (process.env.NEXT_PUBLIC_BASE_URL as string) + "/component";

const ComponentAction = {
  add: (section_id: string) => {
    const { mutate } = useMutationData(
      ["ComponentAction.add"],
      async (payload: any) => {
        const response = await axios.post(`${source}`, payload);
        return response.data;
      },
      [[`ProjectAction.getComponents-${section_id}`]]
    );
    return { mutate };
  },
  coordinatesUpdate: (section_id: string) => {
    const { mutate } = useMutationData(
      ["ComponentAction.coordinatesUpdate"],
      async (payload: any) => {
        const response = await axios.post(`${source}/coordinates`, payload);
        return response.data;
      },
      [[`ProjectAction.getComponents-${section_id}`]]
    );
    return { mutate };
  },
  delete: () => {
    const { mutate } = useMutationData(
      ["ComponentAction.delete"],
      async (payload: any) => {
        const response = await axios.post(`${source}/delete`, payload);
        return response.data;
      },
      [["ProjectAction.getComponents"]]
    );
    return { mutate };
  },
  update: (section_id: string) => {
    const { mutate } = useMutationData(
      ["ComponentAction.update"],
      async (payload: any) => {
        const response = await axios.post(`${source}/update`, payload);
        return response.data;
      },
      [[`ProjectAction.getComponents-${section_id}`]]
    );
    return { mutate };
  },
};

export default ComponentAction;
