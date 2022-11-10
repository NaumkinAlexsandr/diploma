import React from "react";
import { HeaderEmpty } from "../core/headerEmpty/headerEmpty";
import { HeaderLine } from "../core/headerLine/headerLine";
import { FormApps } from "../components/apps/formApps";

function Apps() {
  return (
    <>
      <HeaderEmpty />
      <HeaderLine />
      <section id="apps">
        <h1>Apps</h1>
        <FormApps />
      </section>
    </>
  );
}

export { Apps };
