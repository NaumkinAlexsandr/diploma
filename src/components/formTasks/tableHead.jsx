import React from "react";
import { Th } from "../../core/th";

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
