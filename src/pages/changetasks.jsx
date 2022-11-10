import React from "react";
import { Link } from "react-router-dom";
import { HeaderFull } from "../core/headerFull/headerFull";
import { HeaderLine } from "../core/headerLine/headerLine";
import { FormChange } from "../components/formChangeTasks/formChangeTasks";

function ChangeTasks() {
  return (
    <>
      <HeaderFull src="./img/star.png" to="/diploma/apps" />
      <HeaderLine />
      <section id="change_tasks">
        <h1>Change Tasks</h1>
        <FormChange />
      </section>
    </>
  );
}

export { ChangeTasks };
