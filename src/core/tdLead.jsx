import React from "react";
import { Link } from "react-router-dom";

function TdLead(props) {
  return (
    <td>
      {props.tdText}
      <Link to="../html/changeTasks.html"></Link>
    </td>
  );
}

export { TdLead };
