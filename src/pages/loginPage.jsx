import SectionLogin from "../components/sectionLogin/sectionLogin";
import { Link } from "react-router-dom";
import Header from "../components/header/header";
import React from "react";

class LoginPage extends React.Component {
  render() {
    return (
        <div>
          <Header />
          <SectionLogin />
          <div className="container"><Link to="/graduate_work_js/appsPage">AppsPage</Link></div> 
        </div>
    );
  }
}
export default LoginPage;