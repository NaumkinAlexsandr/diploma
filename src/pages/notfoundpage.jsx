import { Link } from "react-router-dom";
import { HeaderEmpty } from "../core/headerEmpty/headerEmpty";
import { HeaderLine } from "../core/headerLine/headerLine";
const Notfoundpage = () => {
  return (
    <div>
      <HeaderEmpty />
      <HeaderLine />
      <br />
      This page doesn't exist. Go <Link to="diploma/">home</Link>
    </div>
  );
};

export default Notfoundpage;
