import React from 'react';
import "./Home.css"

const Home = () => {

    const img =
    "https://cdn.pixabay.com/photo/2014/04/03/10/32/businessman-310819_960_720.png";
  const dummyCandidates = [
    { name: "man", email: "man@gmail.com" },
    { name: "boss", email: "boss@gmail.com" },
    { name: "chief", email: "chief@gmail.com" },
    { name: "worker", email: "worker@gmail.com" },
    { name: "cooffeeworker", email: "cooffee@gmail.com" },
    { name: "economist", email: "ecc@gmail.com" },
  ];
  return (
    <main className="container">
      {dummyCandidates.map((candidate) => {
        return (
          <div className="row card2 cardsize">
            <div className="col s10 m10">
              <div className="card">
                <div className="card-image imageavatar ">
                  <img src={img} alt="No img"></img>
                </div>

    return(

           <main>
             <h1>Welcome</h1>


        </main>
    )
                <span className="card-title name">{candidate.name}</span>
                <span className="card-email email">{candidate.email}</span>
                <div className="card-content"></div>
              </div>
            </div>
          </div>
        );
      })}
    </main>
  );
};

export default Home; 