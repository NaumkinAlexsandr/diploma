import React from "react";
import { Link } from "react-router-dom";
import { HeaderFull } from "../core/headerFull/headerFull";
import { HeaderLine } from "../core/headerLine/headerLine";

function Discovery(props) {
  return (
    <div id="discovery">
      <HeaderFull src="./img/ellipse.png" to="/diploma/apps" />
      <HeaderLine />
    </div>
  );
}

export default Discovery;
