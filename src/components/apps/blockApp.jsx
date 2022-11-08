import React from "react";
import { Link } from "react-router-dom";

function BlockApp(props) {
  return (
    <div className={props.className}>
      <div>
        <img src={props.src} alt={props.alt} />
      </div>
      <div>
        <h4>{props.value}</h4>
      </div>
      <Link to={props.to}></Link>
    </div>
  );
}

export { BlockApp };
