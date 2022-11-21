import React from "react";
import { TableHead } from "./TableHead";
import { TableBody } from "./TableBody";
import "./formTasks.scss";

function FormTasks() {
  return (
    <table className="taskTable">
      <TableHead />
      <TableBody />
    </table>
  );
}

export { FormTasks };
