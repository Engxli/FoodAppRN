import axios from "axios";

const BASE_URL = "https://recipes-backend-rn-73819d2c0396.herokuapp.com";
const instance = axios.create({
  baseURL: BASE_URL + "/api",
});
export { BASE_URL };
export default instance;
