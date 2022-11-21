import { HeaderEmpty } from "../core/headerEmpty/HeaderEmpty";
import { HeaderLine } from "../core/headerLine/HeaderLine";
import { LoginSection } from "../components/login/LoginSection";
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
