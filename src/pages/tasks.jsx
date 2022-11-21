import React from "react";
import { Link } from "react-router-dom";
import { HeaderFull } from "../core/headerFull/HeaderFull";
import { HeaderLine } from "../core/headerLine/HeaderLine";
import { FormTasks } from "../components/formTasks/FormTasks";

function Tasks() {
  return (
    <>
      <HeaderFull src="./img/triangleYellow.png" to="/diploma/apps" />
      <HeaderLine />
      <section id="tasks">
        <h1>Tasks</h1>
        <FormTasks />
      </section>
    </>
  );
}

export { Tasks };
