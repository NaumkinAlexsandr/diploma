import React from "react";
import "./loginSection.scss";
import { FormLogin } from "./formLogin";

import { Link } from "react-router-dom";

function LoginSection() {
  return (
    <section id="login_section">
      <img className="triangle" src="./img/triangleBlack.png" alt="triangle" />
      <FormLogin id="login_form" />
    </section>
  );
}

export { LoginSection };
