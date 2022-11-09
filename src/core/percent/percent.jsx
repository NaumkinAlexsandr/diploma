import React from "react";
import "./percent.scss";

function Percent(props) {
  return (
    <div className="percent_scale">
      <span className="percent">
        <h5>{props.percent}%</h5>
      </span>
      <h5>{props.text}</h5>
    </div>
  );
}

export { Percent };
