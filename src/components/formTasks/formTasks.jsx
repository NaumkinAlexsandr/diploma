import React from "react";
import { TableHead } from "./TableHead";
import { TableBody } from "./TableBody";
import "./formTasks.scss";

function FormTasks() {
  return (
    <div className="scrol">
      <table className="taskTable">
        <TableHead />
        <TableBody />
      </table>
    </div>
  );
}

export { FormTasks };
