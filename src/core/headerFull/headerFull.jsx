import React from "react";
import { Link } from "react-router-dom";
import "./headerFull.scss";

function HeaderFull(props) {
  return (
    <div id="header">
      <div className="burger">
        <img src="./img/burger.png" alt="burger" />
        <Link to={props.to} />
      </div>
      <div className="icons">
        <img src={props.src} />
      </div>
    </div>
  );
}

export { HeaderFull };
