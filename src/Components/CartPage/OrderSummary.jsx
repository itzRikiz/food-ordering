import { useState, useEffect } from "react";
import Checkbox from "@mui/material/Checkbox";
import Button from "@mui/material/Button";
import { useSelector } from "react-redux";

function OrderSummary() {
  const cart = useSelector((store) => store.cart.items);
  const [groupedCart, setGroupedCart] = useState([]);

  useEffect(() => {
    const groupedItems = cart.reduce((acc, item) => {
      const existingItems = acc.find((i) => i.dish_name === item.dish_name);
      if (existingItems) {
        existingItems.quantity += 1;
      } else {
        acc.push({ ...item, quantity: 1 });
      }
      return acc;
    }, []);
    setGroupedCart(groupedItems);
  }, [cart]);

  const handleQuantityChange = (index, amount) => {
    const newGroupedCart = [...groupedCart];
    newGroupedCart[index].quantity += amount;
    if (newGroupedCart[index].quantity < 0) {
      newGroupedCart[index].quantity = 0;
    }
    setGroupedCart(newGroupedCart);
  };

  return (
    <div className="p-4 bg-gray-50 shadow-md rounded-lg">
      <h4 className="text-lg font-medium">
        {groupedCart[0]?.restaurant_name || "Unknown Restaurant"}
      </h4>
      {groupedCart.map((item, index) => (
        <div key={index} className="flex justify-between items-center mt-4">
          <span>{item.dish_name || "Unknown Dish"}</span>
          <div className="flex items-center">
            <button
              className="bg-gray-200 text-gray-600 hover:bg-gray-300 px-3 py-2 rounded-l"
              onClick={() => handleQuantityChange(index, -1)}
            >
              -
            </button>
            <input
              type="number"
              className="w-16 text-center border-t border-b border-gray-300 outline-none"
              value={item.quantity}
              readOnly
            />
            <button
              className="bg-gray-200 text-gray-600 hover:bg-gray-300 px-3 py-2 rounded-r"
              onClick={() => handleQuantityChange(index, 1)}
            >
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
