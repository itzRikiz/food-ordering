import MainContent from "./MainContent";
import Sidebar from "./Sidebar";
import "./dishpage.css";

const DishPage = () => {
  return (
    <div className="content">
      <Sidebar />
      <MainContent />
    </div>
  );
};

export default DishPage;
