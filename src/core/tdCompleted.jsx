import React from "react";

function Completed(props) {
  return (
    <td>
      <span class="completed">{props.text}</span>
    </td>
  );
}

export { Completed };
