import React, { useState } from "react";
import "./formCreateScript.scss";
import { useDispatch } from "react-redux";
import { Input } from "../../core/input/input";
import { addScripts } from "./scriptSlice";
import { ButtonLead } from "../../core/button/buttonLead";

function FormCreateScript() {
  const [names, setNames] = useState("");
  const [source, setSource] = useState("");
  const [link, setLink] = useState("");

  const dispatch = useDispatch();

  const addDiscovery = () => {
    dispatch(addScripts({ names })), setNames("");
    dispatch(addScripts({ source })), setSource("");
    dispatch(addScripts({ link })), setLink("");
  };

  return (
    <form id="scriptForm">
      <label>
        Name
        <Input
          name="names"
          className="scriptName"
          type="text"
          placeholder="Enter your name"
          text={names}
          handleInput={setNames}
        />
      </label>
      <label>
        Source
        <Input
          name="source"
          className="scriptSource"
          type="text"
          placeholder="Enter your source"
          text={source}
          handleInput={setSource}
        />
      </label>
      <label>
        Link
        <Input
          name="link"
          className="scriptLink"
          type="text"
          placeholder="Enter your link"
          text={link}
          handleInput={setLink}
        />
      </label>
      <ButtonLead
        className="btnScript"
        to="/diploma/discovery"
        handleSubmit={addDiscovery}
      />
    </form>
  );
}

export { FormCreateScript };
