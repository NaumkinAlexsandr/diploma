import React from "react";
import "./input.scss";

function InputBudget({
  name,
  className,
  type,
  placeholder,
  budget,
  handleInput,
}) {
  return (
    <label>
      Budget
      <input
        name={name}
        className={className}
        type={type}
        placeholder={placeholder}
        value={budget}
        onChange={(e) => {
          handleInput(e.target.value);
        }}
      />
    </label>
  );
}

export { InputBudget };
