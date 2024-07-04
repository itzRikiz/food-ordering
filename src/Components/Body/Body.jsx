import Button from "@mui/material/Button";
import Card from "./Res-card/Card";
import "./body.css";
import { useEffect, useState } from "react";
// import Brands from "./Brands/Brands";
// import Box from "@mui/material/Box";
// import Typography from "@mui/material/Typography";
// import Modal from "@mui/material/Modal";
import db from "../../appwrite/databases";

function Body() {
  const [filteredList, setFilteredList] = useState([]);
  // const [filterTitle, setFilterTitle] = useState("");
  // const [brands, setBrands] = useState([]);

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
          <Card key={restaurant.$id} resData={restaurant} />
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
