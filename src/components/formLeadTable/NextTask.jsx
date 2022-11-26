import { useDispatch } from "react-redux";
import { removeNextTask } from "../formCreateLead/nextTasksSlice";

const NextTask = ({ id, nextTask }) => {
  const dispatch = useDispatch();

  return (
    <>
      {nextTask}
      {/* <a href="/diploma/changetasks"></a> */}
      <span className="delete" onClick={() => dispatch(removeNextTask({ id }))}>
        &times;
      </span>
    </>
  );
};

export { NextTask };
