import axios from "axios";

axios.defaults.withCredentials = true; // Global axios config to enable cookies
const source = process.env.NEXT_PUBLIC_BASE_URL;

class ProjectAction {
  static async getOne() {
    const response = await axios.get(`${source}/project`);
    return response.data;
  }

  static async add() {
    const response = await axios.post(`${source}/project`);
    return response.data;
  }

  static async delete() {
    const response = await axios.delete(`${source}/project`);
    return response.data;
  }

  static async update() {
    const response = await axios.put(`${source}/project`);
    return response.data;
  }

  static async updatename() {
    const response = await axios.put(`${source}/project`);
    return response.data;
  }
}

export default ProjectAction;
