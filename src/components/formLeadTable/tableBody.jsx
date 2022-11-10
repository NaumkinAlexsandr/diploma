import React from "react";
import { Td } from "../../core/td";
import { TdLead } from "../../core/tdLead";

function TableBody() {
  return (
    <thead>
      <tr>
        <Td tdText="Simple Way"></Td>
        <Td tdText="Upwork"></Td>
        <Td tdText="up to 20k"></Td>
        <TdLead tdText="Bid" to="/diploma/changetasks"></TdLead>
        <Td tdText="drive.google.com"></Td>
      </tr>
      <tr>
        <Td tdText="Gregor Toy"></Td>
        <Td tdText="Telegram"></Td>
        <Td tdText="21-30k"></Td>
        <TdLead tdText="Service call" to="/diploma/changetasks"></TdLead>
        <Td tdText="upwork.com"></Td>
      </tr>
      <tr>
        <Td tdText="Tiel Max"></Td>
        <Td tdText="Linkedin"></Td>
        <Td tdText="31+k"></Td>
        <TdLead tdText="Offer" to="/diploma/changetasks"></TdLead>
        <Td tdText="066 762 28 28"></Td>
      </tr>
    </thead>
  );
}

export { TableBody };
