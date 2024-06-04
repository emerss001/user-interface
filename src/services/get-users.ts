import api from "./api";
import { useState, useEffect } from "react";

export const getUsers = () => {
  interface User {
    id: string;
    name: string;
    email: string;
    age: number;
  }
  const [users, setUsers] = useState<User[]>([]);

  useEffect(() => {
    const getUsers = async () => {
      try {
        const response = await api.get("/users");
        const usersData: User[] = response.data.users;
        setUsers(usersData);
      } catch (error) {
        throw new Error("Error when getting users");
      }
    };

    getUsers();
  }, []);

  return users;
};
