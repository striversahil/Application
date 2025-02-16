import axios from "axios";

axios.defaults.withCredentials = true; // Global axios config to enable cookies
const source = process.env.NEXT_PUBLIC_BASE_URL;

class CodeBlockAction {
  constructor() {}
  static async new(payload: any) {
    console.log(payload);
    const response = await axios.post(`${source}/codeblock`, payload);
    return response.data;
  }

  static async getOne(id: string) {
    const response = await axios.get(`${source}/codeblock/${id}`);
    return response.data;
  }

  static async delete(payload: any) {
    const response = await axios.delete(`${source}/codeblock/${payload._id}`);
    return response.data;
  }
}

export default CodeBlockAction;
