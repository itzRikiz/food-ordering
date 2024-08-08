import { Link } from "react-router-dom";
import { useContext } from "react";
import userContext from "../../utils/userContext";
import { CartContext } from "../../utils/CartContext";

function Header() {
  const {loggedInUser} = useContext(userContext);
  const CartData = useContext(CartContext);
  return (
    <header className="bg-white shadow-lg  fixed top-0 w-full h-16 z-[1000]">
      <div className="container mx-auto px-4 py-4">
        <div className="flex justify-between items-center">
          <div className="flex items-center">
            <Link to="/" className="text-2xl font-bold text-gray-800">
              {/* <img src={image}></img> */}
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
              {!loggedInUser ? (
                <>
                  <li>
                    <div className="nav-item">
                      <Link to="/login" className="text-gray-800">
                        <span>Login</span>
                      </Link>
                    </div>
                  </li>
                  <li>
                    <div className="nav-item">
                      <Link to="/signup" className="text-gray-800">
                        <span>Sign Up</span>
                      </Link>
                    </div>
                  </li>
                </>
              ) : (
                <li>
                  <div className="nav-item">
                    <Link to="/profile" className="text-gray-800">
                      <span>Profile</span>
                    </Link>
                  </div>
                </li>
              )}
              {/* <li>
                <div className="nav-item">
                  <Link to="/signup" className="text-gray-800">
                    <span>Sign Up</span>
                  </Link>
                </div>
              </li> */}
              <li>
                <div className="nav-item">
                  <Link to="/cart-page" className="text-gray-800">
                    <span className="text-gray-800">
                      Cart{" "}
                      <span className="text-white bg-green-700  rounded-lg h-5 w-5  ">
                        {CartData.cart.length}
                      </span>
                    </span>
                  </Link>
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
