import { Outlet } from "react-router-dom";
import Header from "../Header/Header";
import userContext from "../../utils/userContext";
const AppLayout = () => {
  return (
    <userContext.Provider value={{ loggedInUser: "sanmay" }}>
      <div>
        <Header />
        <Outlet />
      </div>
    </userContext.Provider>
  );
};

export default AppLayout;
