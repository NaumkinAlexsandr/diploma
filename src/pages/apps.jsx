import React from "react";
import { HeaderEmpty } from "../core/headerEmpty/HeaderEmpty";
import { HeaderLine } from "../core/headerLine/HeaderLine";
import { FormApps } from "../components/apps/FormApps";

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
