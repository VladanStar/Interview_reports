export const getToken = async (email, password) => {
    const response = await fetch("http://localhost:3333/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        email: email,
        password: password, 
      }),
    });
    const data = await response.json();
    return data;
  };

  export const getCandidates = async (token) => {
    const response = await fetch("http://localhost:3333/660/api/candidates", {
        headers: {
            "Content-Type": "application/json",
            Accept: "application/json",
            Authorization: `Bearer ${token}`,
        },
    });
    const getCandidates = await response.json();
    console.log(getCandidates);
    return getCandidates;
}