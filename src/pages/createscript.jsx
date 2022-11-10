import React from "react";
import { Link } from "react-router-dom";
import { HeaderFull } from "../core/headerFull/headerFull";
import { HeaderLine } from "../core/headerLine/headerLine";
import { FormCreateScript } from "../components/formCreateScript/formCreateScript";

function CreateScript() {
  return (
    <>
      <HeaderFull src="./img/ellipse.png" to="/diploma/apps" />
      <HeaderLine />
      <section id="script">
        <h1>Create Script</h1>
        <FormCreateScript />
      </section>
    </>
  );
}

export { CreateScript };
