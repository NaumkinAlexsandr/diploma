import { useDispatch } from "react-redux";
import { removeScripts } from "../formCreateScript/scriptSlice";

const DiscoveryList = ({ id, names, sources, link }) => {
  const dispatch = useDispatch();

  return (
    <ul>
      New Discovery
      <span className="delete" onClick={() => dispatch(removeScripts({ id }))}>
        &times;
      </span>
      <li>{names}</li>
      <li>{sources}</li>
      <li>{link}</li>
    </ul>
  );
};

export { DiscoveryList };
