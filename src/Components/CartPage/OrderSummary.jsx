import Checkbox from "@mui/material/Checkbox";
import Button from "@mui/material/Button";

function OrderSummary() {
  return (
    <div className="p-4 bg-gray-50 shadow-md rounded-lg">
      <h4 className="text-lg font-medium">Food Hub</h4>
      <div className="flex justify-between items-center mt-4">
        <span>Veg Main Course</span>
        <span>₹2250</span>
      </div>
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
