import { useContext } from "react";
import { AuthContext } from "../authProvider/AuthProvider";
import { Navigate, useLocation } from "react-router-dom";

const PrivetRoute = ({ children }) => {
  const { user, loader } = useContext(AuthContext);
  const location = useLocation();
  if (loader) {
    return <h1>Loading....</h1>;
  }
  if (user) {
    return children;
  }
  return <Navigate state={location.pathname} to={"/login"}></Navigate>;
};

export default PrivetRoute;
