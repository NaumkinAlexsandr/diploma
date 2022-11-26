import { useDispatch, useSelector } from "react-redux";
import { removeScripts } from "../formCreateScript/scriptSlice";

const DiscoveryList = ({ id, names, source, link }) => {
  const dispatch = useDispatch();

  return (
    <>
      <li>
        {names}
        {source}
        {link}
        <span
          className="delete"
          onClick={() => dispatch(removeScripts({ id }))}
        >
          &times;
        </span>
      </li>
    </>
  );
};

export { DiscoveryList };
