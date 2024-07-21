import { Link } from "react-router-dom";

function Header() {
  return (
    <header className="bg-white shadow-xl w-full">
      <div className="container mx-auto px-4 py-4">
        <div className="flex justify-between items-center">
          <div className="flex items-center">
            <Link to="/" className="text-2xl font-bold text-gray-800">
              Logo
            </Link>
            <div className="ml-6 flex items-center">
              <span className="text-gray-600">Basirhat, India</span>
              <span className="ml-2 text-gray-600">
                <i className="fa-solid fa-angle-down"></i>
              </span>
            </div>
          </div>
          <div>
            <ul className="flex space-x-6">
              <li>
                <div className="nav-item">
                  <span className="text-gray-800">Search</span>
                </div>
              </li>
              <li>
                <div className="nav-item">
                  <span className="text-gray-800">Offers</span>
                </div>
              </li>
              <li>
                <div className="nav-item">
                  <Link to="/add-restaurant" className="text-gray-800">
                    <span>Add Restaurant Info</span>
                  </Link>
                </div>
              </li>
              <li>
                <div className="nav-item">
                  <span className="text-gray-800">Sign In</span>
                </div>
              </li>
              <li>
                <div className="nav-item">
                  <span className="text-gray-800">Cart</span>
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
