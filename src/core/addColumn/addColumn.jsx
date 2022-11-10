import React from "react";
import { Link } from "react-router-dom";
import "./addColumn.scss";

function AddColumn(props) {
  return (
    <div id="addColumn">
      <img src="./img/plus.png" />
      <Link to={props.to} />
    </div>
  );
}

export { AddColumn };
