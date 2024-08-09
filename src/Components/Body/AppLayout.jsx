import { Outlet } from "react-router-dom";
import Header from "../Header/Header";

import Footer from "../Footer/Footer";

const AppLayout = () => {
  return (
    
      <div className="bg-gradient-to-r from-yellow-200 to-red-400 min-h-screen flex flex-col">
        <Header />
        <main className="flex-grow">
          <Outlet />
        </main>
        <Footer />
      </div>
   
  );
};

export default AppLayout;
