import React from "react";
import "./formLogin.scss";
import { FormLogin } from "./formLogin";
import { Button } from "../../core/button/button";

function LoginSection() {
  return (
    <section id="login_section">
      <img className="triangle" src="./img/triangleBlack.png" alt="triangle" />
      <FormLogin id="login_form" />
      <Button action="/diploma/apps" className="login_btn" name="Submit" />
    </section>
  );
}

export { LoginSection };
