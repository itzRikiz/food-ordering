import { Outlet } from "react-router-dom";
import Header from "../Header/Header";
const AppLayout = () => {
  console.log(<Outlet />, "<Outlet />");
  return (
    <div>
      <Header />
      <Outlet />
    </div>
  );
};

export default AppLayout;
