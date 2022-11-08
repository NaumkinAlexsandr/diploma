import React from "react";
import "./input.scss";

function Input(props) {
  return (
    <label>
      {props.name}
      <input
        className={props.className}
        type={props.type}
        placeholder={props.placeholder}
      />
    </label>
  );
}

export { Input };
