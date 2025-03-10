import { useMutationData } from "@/hooks/useMutation";
import { useQueryData } from "@/hooks/useQueryData";
import axios from "axios";

axios.defaults.withCredentials = true; // Global axios config to enable cookies
const codeBlock = (process.env.NEXT_PUBLIC_BASE_URL as string) + "/codeblock";
const project = (process.env.NEXT_PUBLIC_BASE_URL as string) + "/project";
const component = (process.env.NEXT_PUBLIC_BASE_URL as string) + "/component";
const stepsBlock = (process.env.NEXT_PUBLIC_BASE_URL as string) + "/stepblock";
const section = (process.env.NEXT_PUBLIC_BASE_URL as string) + "/section";

// Here the Index i.e. Most Used Common Get Actions will be Handled for Project

const ProjectAction = {
  getProject: () => {
    return useQueryData(["ProjectAction.getProject"], async () => {
      const response = await axios.get(`${project}`);
      return response.data;
    });
  },
  // ++++++++++++++++++++++++++++++++++++++++++++++++++++++ CodeBlock Actions ++++++++++++++++++++++++++++++++++++++++++++++++++++++
  getCodeBlock: (id: string) => {
    return useQueryData(
      [`ProjectAction.getOneCodeBlock-${id}` as string],
      async () => {
        const response = await axios.get(`${codeBlock}/${id}`);
        return response.data;
      }
    );
  },
  getCodeBlocks: () => {
    return useQueryData(["ProjectAction.getCodeBlocks"], async () => {
      const response = await axios.get(`${codeBlock}`);
      return response.data;
    });
  },
  getStep: (id: string) => {
    return useQueryData(
      [`ProjectAction.getOneStep-${id}` as string],
      async () => {
        const response = await axios.get(`${stepsBlock}/${id}`);
        return response.data;
      }
    );
  },
  getAllSteps: (id: string) => {
    return useQueryData(
      [`ProjectAction.getAllSteps-${id}` as string],
      async () => {
        const response = await axios.get(`${stepsBlock}/getAll/${id}`);
        return response.data;
      }
    );
  },

  // +++++++++++++++++++++++++++++++++++++++++++++++++++++ Component Actions +++++++++++++++++++++++++++++++++++++++++++++++++++++++
  getSection: (id: string) => {
    return useQueryData(
      [`ProjectAction.getOneSection-${id}` as string],
      async () => {
        const response = await axios.get(`${section}/${id}`);
        return response.data;
      }
    );
  },

  getSections: () => {
    return useQueryData(["ProjectAction.getSections"], async () => {
      const response = await axios.get(`${section}`);
      return response.data;
    });
  },

  getComponent: (id: string) => {
    return useQueryData([`ProjectAction.getComponent-${id}`], async () => {
      const response = await axios.get(`${component}/${id}`);
      return response.data;
    });
  },
  getComponents: (id: string) => {
    return useQueryData([`ProjectAction.getComponents-${id}`], async () => {
      const response = await axios.get(`${component}/getAll/${id}`);
      return response.data;
    });
  },

  // ++++++++++++++++++++++++++++++++++++++++++++++++++++ Project Specific Actions +++++++++++++++++++++++++++++++++++++++++++++++++++++++
  useNameChange: () => {
    return useMutationData(
      ["ProjectAction.nameChange"],
      async (payload: any) => {
        const response = await axios.post(`${project}/name`, payload);
        return response;
      },
      [["ProjectAction.getProject"]],
      (previousData: any, variables: any) => {
        return { ...previousData, variables };
      }
    );
  },
};
export default ProjectAction;
