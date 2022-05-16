import axios from "axios";

const url = "http://localhost:8080";

export const getUsers = async () => {
  const response = await axios.get(url + "/api/users");
  return response.data;
}

export const postUser = async (id: string, password: string, name: string, isManager: boolean) => {
  const response = await axios.post(url + "/api/users", {"id": id, "password": password, "name": name, "isAdmin": isManager});
  return response.data;
}

export const putUser = async (id: number, currentPassword: string, newPassword: string) => {
  const response = await axios.put(url + "api/users/" + id, {"currentPassword": currentPassword, "newPassword": newPassword});
  return response.data;
}

export const deleteUser = async (id: number) => {
  const response = await axios.delete(url + "/api/users/" + id);
  return response.data;
}