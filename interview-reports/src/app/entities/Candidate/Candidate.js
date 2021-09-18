import React, { Fragment, useEffect, useState } from "react";
import { useHistory } from "react-router-dom";
import getCandidates from "../../../services/getCandidates";
import getReports from "../../../services/getReport";
import SingleCandidate from "../CandidateReportsUI/SingleCandidate";
import Loader from "../../components/Loader/Loader";
import "./Candidate.css";


const Candidate = ({ match }) => {
  const id = parseInt(match.params.id);
  let history = useHistory()
  const token = sessionStorage.getItem("token");
  const [candidate, setCandidate] = useState({});
  const [reports, setReports] = useState([]);
  const [loading, setLoading] = useState(true);
  const onGetCandidates = async () => {
    let candidates = await getCandidates(token);
    if (candidates === 'jwt expired') {
      history.push('/login')
    }
    candidates.forEach((item) => {
      if (item.id === id) {
        setCandidate(item);
        setLoading(false);
      }
    });
  };

  const onGetReports = async () => {
    let tempRepots = [];
    const allReports = await getReports(token);
    allReports.forEach((item) => {
      if (item.candidateId === id) {
        tempRepots.push(item);
      }
    });
    setReports(tempRepots);
    setLoading(false);
  };
  useEffect(() => {
    if (!candidate) {
      onGetCandidates();
    }
    onGetReports()
  }, []);
  return (
    <Fragment>
      {loading ? <Loader /> : <SingleCandidate candidate={candidate} reports={reports} />}
    </Fragment>
  );
};

export default Candidate;