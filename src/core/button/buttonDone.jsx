import React, { useState } from "react";

function Done(props) {
  const [done, setDone] = useState(" ");

  function handleDone() {
    setDone((prevState) => ({
      isDone: !prevState.isDone,
    }));
  }

  return (
    <>
      <td>
        <button
          onClick={handleDone}
          className={done.isDone ? "completed" : "notCompleted"}
          value="done"
          onChange={(e) => {
            handleDone(e.target.value);
          }}
        >
          {done.isDone ? "Mark as Done" : "Mark as Not done"}
        </button>
      </td>
      <td>
        <button
          onClick={props.onClick}
          className={done.isDone ? "deleted" : "notCompleted"}
          value="deleted"
          onChange={(e) => {
            handleDone(e.target.value);
          }}
        >
          {done.isDone ? "Delete task" : "Not done task"}
        </button>
      </td>
    </>
  );
}
export { Done };
