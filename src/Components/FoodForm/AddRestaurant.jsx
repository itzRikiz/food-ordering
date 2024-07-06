import { useState, useEffect } from "react";
import "./addRestaurant.css";
import db from "../../appwrite/databases";
import CardTable from "./CardTable";
const AddRestaurant = () => {
  const [name, setName] = useState("");
  const [cuisines, setCuisines] = useState([]);
  const [rating, setRating] = useState("");
  const [costForTwo, setCostForTwo] = useState("");
  const [cloudinaryImageId, setCloudinaryImageId] = useState("");
  const [row, setRow] = useState([]);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      const response = await db.Restaurants.list();
      setRow(response.documents);
    } catch (error) {
      console.error("Failed to fetch documents:", error);
      setRow([]);
    }
  };
  const emptyFunction = () => {
    setName("");
    setCuisines([]);
    setRating("");
    setCostForTwo("");
    setCloudinaryImageId("");
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const Restaurants = {
      name,
      cuisines,
      rating: parseFloat(rating),
      costForTwo,
      cloudinaryImageId,
    };
    console.log(Restaurants);
    try {
      const response = await db.Restaurants.create(Restaurants);
      fetchData();
      console.log(response, "response");
      emptyFunction();
    } catch (error) {
      console.error(error);
    }
  };

  function handleCuisinesChange(e) {
    const options = Array.from(e.target.selectedOptions);
    setCuisines(options.map((option) => option.value));
  }
  return (
    <div className="container">
      <h2>Add Restaurant</h2>
      <form onSubmit={handleSubmit}>
        <div className="form-row">
          <div className="form-field">
            <label htmlFor="name">Restaurant Name</label>
            <input
              type="text"
              id="name"
              name="name"
              required
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
          </div>
          <div className="form-field">
            <label htmlFor="cuisines">Cuisines</label>
            <select
              id="cuisines"
              name="cuisines"
              multiple
              required
              value={cuisines}
              onChange={handleCuisinesChange}
            >
              <option value="Momos">Momos</option>
              <option value="Chinese">Chinese</option>
              <option value="Snacks">Snacks</option>
              <option value="Fast Food">Fast Food</option>
              <option value="Indian">Indian</option>
              <option value="North Indian">North Indian</option>
            </select>
          </div>
          <div className="form-field">
            <label htmlFor="rating">Rating</label>
            <input
              type="number"
              id="rating"
              name="rating"
              step="0.1"
              min="0"
              max="5"
              required
              value={rating}
              onChange={(e) => setRating(e.target.value)}
            />
          </div>
          <div className="form-field">
            <label htmlFor="costForTwo">Cost for Two</label>
            <input
              type="text"
              id="costForTwo"
              name="costForTwo"
              required
              value={costForTwo}
              onChange={(e) => setCostForTwo(e.target.value)}
            />
          </div>
          <div className="form-field">
            <label htmlFor="cloudinaryImageId">Cloudinary Image ID</label>
            <input
              type="text"
              id="cloudinaryImageId"
              name="cloudinaryImageId"
              required
              value={cloudinaryImageId}
              onChange={(e) => setCloudinaryImageId(e.target.value)}
            />
          </div>
          <div className="form-field full-width">
            <button type="submit">Add Restaurant</button>
          </div>
        </div>
      </form>
      <CardTable rows={row} />
    </div>
  );
};

export default AddRestaurant;
