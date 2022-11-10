import React from "react";
import { Link } from "react-router-dom";
import { AddColumn } from "../../core/addColumn/addColumn";

import "./titleLeadTable.scss";

function TitleLeadTable() {
  return (
    <div className="title">
      <h1>Lead Table</h1>
      <AddColumn to="/diploma/createlead" />
    </div>
  );
}

export { TitleLeadTable };
