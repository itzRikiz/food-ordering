import Card from "./Res-card/Card";
import { withPromotedLabel } from "../HOC/withPromotedLabel";
import { useEffect, useState } from "react";
import Hero from "./Hero";
import FoodCategories from "./FoodCategories";
function Body() {
  const [filteredList, setFilteredList] = useState([]);
  const PromotedCard = withPromotedLabel(Card);
  useEffect(() => {
    fetchDocuments();
  }, []);

  const fetchDocuments = async () => {
    try {
      const response = await fetch("http://localhost:3000/api/restaurants");
      console.log(response, "response");
      const data = await response.json();
      console.log(data, "data");
      setFilteredList(data.restaurants);
      console.log(filteredList, "filteredList");
    } catch (error) {
      console.error("Error fetching restaurants:", error);
    }
  };

  return (
    <div className="">
      <Hero />
      <FoodCategories />
      <section className="py-8 md:py-12 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-2xl md:text-3xl font-bold mb-6 md:mb-8 text-center text-eggplant">
            Featured Restaurants
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
            {filteredList.map((restaurant) =>
              restaurant.promoted ? (
                <PromotedCard key={restaurant._id} resData={restaurant} />
              ) : (
                <Card key={restaurant._id} resData={restaurant} />
              )
            )}
          </div>
        </div>
      </section>
    </div>
  );
}

export default Body;
