import axios from "axios";

const instance = axios.create({
  baseURL: "https://services-cboi-uat.isupay.in",
});

export default instance;