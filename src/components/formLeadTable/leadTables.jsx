import { useSelector } from "react-redux";

import { Names } from "./Names";
import { Source } from "./Source";
import { Budget } from "./Budget";
import { NextTask } from "./NextTask";
import { Contacts } from "./Contacts";

const LaadTable = () => {
  const names = useSelector((state) => state.names.names);
  const sources = useSelector((state) => state.sources.sources);
  const budgets = useSelector((state) => state.budgets.budgets);
  const nextTasks = useSelector((state) => state.nextTasks.nextTasks);
  const contacts = useSelector((state) => state.contacts.contacts);

  return (
    <>
      <td>
        {names.map((name) => (
          <Names key={name.id} {...name} />
        ))}
      </td>
      <td>
        {sources.map((source) => (
          <Source key={source.id} {...source} />
        ))}
      </td>
      <td>
        {budgets.map((budget) => (
          <Budget key={budget.id} {...budget} />
        ))}
      </td>
      <td>
        {nextTasks.map((nextTask) => (
          <NextTask key={nextTask.id} {...nextTask} />
        ))}
      </td>
      <td>
        {contacts.map((contact) => (
          <Contacts key={contact.id} {...contact} />
        ))}
      </td>
    </>
  );
};

export { LaadTable };
