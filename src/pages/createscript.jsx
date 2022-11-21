import React from "react";
import { Link } from "react-router-dom";
import { HeaderFull } from "../core/headerFull/HeaderFull";
import { HeaderLine } from "../core/headerLine/HeaderLine";
import { FormCreateScript } from "../components/formCreateScript/FormCreateScript";
import { FormCreateScriptFormik } from "../components/formCreateScript/FormCreateScriptFormik";

function CreateScript() {
  return (
    <>
      <HeaderFull src="./img/ellipse.png" to="/diploma/discovery" />
      <HeaderLine />
      <section id="script">
        <h1>Create Script</h1>
        <FormCreateScript />
      </section>
    </>
  );
}

export { CreateScript };
