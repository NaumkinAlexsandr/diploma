import React from "react";
import { BlockApp } from "./blockApp";
import "./formApps.scss";

function FormApps() {
  return (
    <section>
      <BlockApp
        className="app"
        to="/diploma/leadtable"
        value="Lead Table"
        src="./img/star.png"
        alt="star"
      />
      <BlockApp
        className="app"
        to="/diploma/tasks"
        value="Tasks"
        src="./img/triangleYellow.png"
        alt="triangleYellow"
      />
      <BlockApp
        className="app"
        to="/diploma/discovery"
        value="Discovery"
        src="./img/ellipse.png"
        alt="ellipse"
      />
      <BlockApp
        className="app"
        to="/diploma/analizer"
        value="Analizer"
        src="./img/square.png"
        alt="square"
      />
    </section>
  );
}

export { FormApps };
