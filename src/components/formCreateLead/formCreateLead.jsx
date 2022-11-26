import React, { useState } from "react";
import "./formCreateLead.scss";
import { useDispatch } from "react-redux";
import { Input } from "../../core/input/input";
import { addName } from "./nameSlice";
import { addSource } from "./sourceSlice";
import { addBudget } from "./budgetsSlice";
import { addNextTask } from "./nextTasksSlice";
import { addContacts } from "./contactsSlice";
import { ButtonLead } from "../../core/button/buttonLead";

function FormCreateLead() {
  const [name, setName] = useState("");
  const [source, setSource] = useState("");
  const [budget, setBudget] = useState("");
  const [nextTask, setNextTask] = useState("");
  const [contacts, setContacts] = useState("");

  const dispatch = useDispatch();

  const addTask = () => {
    dispatch(addName({ name })), setName("");
    dispatch(addSource({ source })), setSource("");
    dispatch(addBudget({ budget })), setBudget("");
    dispatch(addNextTask({ nextTask })), setNextTask("");
    dispatch(addContacts({ contacts })), setContacts("");
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
          handleInput={setName}
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
