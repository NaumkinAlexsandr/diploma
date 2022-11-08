import React from "react";
import LoginForm from "../loginForm/loginForm";
import './_sectionLogin.scss';

class SectionLogin extends React.Component {
  render() {
      return  (
        <section className="section-login">
        <div className="container">
          <div className="section-login__image">
            <img src="./img/polugon1.svg" alt="polygon" />
          </div>
          <LoginForm />
        </div>
      </section>
      );
  }
}

export default SectionLogin;



