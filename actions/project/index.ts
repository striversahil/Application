import { useMutationData } from "@/hooks/useMutation";
import { useQueryData } from "@/hooks/useQueryData";
import axios from "axios";

axios.defaults.withCredentials = true; // Global axios config to enable cookies
const codeBlock = (process.env.NEXT_PUBLIC_BASE_URL as string) + "/codeblock";
const project = (process.env.NEXT_PUBLIC_BASE_URL as string) + "/project";

// Here the Index i.e. Most Used Common Get Actions will be Handled for Project

const ProjectAction = {
  getProject: () => {
    const { isLoading, data } = useQueryData(
      ["ProjectAction.getProject"],
      async () => {
        const response = await axios.get(`${project}`);
        return response.data;
      }
    );
    return { isLoading, data };
  },
  getOneCodeBlock: (id: string) => {
    const { isLoading, data } = useQueryData(
      ["CodeBlockAction.getOneCodeBlock"],
      async () => {
        const response = await axios.get(`${codeBlock}/${id}`);
        return response.data;
      }
    );
    return { isLoading, data };
  },
  getCodeBlock: () => {
    const { isLoading, data } = useQueryData(
      ["CodeBlockAction.getCodeBlock"],
      async () => {
        const response = await axios.get(`${codeBlock}`);
        return response.data;
      }
    );
    return { isLoading, data };
  },
  useNameChange: () => {
    const { mutate } = useMutationData(
      ["CodeBlockAction.nameChange"],
      async (payload: any) => {
        const response = await axios.post(`${project}/name`, payload);
        return response;
      },
      ["CodeBlockAction.getCodeBlock", "ProjectAction.getProject"],
      (previousData: any, variables: any) => {
        return { ...previousData, variables };
      }
    );
    return { mutate };
  },
};
export default ProjectAction;
