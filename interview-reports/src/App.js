import { Fragment, useState } from "react";
import Footer  from "./app/components/footer/Footer";
import Header from "./app/components/header/Header";
import Home from "./app/entities/Home/Home";
import Login  from "./app/entities/Login/Login";
import getToken  from "./services/Login";
import Candidate from "../src/app/entities/Candidate/Candidate";
import { Route, Switch ,useHistory} from "react-router-dom";


const App = () => {
  let history = useHistory();
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
      const data = await getToken(email, password);
      sessionStorage.setItem("token", data.accessToken);
      setToken(data.accessToken);
      history.push("/");

    };
    token();
    setEmail("");
    setPassword("");
    e.preventDefault(); 
  };
  
  const logOut = () => {
    sessionStorage.removeItem("token");
    history.push('/login')
  };

  if (!token || token === "undefined") {
    history.push('/login');
  } 



  return (
      <Fragment>
         <Header logOut={logOut}/>
        <Switch>
          <Route exact path={"/"} component={Home} />
          <Route path={"/candidate/:id"} component={Candidate} />
          <Route exact path="/login">
            <Login
              submit={submit}
              email={email}
              password={password}
              onChangeEmail={onChangeEmail}
              onChangePassword={onChangePassword}
            />
          </Route>
        </Switch>

        <Footer />
      </Fragment>
  );
};

export default App;