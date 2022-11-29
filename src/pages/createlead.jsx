import React from "react";
import { HeaderFull } from "../core/headerFull/HeaderFull";
import { HeaderLine } from "../core/headerLine/HeaderLine";
import { FormCreateLead } from "../components/formCreateLead/FormCreateLead";

function CreateLead() {
  return (
    <>
      <HeaderFull src="./img/star.png" to="/diploma/leadTable" />
      <HeaderLine />
      <section id="createLead">
        <h1>Create lead</h1>
        <FormCreateLead />
      </section>
    </>
  );
}

export { CreateLead };
