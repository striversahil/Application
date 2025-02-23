import { useMutationData } from "@/hooks/useMutation";
import { useQueryData } from "@/hooks/useQueryData";
import axios from "axios";
import { toast } from "sonner";

axios.defaults.withCredentials = true; // Global axios config to enable cookies
const source = (process.env.NEXT_PUBLIC_BASE_URL as string) + "/component";

const ComponentAction = {
  getOne: (id: string) => {
    const { isLoading, data } = useQueryData(
      ["ComponentAction.getOne"],
      async () => {
        const response = await axios.get(`${source}/${id}`);
        return response.data;
      }
    );
    return { isLoading, data };
  },
  add: () => {
    const { mutate } = useMutationData(
      ["ComponentAction.add"],
      async (payload: any) => {
        const response = await axios.post(`${source}/new`, payload);
        return response.data;
      },
      ["ComponentAction.getall"]
    );
    return { mutate };
  },
};

export default ComponentAction;
