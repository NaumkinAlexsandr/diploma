import { useDispatch } from "react-redux";
import { removeTodo } from "../formCreateLead/leadSlice";

const LeadTask3 = ({ id, names, source, budget, nextTask, contacts }) => {
  const dispatch = useDispatch();

  return (
    <tr>
      <td>
        {names}
        {source}
        {budget}
        {nextTask}
        {contacts}
        <span className="delete" onClick={() => dispatch(removeTodo({ id }))}>
          &times;
        </span>
      </td>
    </tr>
  );
};

export { LeadTask3 };
