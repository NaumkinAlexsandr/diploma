import React from "react";
import "./formChangeTasks.scss";
import { Arrow } from "../../core/arrow";
import { Task } from "../../core/task";
import { Button } from "../../core/button/button";

function FormChange() {
  return (
    <>
      <div className="tasks">
        <Task className="task first" text="Bid" />
        <Arrow className="arrow" />
        <Task className="task second" text="Invite to First Call" />
        <Arrow className="arrow" />
        <Task className="task third" text="Schedule First Call" />
        <Arrow className="arrow" />
        <Task className="task fourth" text="Make Offer" />
        <Arrow className="arrow" />
        <Task className="task fifth" text="Close Deal" />
        <Button className="btnTask" name="Submit" to="/diploma/leadTable" />
      </div>
    </>
  );
}

export { FormChange };
