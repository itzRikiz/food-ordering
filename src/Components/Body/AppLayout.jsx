import { Outlet } from "react-router-dom";
import Header from "../Header/Header";
import userContext from "../../utils/userContext";
import Footer from "../Footer/Footer";

const AppLayout = () => {
  return (
    <userContext.Provider value={{ loggedInUser: "sanmay" }}>
      <div className="bg-green-300 min-h-screen flex flex-col">
        <Header />
        <main className="flex-grow">
          <Outlet />
        </main>
        <Footer />
      </div>
    </userContext.Provider>
  );
};

export default AppLayout;
