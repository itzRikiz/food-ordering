import { useContext } from "react";
import { CartContext } from "../../utils/CartContext";

function MainContent({ category }) {
  const { setCart } = useContext(CartContext);
  const addToCart = (dish) => {
    setCart((prevCart) => [...prevCart, dish]);
  };

  if (!category) {
    return <div className="w-3/4 p-4">Select a category to see the dishes</div>;
  }

  return (
    <div className="w-3/4 p-4 shadow-lg">
      {category.map((dish) => (
        <div key={dish.$id} className="mb-6 flex items-center border-b pb-6">
          <img
            className="w-28 h-28 object-cover rounded-lg mr-4"
            src={
              dish.image ||
              "https://images.unsplash.com/photo-1496116218417-1a781b1c416c?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            }
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
