import { Fragment, useState } from "react";
import Footer  from "./app/components/footer/Footer";
import Header from "./app/components/header/Header";
import Home from "./app/entities/Home/Home";
import Login  from "./app/entities/Login/Login";
import getToken  from "./services/Login";
import Candidate from "../app/entities/Candidate/Candidate";
import { BrowserRouter, Route, Switch } from "react-router-dom";


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
          <Route path={"/candidate/:id"} component={Candidate} />
        </Switch>

        <Footer />
      </Fragment>
    </BrowserRouter>
  );
};

export default App;
