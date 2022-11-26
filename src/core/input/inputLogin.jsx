import React from "react";
import "./input.scss";

function Input({
  name,
  className,
  type,
  placeholder,
  text,
  value,
  handleInput,
}) {
  return (
    <input
      name={name}
      className={className}
      type={type}
      placeholder={placeholder}
      text={text}
      value={value}
    />
  );
}

export { Input };
