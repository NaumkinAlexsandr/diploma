import React from "react";
import { Link } from "react-router-dom";

import { HeaderEmpty } from "../core/headerEmpty/headerEmpty";
import { HeaderLine } from "../core/headerLine/headerLine";
import { LoginSection } from "../components/login/loginSection";

function Login() {
  return (
    <div id="login">
      <HeaderEmpty />
      <HeaderLine />
      <LoginSection />
      <Link to="/diploma/apps"></Link>
      <a href="/diploma/apps"></a>
    </div>
  );
}

export default Login;
