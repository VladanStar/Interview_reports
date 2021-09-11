import { Fragment, useState } from "react";
import { getToken } from "./services/functions";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Header from "./app/components/header/Header";
import  Footer  from "./app/components/footer/Footer";
import Login  from "./app/components/main-page/login-form";
import Home from "./app/components/main-page/Home";
import CandidateReport from "../app/components/main-page/candidates";


const App = () => {
  const [token, setToken] = useState(sessionStorage.getItem("token"));
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const onChangeEmail = (e) => {
    setEmail(e.target.value);
  };
  const onChangePassword = (e) => {
    setPassword(e.target.value);
  };
  const submit = (e) => {
    const token = async () => {
      const info = await getToken(email, password);
      sessionStorage.setItem("token", info.accessToken);
      setToken(info.accessToken);
    };
    token();
    setEmail("");
    setPassword("");
    e.preventDefault();
  };

  if (!token || token === "undefined") {
    return (
      <Fragment>
        <Login
          submit={submit}
          email={email}
          password={password}
          onChangeEmail={onChangeEmail}
          onChangePassword={onChangePassword}
        />
      </Fragment>
    );
  }
  return (
    <BrowserRouter>
      <Fragment>
        <Header />
        <Switch>
          <Route exact path={"/"} component={Home} />
          <Route path={"/candidateReport"} component={CandidateReport} />
        </Switch>

        <Footer />
      </Fragment>
    </BrowserRouter>
  );
};

export default App;
