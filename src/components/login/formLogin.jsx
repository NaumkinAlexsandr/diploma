import React from "react";
import "./formLogin.scss";
import { Input } from "../../core/input/input";
import { Button } from "../../core/button/button";

function FormLogin(props) {
  return (
    <form id={props.id}>
      <Input
        name="Email"
        className="email"
        type="text"
        placeholder="Enter your email"
      />
      <Input
        name="Password"
        className="password"
        type="password"
        placeholder="Enter your password"
      />
      <Button to="/diploma/apps" className="login_btn" name="Submit" />
    </form>
  );
}

export { FormLogin };
