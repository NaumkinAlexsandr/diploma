import React from "react";
import "./formCreateLead.scss";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { Input } from "../../core/input/input";
import { ButtonLead } from "../../core/button/buttonLead";
import { addLeads } from "./leadSlice";

function FormCreateLead() {
  const [names, setNames] = useState("");
  const [source, setSource] = useState("");
  const [budget, setBudget] = useState("");
  const [nextTask, setNextTask] = useState("");
  const [contacts, setContacts] = useState("");

  const dispatch = useDispatch();

  const addTask = () => {
    dispatch(addLeads({ names, source, budget, nextTask, contacts }));
  };

  return (
    <form id="leadForm">
      <label>
        Name
        <Input
          name="name"
          className="leadName"
          type="text"
          placeholder="Enter your name"
          text={name}
          handleInput={setNames}
        />
      </label>
      <label>
        Source
        <Input
          name="source"
          className="leadSource"
          type="text"
          placeholder="Enter your source"
          text={source}
          handleInput={setSource}
        />
      </label>
      <label>
        Budget
        <Input
          name="budget"
          className="leadBudget"
          type="text"
          placeholder="Enter your budget"
          text={budget}
          handleInput={setBudget}
        />
      </label>
      <label>
        Next Task
        <Input
          name="nextTask"
          className="leadTask"
          type="text"
          placeholder="Enter your task"
          text={nextTask}
          handleInput={setNextTask}
        />
      </label>
      <label>
        Contacts
        <Input
          name="contacts"
          className="leadContacts"
          type="text"
          placeholder="Enter your contacts"
          text={contacts}
          handleInput={setContacts}
        />
      </label>

      <ButtonLead
        className="btnLead"
        handleSubmit={addTask}
        to="/diploma/leadTable"
      />
    </form>
  );
}

export { FormCreateLead };
