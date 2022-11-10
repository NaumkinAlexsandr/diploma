import React from "react";

function Deleted(props) {
  return (
    <td>
      <span class="deleted">{props.text}</span>
    </td>
  );
}

export { Deleted };
