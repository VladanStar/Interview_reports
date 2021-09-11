import React, { useEffect, useState } from "react";

const Data = () => {
  const [token, setToken] = useState("");
  useEffect(() => {
    fetch("http://localhost:3333/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        email: "dev@dev.com",
        password: "developer",
      }),
    })
      .then((response) => response.json())
      .then((data) => setToken(data.accessToken));

    const get = async () => {
       const response = await fetch("http://localhost:3333/660/api/candidates", {
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
          Authorization: `Bearer ${token}`,
        },
      })
    };
    get()
  }, [token]);
  return <h1>data</h1>;
};

export default Data;