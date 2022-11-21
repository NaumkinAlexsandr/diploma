import React from "react";
import "./loginSection.scss";
import { FormLogin } from "./FormLogin";

import { Link } from "react-router-dom";

function LoginSection() {
  return (
    <section id="loginSection">
      <img className="triangle" src="./img/triangleBlack.png" alt="triangle" />
      <FormLogin id="loginForm" />
    </section>
  );
}

export { LoginSection };
