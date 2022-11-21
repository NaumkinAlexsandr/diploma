import React from "react";
import { Link } from "react-router-dom";
import { HeaderFull } from "../core/headerFull/HeaderFull";
import { HeaderLine } from "../core/headerLine/HeaderLine";
import { FormAnalizer } from "../components/formAnalizer/FormAnalizer";

function Analizer() {
  return (
    <>
      <HeaderFull src="./img/square.png" to="/diploma/apps" />
      <HeaderLine />
      <section id="analizer">
        <h1>Analizer</h1>
        <h3>Task Failure Rate</h3>
        <FormAnalizer />
      </section>
    </>
  );
}

export { Analizer };
