import { useDispatch } from "react-redux";
import { removeName } from "../formCreateLead/nameSlice";

const Names = ({ id, name }) => {
  const dispatch = useDispatch();

  return (
    <>
      {name}
      <span className="delete" onClick={() => dispatch(removeName({ id }))}>
        &times;
      </span>
    </>
  );
};

export { Names };
