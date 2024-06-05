import axios from "axios";

// type UsersFilterSchema = {
//   username?: string | undefined;
//   age?: string | undefined;
// };

// export const filterUsers = (filter: UsersFilterSchema) => {
//   let response = {};

//   if (filter.username || filter.age) {
//     response = filter;
//   }

//   return response;
// };

const api = axios.create({
  baseURL: "https://api-users-mc4v.onrender.com",
});

export default api;
