import React, { useState } from "react";
import { Done } from "../../core/button/buttonDone";

function TableBody() {
  const [tasks, setTasks] = useState([
    {
      id: new Date().toISOString(),
      name: "Send Bid",
      days: "0",
    },
    {
      id: new Date().toISOString(),
      name: "Make Offer",
      days: "1",
    },
    {
      id: new Date().toISOString(),
      name: "Estimate project	",
      days: "2",
    },
  ]);

  const removeTasks = (index) => {
    setTasks(tasks.filter((task) => task !== index));
  };
  return (
    <tbody>
      {tasks.map((task, id) => (
        <tr key={id}>
          <td>{task.name}</td>
          <Done
            onClick={() => {
              removeTasks(task);
            }}
          />
          <td
            className={
              task.days > 1
                ? "twoDays"
                : "oneDays" && task.days < 1
                ? "zeroDays"
                : "oneDays"
            }
          >
            {task.days}
          </td>
        </tr>
      ))}
    </tbody>
  );
}

export { TableBody };
