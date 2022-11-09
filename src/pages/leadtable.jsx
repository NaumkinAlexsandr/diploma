import React from "react";
import { Link } from "react-router-dom";
import { HeaderFull } from "../core/headerFull/headerFull";
import { HeaderLine } from "../core/headerLine/headerLine";

function LeadTable() {
  return (
    <div id="lead_table">
      <HeaderFull src="./img/star.png" to="/diploma/apps" />
      <HeaderLine />
    </div>
  );
}

export { LeadTable };
