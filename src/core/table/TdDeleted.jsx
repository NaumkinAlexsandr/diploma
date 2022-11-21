import React from "react";

function Deleted(props) {
  return (
    <td>
      <button className="deleted">{props.text}</button>
    </td>
  );
}

export { Deleted };
