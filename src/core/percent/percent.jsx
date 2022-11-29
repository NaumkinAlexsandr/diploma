import React from "react";
import "./percent.scss";

function Percent({ className, percent, text }) {
  return (
    <div className="percent_scale">
      <span className={className}></span>
      <span className="percent">
        <h5 value={percent}>{percent}%</h5>
      </span>
      <h5>{text}</h5>
    </div>
  );
}

export { Percent };
