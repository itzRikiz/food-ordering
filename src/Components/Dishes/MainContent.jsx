import { addItem } from "../../Redux/CartSlice/CartSlice";
import { useDispatch } from "react-redux";

function MainContent({ category }) {
  const dispatch = useDispatch();
  const addToCart = (dish) => {
    dispatch(addItem(dish));
  };

  if (!category) {
    return <div className="w-3/4 p-4">Select a category to see the dishes</div>;
  }

  return (
    <div className="w-3/4 p-5 shadow-lg bg-white">
      {category.map((dish) => (
        <div key={dish.$id} className="mb-6 flex items-center border-b pb-6">
          <img
            className="w-28 h-28 object-cover rounded-lg mr-4"
            src={dish.img_url}
            alt={dish.dish_name}
          />
          <div className="flex-1">
            <h3 className="text-xl font-semibold">{dish.dish_name}</h3>
            <p className="text-gray-800 font-medium mt-2">₹{dish.price}</p>
            <div className="flex items-center mt-2">
              <span className="text-yellow-500">{dish.rating}★</span>
              <span className="ml-2 text-gray-500">({dish.votes} votes)</span>
            </div>
          </div>
          <button
            onClick={() => addToCart(dish)}
            className="ml-auto px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition"
          >
            Add to Cart
          </button>
        </div>
      ))}
    </div>
  );
}

export default MainContent;
