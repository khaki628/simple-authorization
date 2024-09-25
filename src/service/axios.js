import axios from "axios";

const AppAxios = axios.create({
  baseURL: "http://45.139.10.149:1001/api",
});

export default AppAxios;
