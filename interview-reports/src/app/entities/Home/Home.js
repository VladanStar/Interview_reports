import React, { useState, useEffect } from "react";
import getCandidates from "../../../services/getCandidates";
import {Link} from "react-router-dom"
import "./Home.css";




const Home = () => {
  const token = sessionStorage.getItem("token");
  const img =
"https://cdn.pixabay.com/photo/2014/04/03/10/32/businessman-310819_960_720.png";
  const [candidates, setCandidates] = useState([]);
  const onGetCandidates = () => {
    const get = async () => {
      const onGetCandidates = await getCandidates(token);
      setCandidates(onGetCandidates);
    };
    get();
  };
  useEffect(onGetCandidates, [token]);

  return (
    <main className="container">
      {candidates.map((candidate, index) => {
        return (
          <Link to={`/candidate/${candidate.id}`} key={index} >
          <div className="row card2 cardsize" >
            <div className="col s10 m10">
              <div className="card">
                <div className="card-image imageavatar ">
                  <img src={img} alt="No img"></img>
                </div>
                <span className="card-title name">{candidate.name}</span>
                <span className="card-email email">{candidate.email}</span>
                <div className="card-content"></div>
              </div>
            </div>
          </div>
          </Link>
        );
      })}
    </main>
  );
};

export default Home;