import React from "react";
import { TableHead } from "./tableHead";
import { TableBody } from "./tableBody";
import "./formTasks.scss";

function FormTasks(props) {
  return (
    <table className="task_table">
      <TableHead />
      <TableBody />
    </table>
  );
}

export { FormTasks };