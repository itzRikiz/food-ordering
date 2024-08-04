import LocationOnIcon from "@mui/icons-material/LocationOn";
import Button from "@mui/material/Button";

function DeliveryAddressSection() {
  return (
    <div className="p-4 border-b">
      <div className="flex items-center mb-4">
        <LocationOnIcon fontSize="large" />
        <h3 className="ml-2 text-xl">Delivery Address</h3>
      </div>
      <Button variant="outlined" color="primary">
        Add New Address
      </Button>
      {/* If you have existing addresses, you can list them here */}
    </div>
  );
}

export default DeliveryAddressSection;
