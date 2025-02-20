import { Navigate, Outlet } from "react-router-dom";

const PrivateRoute = () => {
  const isAdmin = localStorage.getItem("admin") === "true";
  return isAdmin ? <Outlet /> : <Navigate to="/unauthorized" />;
};
export default PrivateRoute;
