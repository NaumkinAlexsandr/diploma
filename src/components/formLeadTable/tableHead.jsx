import React from "react";
import { Th } from "../../core/table/Th";

function TableHead() {
  return (
    <thead>
      <tr>
        <Th thText="Name" />
        <Th thText="Source" />
        <Th thText="Budget" />
        <Th thText="Next task" />
        <Th thText="Contacts" />
      </tr>
    </thead>
  );
}

export { TableHead };
