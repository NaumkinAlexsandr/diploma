import React from "react";
import { Th } from "../../core/table/Th";

function TableHead() {
  return (
    <thead>
      <tr>
        <Th thText="Task Name" />
        <Th thText="Action" />
        <Th thText="Action" />
        <Th thText="Hold Days" />
      </tr>
    </thead>
  );
}

export { TableHead };
