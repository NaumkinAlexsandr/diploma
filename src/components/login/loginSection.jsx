import React from "react";
import "./loginSection.scss";
import { FormLogin } from "./formLogin";
import { Button } from "../../core/button/button";
import { Link } from "react-router-dom";

function LoginSection() {
  return (
    <section id="login_section">
      <img className="triangle" src="./img/triangleBlack.png" alt="triangle" />
      <FormLogin id="login_form" />
      <Button to="/diploma/apps" className="login_btn" name="Submit" />
    </section>
  );
}

export { LoginSection };
