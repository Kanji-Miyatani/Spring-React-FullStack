import React, { useState, useEffect } from "react";
import axios from "axios";
import jwt from "jsonwebtoken";
import { useStorage } from "react-use";

const useLogin = () => {
  const [token, setToken] = useState(null);
  const [user, setUser] = useState<User | null>(null);

  const { getItem, setItem } = useStorage("my-storage");

  const handleSubmit = (e) => {
    e.preventDefault();

    axios
      .post("/api/login", {
        username,
        password,
      })
      .then((res) => {
        const { token } = res.data;
        setToken(token);
        setUser(jwt.decode(token) as User);
        setItem("token", token);
      })
      .catch((err) => {
        console.error(err);
      });
  };

  return { token, user, handleSubmit };
};

export default useLogin;