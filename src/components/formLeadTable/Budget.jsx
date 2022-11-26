import { useDispatch } from "react-redux";
import { removeBudget } from "../formCreateLead/budgetsSlice";

const Budget = ({ id, budget }) => {
  const dispatch = useDispatch();

  return (
    <>
      {budget}
      <span className="delete" onClick={() => dispatch(removeBudget({ id }))}>
        &times;
      </span>
    </>
  );
};

export { Budget };
