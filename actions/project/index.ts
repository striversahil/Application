import { useQueryData } from "@/hooks/useQueryData";
import axios from "axios";

axios.defaults.withCredentials = true; // Global axios config to enable cookies
const codeBlock = (process.env.NEXT_PUBLIC_BASE_URL as string) + "/codeblock";

// Here the Index i.e. Most Used Common Get Actions will be Handled for Project

class ProjectAction {
  static getOneCodeBlock() {
    const { isLoading, data } = useQueryData(
      ["CodeBlockAction.getOneCodeBlock"],
      async () => {
        const response = await axios.get(`${codeBlock}/project`);
        return response.data;
      }
    );
    return { isLoading, data };
  }
  static getCodeBlock() {
    const { isLoading, data } = useQueryData(
      ["CodeBlockAction.getCodeBlock"],
      async () => {
        const response = await axios.get(`${codeBlock}/project`);
        return response.data;
      }
    );
    return { isLoading, data };
  }
}
export default ProjectAction;
