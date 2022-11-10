import React from "react";
import { TableHead } from "./tableHead";
import { TableBody } from "./tableBody";
import "./formLeadTable.scss";

function FormLeadTable(props) {
  return (
    <div className="scrol">
      <table className="lead_table">
        <TableHead />
        <TableBody />
      </table>
    </div>
  );
}

export { FormLeadTable };
