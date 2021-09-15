import React from "react";
import "./Login"

const Login = ({ submit, email, password, onChangeEmail, onChangePassword }) => {

   return (
    <main>
      <form>
        <input
          type="text"
          placeholder="email"
          value={email}
          onChange={onChangeEmail}
        />
        <input
          type="password"
          placeholder="password"
          value={password}
          onChange={onChangePassword}
        />
        <button>Back to</button>
        <button onClick={submit}>Submit</button>
      </form>
    </main>
  )
};
export default Login;
