import axios from "axios";

axios.defaults.withCredentials = true; // Global axios config to enable cookies
const source = (process.env.NEXT_PUBLIC_BASE_URL as string) + "/codeblock";

class CodeBlockAction {
  constructor() {}
  static async new(payload: any) {
    console.log(payload);
    const response = await axios.post(`${source}/`, payload);
    return response.data;
  }

  static async getOne(id: string) {
    const response = await axios.get(`${source}/${id}`);
    return response.data;
  }

  static async getall() {
    const response = await axios.get(`${source}`);
    return response.data;
  }

  static async delete(payload: any) {
    const response = await axios.delete(`${source}/${payload._id}`);
    return response.data;
  }

  static async nameChange(payload: any) {
    const response = await axios.post(`${source}/${payload._id}/name`, payload);
    return response.data;
  }

  static async addstep(payload: any) {
    const response = await axios.post(`${source}/step/new`, payload);
    return response.data;
  }

  static async deleteStep(payload: any) {
    const response = await axios.post(`${source}/step/delete`, payload);
    return response.data;
  }

  static async duplicateStep(payload: any) {
    const response = await axios.post(`${source}/step/duplicate`, payload);
    return response.data;
  }
}

export default CodeBlockAction;
