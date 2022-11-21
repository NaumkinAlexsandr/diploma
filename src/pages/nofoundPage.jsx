import { Link } from "react-router-dom";
import { HeaderEmpty } from "../core/headerEmpty/HeaderEmpty";
import { HeaderLine } from "../core/headerLine/HeaderLine";

function NofoundPage() {
  return (
    <div>
      <HeaderEmpty />
      <HeaderLine />
      <div className="container">
        <h1>
          Page not found <Link to="/diploma/">Go Home</Link>
        </h1>
      </div>
    </div>
  );
}

export { NofoundPage };
