import axios from "axios";

const url = "http://localhost:8080";

export const getWorks = async (id: number) => {
  const response = await axios.get(url + "/api/works/" + id);
  return response.data;
}

export const postWorks = async (id: number,workingTime: string, quittingTime: string, totalTime: string) => {
  const response = await axios.post(url + "/api/works/" + id, {"workingTime": workingTime, "quittingTime": quittingTime, "totalTime": totalTime});
  return response.data;
}

export const getStaffWorks = async (id: number) => {
  const response = await axios.get(url + "/api/works/" + id);
  return response.data;
}
