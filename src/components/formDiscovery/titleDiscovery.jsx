import React from "react";
import { Link } from "react-router-dom";
import { AddColumn } from "../../core/addColumn/AddColumn";

import "./titleDiscovery.scss";

function TitleDiscovery() {
  return (
    <div className="title">
      <h1>Discovery</h1>
      <AddColumn to="/diploma/createscript" />
    </div>
  );
}

export { TitleDiscovery };
