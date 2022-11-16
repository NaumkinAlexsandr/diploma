import { useLocation, Navigate } from "react-router-dom";
import { useAuth } from "./useAuth";

const AuthPrivate = ({ children }) => {
  const location = useLocation();
  const { user } = useAuth();

  if (!user) {
    return <Navigate to="/diploma" state={{ from: location }} />;
  }
  return children;
};

export { AuthPrivate };
