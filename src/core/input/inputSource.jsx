import React from "react";
import "./input.scss";

function InputSource({
  name,
  className,
  type,
  placeholder,
  source,
  handleInput,
}) {
  return (
    <label>
      Source
      <input
        name={name}
        className={className}
        type={type}
        placeholder={placeholder}
        value={source}
        onChange={(e) => {
          handleInput(e.target.value);
        }}
      />
    </label>
  );
}

export { InputSource };
