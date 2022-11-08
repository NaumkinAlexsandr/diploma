import { Link } from "react-router-dom";
import Header from "../components/header/header";

const NofoundPage = () => {
  return (
    <div>
      <Header />
      <div className="container">Page not found <Link to="/graduate_work_js">Go Home</Link> </div>
    </div>
  );
};

export default NofoundPage;
