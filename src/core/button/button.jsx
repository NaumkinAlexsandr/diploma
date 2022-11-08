import React from "react";
import { Link } from "react-router-dom";
import "./button.scss";

function Button(props) {
  return (
    <>
      <button className={props.className}>{props.name}</button>
      <Link className={props.className} to={props.to}></Link>
    </>
  );
}

export { Button };
