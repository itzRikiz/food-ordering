import Card from "./Res-card/Card";
import "./body.css";
import { useEffect, useState } from "react";
import db from "../../appwrite/databases";
// import Footer from "../Footer/Footer";

function Body() {
  const [filteredList, setFilteredList] = useState([]);
  useEffect(() => {
    fetchDocuments();
  }, []);

  const fetchDocuments = async () => {
    try {
      console.log(db.Brands, "db");
      const response = await db.Restaurants.list();
      console.log(response, "res");
      setFilteredList(response.documents);
    } catch (error) {
      console.error("Failed to fetch documents:", error);
    }
  };

  return (
    <>
      <div className="main-container">
        <section className="restaurants">
          <div className="container">
            <div className="filter">
              <div className="item-bar">
                <div className="filters">
                  <div className="relevance">Relevance</div>
                  <div className="delivery">Delivery Time</div>
                  <div className="rating">Rating</div>
                  <div className="cost-lh">Cost: Low to High</div>
                  <div className="cost-hl">Cost: High to Low</div>
                </div>
              </div>
            </div>
            <div className="res-card">
              {filteredList.map((restaurant) => (
                <Card key={restaurant.$id} resData={restaurant} />
              ))}
            </div>
          </div>
        </section>
        <hr style={{ marginTop: "20px" }} />
      </div>
      {/* <div className="footer">
        <Footer />
      </div> */}
    </>
  );
}

export default Body;
