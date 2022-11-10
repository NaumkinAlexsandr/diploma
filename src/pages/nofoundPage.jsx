import { Link } from "react-router-dom";
import { HeaderEmpty } from "../core/headerEmpty/headerEmpty";
import { HeaderLine } from "../core/headerLine/headerLine";

function NofoundPage() {
  return (
    <div>
      <HeaderEmpty />
      <HeaderLine />
      <div className="container">
        Page not found <Link to="/diploma/">Go Home</Link>{" "}
      </div>
    </div>
  );
}

export { NofoundPage };