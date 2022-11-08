import React from "react";
import { Link } from "react-router-dom";
import './_header.scss';

class HeaderBig extends React.Component {
  render() {
    return (
      <header className="header">
        <div className="container">
          <div className="header-menu">
            <div className="burger-icon">
              <Link to="/graduate_work_js/appsPage"><img src="./img/burger.png" alt="burger" /></Link>
            </div>
            <div className="header-menu__image">
              <img src={this.props.src} alt="header_img" />
            </div>
          </div>
        </div>
      </header>
    );
  }
}

export default HeaderBig;
