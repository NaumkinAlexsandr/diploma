import React from "react";
import { Input } from "../../core/input/input";
import { Button } from "../../core/button/button";
import "./formCreateScript.scss";

function FormCreateScript() {
  return (
    <form id="script_form">
      <Input
        name="Name"
        className="scriptName"
        type="text"
        placeholder="Enter your name"
      />
      <Input
        name="Source"
        className="scriptSource"
        type="text"
        placeholder="Enter your source"
      />
      <Input
        name="Link"
        className="scriptLink"
        type="text"
        placeholder="Enter your link"
      />
      <Button className="btn_script" name="Submit" to="/diploma/discovery" />
    </form>
  );
}

export { FormCreateScript };
