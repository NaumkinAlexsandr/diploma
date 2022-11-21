import React from "react";
import { Link } from "react-router-dom";
import "./button.scss";

function ButtonLead({ handleSubmit }) {
  return (
    <>
      <button className="btnLead" onClick={handleSubmit}>
        <Link to="/diploma/leadTable" />
        Submit
      </button>
    </>
  );
}

export { ButtonLead };
