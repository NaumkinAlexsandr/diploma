import React from "react";
import "./input.scss";

function InputNextTask({
  name,
  className,
  type,
  placeholder,
  nextTask,
  handleInput,
}) {
  return (
    <label>
      Next task
      <input
        name={name}
        className={className}
        type={type}
        placeholder={placeholder}
        value={nextTask}
        onChange={(e) => {
          handleInput(e.target.value);
        }}
      />
    </label>
  );
}

export { InputNextTask };
