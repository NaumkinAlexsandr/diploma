import React from "react";
import { Link } from "react-router-dom";
import { HeaderFull } from "../core/headerFull/headerFull";
import { HeaderLine } from "../core/headerLine/headerLine";
import { FormAnalizer } from "../components/formAnalizer/formAnalizer";

function Analizer() {
  return (
    <div id="analizer">
      <HeaderFull src="./img/square.png" to="/diploma/apps" />
      <HeaderLine />
      <h1>Analizer</h1>
      <h3>Task Failure Rate</h3>
      <FormAnalizer />
    </div>
  );
}

export { Analizer };
