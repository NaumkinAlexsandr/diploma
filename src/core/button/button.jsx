import React from "react";
import { Link } from "react-router-dom";
import "./button.scss";

function Button(props) {
  return (
    <>
      <button id="button" type="submit" className={props.className}>
        {props.name}
        <Link className={props.className} to={props.to}></Link>
      </button>
    </>
  );
}

export { Button };
