import React, { useState } from "react";
import "./formCreateScript.scss";
import { useDispatch } from "react-redux";
import { Input } from "../../core/input/input";
import { addScripts } from "./scriptSlice";
import { ButtonLead } from "../../core/button/buttonLead";

function FormCreateScript() {
  const [names, setNames] = useState("");
  const [sources, setSources] = useState("");
  const [link, setLink] = useState("");

  const dispatch = useDispatch();

  const addDiscovery = () => {
    dispatch(addScripts({ names, sources, link }));
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
          text={sources}
          handleInput={setSources}
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
