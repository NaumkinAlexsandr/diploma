import React from "react";
import { Link } from "react-router-dom";
import { HeaderFull } from "../core/headerFull/headerFull";
import { HeaderLine } from "../core/headerLine/headerLine";
import { TitleDiscovery } from "../components/formDiscovery/titleDiscovery";
import { FormDiscovery } from "../components/formDiscovery/formDiscovery";

function Discovery() {
  return (
    <>
      <HeaderFull src="./img/ellipse.png" to="/diploma/apps" />
      <HeaderLine />
      <section id="discovery">
        <TitleDiscovery />
        <FormDiscovery />
      </section>
    </>
  );
}

export { Discovery };
