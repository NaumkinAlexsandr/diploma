import React from "react";

function Task(props) {
  return <div className={props.className}>{props.text}</div>;
}

export { Task };
