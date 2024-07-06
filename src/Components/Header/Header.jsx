import "./header.css";
// import { LOGO_URL } from "../../utils/constantData";
import { Link } from "react-router-dom";
function Header() {
  return (
    <header className="navbar">
      <div className="global-nav">
        <div className="nav">
          <div className="left">
            <Link to="/" className="logo">
              <b>Logo</b>
            </Link>
            <div className="location-div">
              <span className="location">Basirhat, India</span>
              <span className="arrow-down">
                <i className="fa-solid fa-angle-down"></i>
              </span>
            </div>
          </div>
          <div className="right">
            <ul className="items">
              <li>
                <div className="nav-item">
                  <span>Search</span>
                </div>
              </li>
              <li>
                <div className="nav-item">
                  <span>Offers</span>
                </div>
              </li>
              <li>
                <div className="nav-item">
                  <Link to="/add-restaurant">
                    <span>Add Restaurant Info</span>
                  </Link>
                </div>
              </li>
              <li>
                <div className="nav-item">
                  <span>Sign In</span>
                </div>
              </li>
              <li>
                <div className="nav-item">
                  <span>Cart</span>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </header>
  );
}

export default Header;
