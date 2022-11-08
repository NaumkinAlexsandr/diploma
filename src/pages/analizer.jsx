import React from "react";
import { Link } from "react-router-dom";
import { HeaderFull } from "../core/headerFull/headerFull";
import { HeaderLine } from "../core/headerLine/headerLine";

class Analizer extends React.Component {
  render() {
    return (
      <div id="analizer">
        <HeaderFull src="./img/square.png" to="/diploma/apps" />
        <HeaderLine />
      </div>
    );
  }
}

export default Analizer;
