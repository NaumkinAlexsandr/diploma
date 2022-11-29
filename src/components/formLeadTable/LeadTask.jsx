import { useDispatch } from "react-redux";
import { removeLeads } from "../formCreateLead/leadSlice";
import { Link } from "react-router-dom";

const LeadTask = ({ id, names, source, budget, nextTask, contacts }) => {
  const dispatch = useDispatch();

  return (
    <>
      <td>{names}</td>
      <td>{source}</td>
      <td>{budget}</td>
      <td>
        {nextTask}
        <Link to="/diploma/changetasks"></Link>
      </td>
      <td>
        {contacts}
        <span className="delete" onClick={() => dispatch(removeLeads({ id }))}>
          &times;
        </span>
      </td>
    </>
  );
};

export { LeadTask };
