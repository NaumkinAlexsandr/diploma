import React from "react";
import "./button.scss";

function Button(props) {
  return (
    <form action={props.action}>
      <button className={props.className}>{props.name}</button>
    </form>
  );
}

export { Button };
