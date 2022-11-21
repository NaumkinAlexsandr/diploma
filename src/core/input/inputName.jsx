import React from "react";
import "./input.scss";

function InputName({ name, className, type, placeholder, names, handleInput }) {
  return (
    <label>
      Name
      <input
        name={name}
        className={className}
        type={type}
        placeholder={placeholder}
        value={names}
        onChange={(e) => {
          handleInput(e.target.value);
        }}
      />
    </label>
  );
}

export { InputName };
