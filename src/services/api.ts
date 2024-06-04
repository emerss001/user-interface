import axios from "axios";

const api = axios.create({
  baseURL: "https://api-users-mc4v.onrender.com",
});

export default api;
