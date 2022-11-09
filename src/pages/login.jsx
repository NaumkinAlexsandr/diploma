import { HeaderEmpty } from "../core/headerEmpty/headerEmpty";
import { HeaderLine } from "../core/headerLine/headerLine";
import { LoginSection } from "../components/login/loginSection";
import { Link } from "react-router-dom";
import React from "react";

function Login() {
  return (
    <div id="login">
      <HeaderEmpty />
      <HeaderLine />
      <LoginSection />
    </div>
  );
}
export { Login };
