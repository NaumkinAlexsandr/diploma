import React from "react";
import { Link } from "react-router-dom";
import "./button.scss";

function ButtonLead({ className, to, handleSubmit }) {
  return (
    <>
      <button className={className} onClick={handleSubmit}>
        <Link to={to} />
        Submit
      </button>
    </>
  );
}

export { ButtonLead };
