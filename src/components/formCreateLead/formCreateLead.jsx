import React from "react";
import "./formCreateLead.scss";
import { useState } from "react";
import { useDispatch } from "react-redux";

import {
  addName,
  // addSource,
  // addBudget,
  // addNextTask,
  // addContacts,
} from "./leadSlice";
// import { addName } from "./InputNameSlice";
// import { addSource } from "./InputSourceSlice";
// import { addBudget } from "./InputBudgetSlice";
// import { addNextTask } from "./InputNextTaskSlice";
// import { addContacts } from "./InputContactsSlice";

import { InputName } from "../../core/input/inputName";
import { InputSource } from "../../core/input/inputSource";
import { InputBudget } from "../../core/input/inputBudget";
import { InputNextTask } from "../../core/input/inputNextTask";
import { InputContacts } from "../../core/input/inputContacts";
import { ButtonLead } from "../../core/button/buttonLead";

function FormCreateLead() {
  const [names, setNames] = useState("");
  const [source, setSource] = useState("");
  const [budget, setBudget] = useState("");
  const [nextTask, setNextTask] = useState("");
  const [contacts, setContacts] = useState("");

  const dispatch = useDispatch();

  const addTask = () => {
    dispatch(addName({ names })), setNames("");
    dispatch(addName({ source })), setSource("");
    dispatch(addName({ budget })), setBudget("");
    dispatch(addName({ nextTask })), setNextTask("");
    dispatch(addName({ contacts })), setContacts("");
  };

  return (
    <form id="leadForm">
      <InputName
        name="name"
        className="leadName"
        type="text"
        placeholder="Enter your name"
        text={names}
        handleInput={setNames}
      />
      <InputSource
        name="source"
        className="leadSource"
        type="text"
        placeholder="Enter your source"
        text={source}
        handleInput={setSource}
      />
      <InputBudget
        name="budget"
        className="leadBudget"
        type="text"
        placeholder="Enter your budget"
        text={budget}
        handleInput={setBudget}
      />
      <InputNextTask
        name="nextTask"
        className="leadTask"
        type="text"
        placeholder="Enter your task"
        text={nextTask}
        handleInput={setNextTask}
      />
      <InputContacts
        labelName="Contacts"
        name="contacts"
        className="leadContacts"
        type="text"
        placeholder="Enter your contacts"
        text={contacts}
        handleInput={setContacts}
      />
      <ButtonLead className="btnLead" handleSubmit={addTask} />
    </form>
  );
}

export { FormCreateLead };
