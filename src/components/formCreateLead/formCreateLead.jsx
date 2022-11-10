import React from "react";
import { Input } from "../../core/input/input";
import { Button } from "../../core/button/button";
import "./formCreateLead.scss";

function FormCreateLead() {
  return (
    <form id="leadForm">
      <Input
        name="Name"
        className="leadName"
        type="text"
        placeholder="Enter your name"
      />
      <Input
        name="Source"
        className="leadSource"
        type="text"
        placeholder="Enter your source"
      />
      <Input
        name="Budget"
        className="leadBudget"
        type="text"
        placeholder="Enter your budget"
      />
      <Input
        name="Next task"
        className="leadTask"
        type="text"
        placeholder="Enter your task"
      />
      <Input
        name="Contacts"
        className="leadContacts"
        type="text"
        placeholder="Enter your contacts"
      />
      <Button className="btnLead" name="Submit" to="/diploma/leadTable" />
    </form>
  );
}

export { FormCreateLead };
