import React from "react";
import { Link } from "react-router-dom";
import { HeaderFull } from "../core/headerFull/headerFull";
import { HeaderLine } from "../core/headerLine/headerLine";

class Tasks extends React.Component {
  render() {
    return (
      <div id="tasks">
        <HeaderFull src="./img/triangleYellow.png" to="/diploma/apps" />
        <HeaderLine />
      </div>
    );
  }
}

export default Tasks;