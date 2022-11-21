import React from "react";
import { Link } from "react-router-dom";
import { HeaderFull } from "../core/headerFull/HeaderFull";
import { HeaderLine } from "../core/headerLine/HeaderLine";
import { TitleDiscovery } from "../components/formDiscovery/TitleDiscovery";
import { FormDiscovery } from "../components/formDiscovery/FormDiscovery";

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
