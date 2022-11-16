import React from "react";
import "./formCreateLead.scss";
import { useState } from "react";
import { useDispatch } from "react-redux";
import {
  addName,
  addSource,
  addBudget,
  addNextTask,
  addContacts,
} from "./todoSlice";

import { InputName } from "../../core/inputs/inputName";
import { InputSource } from "../../core/inputs/inputSource";
import { InputBudget } from "../../core/inputs/inputBudget";
import { InputNextTask } from "../../core/inputs/inputNextTask";
import { InputContacts } from "../../core/inputs/inputContacts";
import { ButtonLead } from "../../core/buttons/buttonLead";

function FormCreateLead() {
  const [names, setNames] = useState("");
  const [source, setSource] = useState("");
  const [budget, setBudget] = useState("");
  const [nextTask, setNextTask] = useState("");
  const [contacts, setContacts] = useState("");

  const dispatch = useDispatch();

  const addTask = () => {
    dispatch(addName({ names })), setNames("");
    dispatch(addSource({ source })), setSource("");
    dispatch(addBudget({ budget })), setBudget("");
    dispatch(addNextTask({ nextTask })), setNextTask("");
    dispatch(addContacts({ contacts })), setContacts("");
  };
  return (
    <form id="leadForm">
      <div className="App">
        <InputName
          name="name"
          className="leadName"
          type="text"
          placeholder="Enter your name"
          text={names}
          handleInput={setNames}
          handleSubmit={addTask}
        />
        <InputSource
          name="source"
          className="leadSource"
          type="text"
          placeholder="Enter your source"
          text={source}
          handleInput={setSource}
          handleSubmit={addTask}
        />
        <InputBudget
          name="budget"
          className="leadBudget"
          type="text"
          placeholder="Enter your budget"
          text={budget}
          handleInput={setBudget}
          handleSubmit={addTask}
        />
        <InputNextTask
          name="nextTask"
          className="leadTask"
          type="text"
          placeholder="Enter your task"
          text={nextTask}
          handleInput={setNextTask}
          handleSubmit={addTask}
        />
        <InputContacts
          labelName="Contacts"
          name="contacts"
          className="leadContacts"
          type="text"
          placeholder="Enter your contacts"
          text={contacts}
          handleInput={setContacts}
          handleSubmit={addTask}
        />
        <ButtonLead handleSubmit={addTask} />
      </div>
    </form>
  );
}

export { FormCreateLead };
