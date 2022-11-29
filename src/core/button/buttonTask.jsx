import React from "react";

function Task({ className, text }) {
  return (
    <button value={text} className={className}>
      {text}
    </button>
  );
}

export { Task };
