import { useMutationData } from "@/hooks/useMutation";
import { useQueryData } from "@/hooks/useQueryData";
import axios from "axios";

axios.defaults.withCredentials = true; // Global axios config to enable cookies
const codeBlock = (process.env.NEXT_PUBLIC_BASE_URL as string) + "/codeblock";
const project = (process.env.NEXT_PUBLIC_BASE_URL as string) + "/project";
const component = (process.env.NEXT_PUBLIC_BASE_URL as string) + "/component";

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
      ["ProjectAction.getOneCodeBlock"],
      async () => {
        const response = await axios.get(`${codeBlock}/${id}`);
        return response.data;
      }
    );
    return { isLoading, data };
  },
  getCodeBlocks: () => {
    const { isLoading, data } = useQueryData(
      ["ProjectAction.getCodeBlocks"],
      async () => {
        const response = await axios.get(`${codeBlock}`);
        return response.data;
      }
    );
    return { isLoading, data };
  },
  getComponents: () => {
    const { isLoading, data } = useQueryData(
      ["ProjectAction.getComponents"],
      async () => {
        const response = await axios.get(`${component}`);
        return response.data;
      }
    );
    return { isLoading, data };
  },
  getOneComponent: (id: string) => {
    const { isLoading, data } = useQueryData(
      ["ProjectAction.getOneComponent"],
      async () => {
        const response = await axios.get(`${component}/${id}`);
        return response.data;
      }
    );
    return { isLoading, data };
  },
  useNameChange: () => {
    const { mutate } = useMutationData(
      ["ProjectAction.nameChange"],
      async (payload: any) => {
        const response = await axios.post(`${project}/name`, payload);
        return response;
      },
      ["ProjectAction.getProject"],
      (previousData: any, variables: any) => {
        return { ...previousData, variables };
      }
    );
    return { mutate };
  },
};
export default ProjectAction;
