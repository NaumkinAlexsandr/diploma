import React from "react";
import { Link } from "react-router-dom";
import { HeaderFull } from "../core/headerFull/headerFull";
import { HeaderLine } from "../core/headerLine/headerLine";

class LeadTable extends React.Component {
  render() {
    return (
      <div id="lead_table">
        <HeaderFull src="./img/star.png" to="/diploma/apps" />
        <HeaderLine />
      </div>
    );
  }
}

export default LeadTable;
