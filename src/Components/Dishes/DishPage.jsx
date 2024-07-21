import { useParams } from "react-router-dom";
import useMenuItem from "../../utils/useMenuItem";
import { useState, useEffect } from "react";
import MainContent from "./MainContent";
import Sidebar from "./Sidebar";

const DishPage = () => {
  const resId = useParams();
  const dishes = useMenuItem(resId.id);
  const [selectedCategory, setSelectedCategory] = useState([]);
  const [dishesItem, setDishesItem] = useState([]);
  useEffect(() => {
    if (dishes.length > 0) {
      setSelectedCategory(dishes[0]);
      setDishesItem(dishes);
    }
  }, [dishes]);

  return (
    <>
      <hr />
      <div className="flex px-20 py-2 mt-16">
        <Sidebar
          categories={dishesItem}
          onSelectedCategory={setSelectedCategory}
        />
        <MainContent category={selectedCategory} />
      </div>
    </>
  );
};

export default DishPage;
