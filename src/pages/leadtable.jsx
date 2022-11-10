import React from "react";
import { Link } from "react-router-dom";
import { HeaderFull } from "../core/headerFull/headerFull";
import { HeaderLine } from "../core/headerLine/headerLine";
import { TitleLeadTable } from "../components/formLeadTable/titleLeadTable";
import { FormLeadTable } from "../components/formLeadTable/formLeadTable";

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
