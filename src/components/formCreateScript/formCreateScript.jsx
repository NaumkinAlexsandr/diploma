import React from "react";
import { Input } from "../../core/inputs/input";
import { Button } from "../../core/buttons/button";
import "./formCreateScript.scss";

function FormCreateScript() {
  return (
    <form id="script_form">
      <Input
        labelName="Name"
        name="name"
        className="scriptName"
        type="text"
        placeholder="Enter your name"
      />
      <Input
        labelName="Source"
        name="source"
        className="scriptSource"
        type="text"
        placeholder="Enter your source"
      />
      <Input
        labelName="Link"
        name="link"
        className="scriptLink"
        type="text"
        placeholder="Enter your link"
      />
      <Button className="btn_script" name="Submit" to="/diploma/discovery" />
    </form>
  );
}

export { FormCreateScript };
