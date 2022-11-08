import React from "react";
import { Link } from "react-router-dom";
import { HeaderFull } from "../core/headerFull/headerFull";
import { HeaderLine } from "../core/headerLine/headerLine";

function Analizer(props) {
  return (
    <div id="analizer">
      <HeaderFull src="./img/square.png" to="/diploma/apps" />
      <HeaderLine />
    </div>
  );
}

export default Analizer;
