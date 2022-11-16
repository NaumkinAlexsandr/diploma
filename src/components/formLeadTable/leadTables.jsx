import { useSelector } from "react-redux";
import { LeadTask } from "./leadTask";

const LaadTable = () => {
  const todos = useSelector((state) => state.todos.todos);

  return (
    <tr>
      {todos.map((todo) => (
        <LeadTask key={todo.id} {...todo} />
      ))}
    </tr>
  );
};

export { LaadTable };
