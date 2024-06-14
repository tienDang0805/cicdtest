import Axios from "axios";
import { getTokenLocal, setTokenLocal } from "../utils/Common";

const HttpService = Axios.create({
  baseURL: "http://localhost:8080/api", //trang BE mac dinh
  timeout: 30000,
  withCredentials: false,
  // headers: {
  //   Authorization: "Bearer " + getTokenLocal(),
  // },
});

export const SetToken = (token) => {
  HttpService.defaults.headers.common["Authorization"] = "Bearer " + token;
  setTokenLocal(token);
};
export default HttpService;
