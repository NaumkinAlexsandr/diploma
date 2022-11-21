import React from "react";
import { Link } from "react-router-dom";
import { HeaderFull } from "../core/headerFull/HeaderFull";
import { HeaderLine } from "../core/headerLine/HeaderLine";
import { FormChange } from "../components/formChangeTasks/FormChangeTasks";

function ChangeTasks() {
  return (
    <>
      <HeaderFull src="./img/star.png" to="/diploma/leadTable" />
      <HeaderLine />
      <section id="change_tasks">
        <h1>Change Tasks</h1>
        <FormChange />
      </section>
    </>
  );
}

export { ChangeTasks };
