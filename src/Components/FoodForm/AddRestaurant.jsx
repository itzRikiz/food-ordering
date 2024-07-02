import "./addRestaurant.css";
const AddRestaurant = () => {
  return (
    <div className="container">
      <h2>Add Restaurant</h2>
      <form>
        <div className="form-row">
          <div className="form-field">
            <label htmlFor="name">Restaurant Name</label>
            <input type="text" id="name" name="name" required />
          </div>
          <div className="form-field">
            <label htmlFor="cuisines">Cuisines</label>
            <select id="cuisines" name="cuisines" multiple required>
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
            />
          </div>
          <div className="form-field">
            <label htmlFor="costForTwo">Cost for Two</label>
            <input type="text" id="costForTwo" name="costForTwo" required />
          </div>
          <div className="form-field">
            <label htmlFor="cloudinaryImageId">Cloudinary Image ID</label>
            <input
              type="text"
              id="cloudinaryImageId"
              name="cloudinaryImageId"
              required
            />
          </div>
          <div className="form-field full-width">
            <button type="submit">Add Restaurant</button>
          </div>
        </div>
      </form>
    </div>
  );
};

export default AddRestaurant;
