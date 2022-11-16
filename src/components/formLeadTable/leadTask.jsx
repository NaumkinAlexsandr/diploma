import { useDispatch } from "react-redux";
import { removeTodo } from "../formCreateLead/todoSlice";

const LeadTask = ({ id, names, source, budget, nextTask, contacts }) => {
  const dispatch = useDispatch();

  return (
    <>
      <td>
        {names}
        <span className="delete" onClick={() => dispatch(removeTodo({ id }))}>
          &times;
        </span>
      </td>
      <td>
        {source}
        <span className="delete" onClick={() => dispatch(removeTodo({ id }))}>
          &times;
        </span>
      </td>
      <td>
        {budget}
        <span className="delete" onClick={() => dispatch(removeTodo({ id }))}>
          &times;
        </span>
      </td>
      <td>
        {nextTask}
        <span className="delete" onClick={() => dispatch(removeTodo({ id }))}>
          &times;
        </span>
      </td>
      <td>
        {contacts}
        <span className="delete" onClick={() => dispatch(removeTodo({ id }))}>
          &times;
        </span>
      </td>
    </>
  );
};

export { LeadTask };
