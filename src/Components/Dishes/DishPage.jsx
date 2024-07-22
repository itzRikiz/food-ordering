import { useParams } from "react-router-dom";
import useMenuItem from "../../utils/useMenuItem";
import { useState, useEffect } from "react";
import MainContent from "./MainContent";
import Sidebar from "./Sidebar";

const DishPage = () => {
  const { id } = useParams();
  const dishes = useMenuItem(id);
  const [selectedCategory, setSelectedCategory] = useState(null);
  const [groupedDishes, setGroupedDishes] = useState({});

  useEffect(() => {
    if (dishes.length > 0) {
      const grouped = dishes.reduce((acc, dish) => {
        if (!acc[dish.category]) {
          acc[dish.category] = [];
        }
        acc[dish.category].push(dish);
        return acc;
      }, {});
      setGroupedDishes(grouped);
      setSelectedCategory(Object.keys(grouped)[0]);
    }
  }, [dishes]);

  return (
    <>
      <hr />
      <div className="flex px-20 py-2 mt-16">
        <Sidebar
          categories={Object.keys(groupedDishes)}
          onSelectedCategory={setSelectedCategory}
        />
        <MainContent category={groupedDishes[selectedCategory]} />
      </div>
    </>
  );
};

export default DishPage;
