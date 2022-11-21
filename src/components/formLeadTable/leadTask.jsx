import { useDispatch } from "react-redux";
import { removeTodo } from "../formCreateLead/leadSlice";
// import { removeBudget } from "../formCreateLead/InputBudgetSlice";
// import { removeContacts } from "../formCreateLead//InputContactsSlice";
// import { removeName } from "../formCreateLead//InputNameSlice";
// import { removeNextTask } from "../formCreateLead//InputNextTaskSlice";
// import { removeSource } from "../formCreateLead//InputSourceSlice";

const LeadTask = ({ id, names, source, budget, nextTask, contacts }) => {
  const dispatch = useDispatch();

  return (
    <tr>
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
        <a href="/diploma/changetasks"></a>
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
    </tr>
  );
};

export { LeadTask };
