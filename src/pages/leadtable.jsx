import React from "react";
import { Link } from "react-router-dom";
import { HeaderFull } from "../core/headerFull/HeaderFull";
import { HeaderLine } from "../core/headerLine/HeaderLine";
import { TitleLeadTable } from "../components/formLeadTable/TitleLeadTable";
import { FormLeadTable } from "../components/formLeadTable/FormLeadTable";

function LeadTable() {
  return (
    <>
      <HeaderFull src="./img/star.png" to="/diploma/apps" />
      <HeaderLine />
      <section id="lead_table">
        <TitleLeadTable />
        <FormLeadTable />
      </section>
    </>
  );
}

export { LeadTable };
