import React from "react";
import { Link } from "react-router-dom";
import { HeaderFull } from "../core/headerFull/headerFull";
import { HeaderLine } from "../core/headerLine/headerLine";
import { FormTasks } from "../components/formTasks/formTasks";

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
