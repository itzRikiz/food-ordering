import Checkbox from "@mui/material/Checkbox";
import Button from "@mui/material/Button";
import { CartContext } from "../../utils/CartContext";
import { useContext } from "react";

function OrderSummary() {
  const {cart} = useContext(CartContext);

  // Check if data is available before accessing properties
  if (!cart || cart.length === 0) {
    return <div>No items in cart</div>;
  }

  return (
    <div className="p-4 bg-gray-50 shadow-md rounded-lg">
      <h4 className="text-lg font-medium">{cart[0]?.restaurant_name || 'Unknown Restaurant'}</h4>
      {cart.map((item,index)=>(
        <div key={index} className="flex justify-between items-center mt-4">
        <span>{item.dish_name || 'Unknown Dish'}</span>
        <div className="flex items-center">
          <button className="bg-gray-200 text-gray-600 hover:bg-gray-300 px-3 py-2 rounded-l">
            -
          </button>

          <input
            type="number"
            className="w-16 text-center border-t border-b border-gray-300 outline-none"
            value="0"
          />

          <button className="bg-gray-200 text-gray-600 hover:bg-gray-300 px-3 py-2 rounded-r">
            +
          </button>
        </div>
      </div>
      ))}
      
      <div className="mt-4">
        <p className="text-sm mb-2">Opt in for No-contact Delivery</p>
        <Checkbox />
      </div>
      <div className="mt-4 space-y-1">
        <div className="flex justify-between">
          <span>Item Total</span>
          <span>₹2250</span>
        </div>
        <div className="flex justify-between">
          <span>Delivery partner fee</span>
          <span>₹5</span>
        </div>
        <div className="flex justify-between">
          <span>Platform fee</span>
          <span>₹6</span>
        </div>
        <div className="flex justify-between">
          <span>GST and Restaurant Charges</span>
          <span>₹113.58</span>
        </div>
        <div className="flex justify-between font-bold">
          <span>TO PAY</span>
          <span>₹2375</span>
        </div>
      </div>
      <Button className="mt-4" variant="contained" color="primary" fullWidth>
        Checkout
      </Button>
    </div>
  );
}

export default OrderSummary;