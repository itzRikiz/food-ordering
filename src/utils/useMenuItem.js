import { useEffect } from "react";
function useMenuItem(restaurantId) {
  //   const [dishes, setDishes] = useState([]);

  useEffect(() => {
    const fetchDishes = async () => {};

    if (restaurantId) {
      fetchDishes();
    }
  }, [restaurantId]);

  //   return dishes;
}

export default useMenuItem;
