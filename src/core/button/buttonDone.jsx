import React, { useState } from "react";

function Done({ onClick }) {
  const [done, setDone] = useState("isDone");

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
          Mark as Done
        </button>
      </td>
      <td>
        <button
          onClick={onClick}
          className={done.isDone ? "deleted" : "notCompleted"}
          value="deleted"
          onChange={(e) => {
            handleDone(e.target.value);
          }}
        >
          Delete task
        </button>
      </td>
    </>
  );
}
export { Done };
