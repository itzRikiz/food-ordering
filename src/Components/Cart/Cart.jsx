import AccountSection from "../CartPage/AccountSection";
import DeliveryAddressSection from "../CartPage/DeliveryAddressSection";
import PaymentSection from "../CartPage/PaymentSection";
import OrderSummary from "../CartPage/OrderSummary";

function Cart() {
  return (
    <div className="flex p-4 justify-around mt-28 bg-gray">
      <div className="flex-grow max-w-md mr-8">
        <AccountSection />
        <DeliveryAddressSection />
        <PaymentSection />
      </div>
      <div className="w-80">
        <OrderSummary />
      </div>
    </div>
  );
}

export default Cart;
