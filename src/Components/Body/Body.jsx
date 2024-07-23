import Card from "./Res-card/Card";
import { withPromotedLabel } from "../HOC/withPromotedLabel";
import { useEffect, useState } from "react";
import db from "../../appwrite/databases";

function Body() {
  const [filteredList, setFilteredList] = useState([]);
  const PromotedCard = withPromotedLabel(Card);
  useEffect(() => {
    fetchDocuments();
  }, []);

  const fetchDocuments = async () => {
    try {
      const response = await db.Restaurants.list();
      setFilteredList(response.documents);
    } catch (error) {
      console.error("Failed to fetch documents:", error);
    }
  };

  return (
    <>
      <div className="mt-16">
        <section className="restaurants">
          <div className="container mx-auto p-4">
            <div className="flex justify-center mt-5 px-20 mb-10 gap-5">
              <div className="bg-white border rounded-xl p-2 shadow-sm cursor-pointer">
                Relevance
              </div>
              <div className="bg-white border rounded-xl p-2 shadow-sm cursor-pointer">
                Delivery Time
              </div>
              <div className="bg-white border rounded-xl p-2 shadow-sm cursor-pointer">
                Rating
              </div>
              <div className="bg-white border rounded-xl p-2 shadow-sm cursor-pointer">
                Cost: Low to High
              </div>
              <div className="bg-white border rounded-xl p-2 shadow-sm cursor-pointer">
                Cost: High to Low
              </div>
            </div>
            <div className="mb-4 px-28 text-lg font-semibold">
              Restaurants with online food delivery
            </div>
            <div className="px-28 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
              {filteredList.map((restaurant) =>
                restaurant.promoted ? (
                  <PromotedCard key={restaurant.$id} resData={restaurant} />
                ) : (
                  <Card key={restaurant.$id} resData={restaurant} />
                )
              )}
            </div>
          </div>
        </section>
        <hr className="mt-4" />
      </div>
    </>
  );
}

export default Body;
