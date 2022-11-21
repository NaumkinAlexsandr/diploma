import React from "react";
import { Td } from "../../core/table/Td";
import { Done } from "../../core/table/TdCompleted";
import { Deleted } from "../../core/table/TdDeleted";
import { Days } from "../../core/table/TdDays";

function TableBody() {
  return (
    <thead>
      <tr>
        <Td tdText="Send Bid"></Td>
        <Done value="Mark as Done"></Done>
        <Deleted text="Delete task"></Deleted>
        <Days className="zeroDays" text="0"></Days>
      </tr>
      <tr>
        <Td tdText="Make Offer"></Td>
        <Done value="Mark as Done"></Done>
        <Deleted text="Delete task"></Deleted>
        <Days className="oneDays" text="1"></Days>
      </tr>
      <tr>
        <Td tdText="Estimate project"></Td>
        <Done value="Mark as Done"></Done>
        <Deleted text="Delete task"></Deleted>
        <Days className="twoDays" text="2"></Days>
      </tr>
    </thead>
  );
}

export { TableBody };
