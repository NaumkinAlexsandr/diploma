import { useDispatch } from "react-redux";
import { removeSource } from "../formCreateLead/sourceSlice";

const Source = ({ id, source }) => {
  const dispatch = useDispatch();

  return (
    <>
      {source}
      <span className="delete" onClick={() => dispatch(removeSource({ id }))}>
        &times;
      </span>
    </>
  );
};

export { Source };
