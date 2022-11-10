import React from "react";

function Completed(props) {
  return (
    <td>
      <span className="completed">{props.text}</span>
    </td>
  );
}

export { Completed };
