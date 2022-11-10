import React from "react";
import { Td } from "../../core/td";
import { Completed } from "../../core/tdCompleted";
import { Deleted } from "../../core/tdDeleted";
import { Days } from "../../core/tdDays";

function TableBody() {
  return (
    <thead>
      <tr>
        <Td tdText="Send Bid"></Td>
        <Completed text="Mark as Done"></Completed>
        <Deleted text="Delete task"></Deleted>
        <Days className="zeroDays" text="0"></Days>
      </tr>
      <tr>
        <Td tdText="Make Offer"></Td>
        <Completed text="Mark as Done"></Completed>
        <Deleted text="Delete task"></Deleted>
        <Days className="oneDays" text="1"></Days>
      </tr>
      <tr>
        <Td tdText="Estimate project"></Td>
        <Completed text="Mark as Done"></Completed>
        <Deleted text="Delete task"></Deleted>
        <Days className="twoDays" text="2"></Days>
      </tr>
    </thead>
  );
}

export { TableBody };
