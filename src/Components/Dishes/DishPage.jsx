import { useParams } from "react-router-dom";
// import useMenuItem from "../../utils/useMenuItem";
import { useEffect } from "react";
// import MainContent from "./MainContent";
// import Sidebar from "./Sidebar";

const DishPage = () => {
  const { id } = useParams();
  // const dishes = useMenuItem(id);
  // const [selectedCategory, setSelectedCategory] = useState(null);
  // const [groupedDishes, setGroupedDishes] = useState({});
  const fetchMenus = async () => {
    try {
      const response = await fetch(`http://localhost:3000/api/menus/${id}`);
      console.log(response);
      const data = response.json();
      console.log(data);
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    fetchMenus();
  }, []);

  return (
    <>
      <hr />
      <div className="flex px-20 py-2 mt-16">
        {/* <Sidebar
          categories={Object.keys(groupedDishes)}
          onSelectedCategory={setSelectedCategory}
        />
        <MainContent category={groupedDishes[selectedCategory]} /> */}
      </div>
    </>
  );
};

export default DishPage;
