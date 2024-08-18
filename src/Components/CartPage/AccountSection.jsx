import Button from "@mui/material/Button";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import { useNavigate } from "react-router-dom";

function AccountSection() {
  const navigate = useNavigate();
  const handleLoginClick = () => {
    navigate("/login");
  };
  const handleSignUpClick = () => {
    navigate("/signup");
  };
  return (
    <div className="p-4 border-b">
      <div className="flex items-center mb-4">
        <AccountCircleIcon fontSize="large" />
        <h3 className="ml-2 text-xl">Account</h3>
      </div>
      <p>
        To place your order now, log in to your existing account or sign up.
      </p>
      <div className="mt-4 flex space-x-2">
        <Button variant="outlined" color="success" onClick={handleLoginClick}>
          Log In
        </Button>
        <Button variant="contained" color="success" onClick={handleSignUpClick}>
          Sign Up
        </Button>
      </div>
    </div>
  );
}

export default AccountSection;
