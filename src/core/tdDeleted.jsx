import React from "react";

function Deleted(props) {
  return (
    <td>
      <span className="deleted">{props.text}</span>
    </td>
  );
}

export { Deleted };
