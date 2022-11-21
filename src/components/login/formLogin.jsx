import React from "react";
import "./formLogin.scss";
import { useLocation, useNavigate } from "react-router-dom";
import { useAuth } from "../../hooks/useAuth";
import { Input } from "../../core/input/input";
import { Button } from "../../core/button/button";

function FormLogin(props) {
  const navigate = useNavigate();
  const location = useLocation();
  const { signin } = useAuth();

  const fromPage = location.state?.from?.pathname || "/diploma";

  const handleSubmit = (event) => {
    event.preventDefault();
    const form = event.target;
    const user = form.email.value;

    signin(user, () => navigate(fromPage, { replace: true }));
    console.log(form.email.value);
  };

  return (
    <form id={props.id} onSubmit={handleSubmit}>
      <Input
        labelName="Email"
        name="email"
        className="email"
        type="email"
        placeholder="Enter your email"
      />
      <Input
        labelName="Password"
        name="password"
        className="password"
        type="password"
        placeholder="Enter your password"
      />
      <Button
        id="button"
        to="/diploma/apps"
        className="btn loginBtn"
        name="Submit"
      />
    </form>
  );
}

export { FormLogin };
