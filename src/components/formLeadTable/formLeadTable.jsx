import React from "react";
import { TableHead } from "./TableHead";
import { TableBody } from "./TableBody";
import "./formLeadTable.scss";

function FormLeadTable() {
  return (
    <div className="scrol">
      <table className="leadTable">
        <TableHead />
        <TableBody />
      </table>
    </div>
  );
}

export { FormLeadTable };
