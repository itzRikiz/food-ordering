import "./header.css";
import { LOGO_URL } from "../../utils/constantData";
import { Link } from "react-router-dom";
function Header() {
  return (
    <div>
      <div className="header">
        <div>
          <img className="res-logo" src={LOGO_URL} alt="res-logo" />
        </div>
        <div className="nav">
          <ul>
            <Link to="/add-restaurant">Add Restaurant Info</Link>
            <Link to="/">Home</Link>
            <Link to="/about">About</Link>
            <li>Contact Us</li>
            <li>Cart</li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Header;
