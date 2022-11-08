import React from "react";
import { HeaderEmpty } from "../core/headerEmpty/headerEmpty";
import { HeaderLine } from "../core/headerLine/headerLine";
import { FormApps } from "../components/apps/formApps";

function Apps() {
  return (
    <div id="apps">
      <HeaderEmpty />
      <HeaderLine />
      <h1>Apps</h1>
      <FormApps />
    </div>
  );
}

export default Apps;
