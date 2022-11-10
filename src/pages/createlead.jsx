import React from "react";
import { Link } from "react-router-dom";
import { HeaderFull } from "../core/headerFull/headerFull";
import { HeaderLine } from "../core/headerLine/headerLine";
import { FormCreateLead } from "../components/formCreateLead/formCreateLead";

function CreateLead() {
  return (
    <>
      <HeaderFull src="./img/star.png" to="/diploma/apps" />
      <HeaderLine />
      <section id="createLead">
        <h1>Create lead</h1>
        <FormCreateLead />
      </section>
    </>
  );
}

export { CreateLead };
