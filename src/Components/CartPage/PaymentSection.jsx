import CreditCardIcon from "@mui/icons-material/CreditCard";
import Button from "@mui/material/Button";

function PaymentSection() {
  return (
    <div className="p-4 border-b">
      <div className="flex items-center mb-4">
        <CreditCardIcon fontSize="large" />
        <h3 className="ml-2 text-xl">Payment</h3>
      </div>
      <Button variant="outlined" color="primary">
        Add Payment Method
      </Button>
      {/* You can list existing payment methods here */}
    </div>
  );
}

export default PaymentSection;
