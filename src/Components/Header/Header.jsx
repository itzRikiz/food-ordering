import { useContext } from "react";
import { Link } from "react-router-dom";
import { UserContext } from "../../utils/UserContext.jsx";
// import { CartContext } from "../../utils/CartContext";
import { account } from "../../appwrite/config";
import { toast } from "react-toastify";
import PositionedMenu from "../Common/PositionedMenu.jsx";
import { useSelector } from "react-redux";

function Header() {
  const { user, setUser } = useContext(UserContext);
  // const CartData = useContext(CartContext);

  const handleLogout = async () => {
    try {
      await account.deleteSession("current");
      toast.success("Logged Out");
      setUser(null);
    } catch (error) {
      toast.error(error);
    }
  };

  const CartItem = useSelector((store) => store.cart.items);

  return (
    <header className="bg-transparent fixed shadow-md top-0 w-full h-16 z-[1000]">
      <div className="container mx-auto px-4 py-4">
        <div className="flex justify-between items-center">
          <div className="flex items-center ">
            <Link
              to="/"
              className="text-2xl font-bold hover:text-outline  text-white"
            >
              Home
            </Link>
            <div className="ml-6 flex items-center">
              <span className="text-gray-600 hover:text-outline">
                Basirhat, India
              </span>
              <span className="ml-2 text-gray-600">
                <i className="fa-solid fa-angle-down"></i>
              </span>
            </div>
          </div>
          <div>
            <ul className="flex space-x-6">
              {/* <li>
                <div className="nav-item">
                  <input
                    type="search"
                    id="search"
                    className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-green-400"
                    placeholder="Type to Search"
                  />
                </div>
              </li> */}
              <li>
                <div className="nav-item">
                  <span className="text-white font-semibold hover:text-outline cursor-pointer">
                    Offers
                  </span>
                </div>
              </li>
              <li>
                <div className="nav-item">
                  <Link
                    to="/add-restaurant"
                    className="text-white font-semibold hover:text-outline"
                  >
                    <span>Add Restaurant Info</span>
                  </Link>
                </div>
              </li>
              {!user ? (
                <>
                  <li>
                    <div className="nav-item">
                      <Link
                        to="/login"
                        className="text-white font-semibold hover:text-outline"
                      >
                        <span>Sign In</span>
                      </Link>
                    </div>
                  </li>
                  {/* <li>
                    <div className="nav-item">
                      <Link to="/signup" className="text-gray-800">
                        <span>Sign Up</span>
                      </Link>
                    </div>
                  </li> */}
                </>
              ) : (
                <>
                  <li>
                    <PositionedMenu user={user} handleLogout={handleLogout} />
                  </li>
                </>
              )}
              <li>
                <div className="nav-item">
                  <Link to="/cart-page" className="text-gray-800">
                    <span className="text-white font-semibold hover:text-outline">
                      Cart{" "}
                      <span className="text-white bg-green-700 rounded-lg h-5 w-5">
                        {/* {CartData.cart.length} */}
                        {CartItem.length}
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
