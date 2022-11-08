import { HeaderEmpty } from "../core/headerEmpty/headerEmpty";
import { HeaderLine } from "../core/headerLine/headerLine";
import { LoginSection } from "../components/login/loginSection";
import { Link } from "react-router-dom";
import React from "react";

class LoginPage extends React.Component {
  render() {
    return (
      <div id="login">
        <HeaderEmpty />
        <HeaderLine />
        <LoginSection />
      </div>
    );
  }
}
export default LoginPage;
