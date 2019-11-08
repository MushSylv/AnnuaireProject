import axios from "axios";

const getAxios = () =>
  axios.create({ baseURL: "https://localhost:12345/api" });

export default getAxios