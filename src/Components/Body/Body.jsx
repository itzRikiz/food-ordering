import Button from "@mui/material/Button";
import Card from "./Res-card/Card";
import "./body.css";
import { useEffect, useState } from "react";
// import Brands from "./Brands/Brands";
// import Box from "@mui/material/Box";
// import Typography from "@mui/material/Typography";
// import Modal from "@mui/material/Modal";
import { databases } from "../../appwrite/config";

function Body() {
  const [filteredList, setFilteredList] = useState([]);
  // const [filterTitle, setFilterTitle] = useState("");
  // const [brands, setBrands] = useState([]);

  useEffect(() => {
    const fetchDocuments = async () => {
      try {
        const response = await databases.listDocuments(
          import.meta.env.VITE_DATABASE_ID,
          import.meta.env.VITE_COLLECTION_ID_RES
        );
        setFilteredList(response.documents);
      } catch (error) {
        console.error("Failed to fetch documents:", error);
      }
    };

    fetchDocuments();
  }, []);
  // useEffect(() => {
  //   fetch(
  //     "https://www.swiggy.com/dapi/restaurants/list/v5?lat=22.6533351&lng=88.8535712&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING"
  //   )
  //     .then((response) => response.json())
  //     .then((data) => {
  //       setFilteredList(
  //         data.data.cards[3].card.card.gridElements.infoWithStyle.restaurants
  //       );
  //       setFilterTitle(data.data.cards[1].card.card.title);
  //       setBrands(data.data.cards[5].card.card.brands);
  //     });
  // }, []);

  function handleClick() {
    const newList = filteredList.filter((res) => res.info.avgRating > 4);
    setFilteredList(newList);
  }

  return (
    <div className="main">
      <div className="filter">
        <Button variant="contained" onClick={handleClick}>
          Top Rated
        </Button>
      </div>
      {/* <div className="title">
        <h4>{filterTitle}</h4>
      </div> */}
      <div className="res-card">
        {filteredList.map((restaurant) => (
          <Card key={restaurant.info.id} resData={restaurant} />
        ))}
      </div>
      <hr style={{ marginTop: "20px" }} />
      {/* <div className="brand-card">
        {brands.map((brand, index) => (
          <Brands key={index} brandData={brand} />
        ))}
      </div> */}
    </div>
  );
}

export default Body;
