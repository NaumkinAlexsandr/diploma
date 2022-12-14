import React from "react";
import "./formLogin.scss";
import { useLocation, useNavigate } from "react-router-dom";
import { useAuth } from "../../hooks/useAuth";
import { Input } from "../../core/input/inputLogin";
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
      <label>
        Email
        <Input
          name="email"
          className="email"
          type="email"
          placeholder="Enter your email"
        />
      </label>
      <label>
        Password
        <Input
          name="password"
          className="password"
          type="password"
          placeholder="Enter your password"
        />
      </label>
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
