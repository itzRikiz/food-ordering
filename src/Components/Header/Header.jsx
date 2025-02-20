import { useContext, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { UserContext } from "../../utils/UserContext.jsx";

import { toast } from "react-toastify";
import PositionedMenu from "../Common/PositionedMenu.jsx";
import { useSelector } from "react-redux";

function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isAdmin, setIsAdmin] = useState(false);
  const { user, setUser } = useContext(UserContext);
  const CartItem = useSelector((store) => store.cart.items);

  const handleLogout = async () => {
    try {
      toast.success("Logged Out");
      setUser(null);
    } catch (error) {
      toast.error(error.message);
    }
  };
  useEffect(() => {
    () => {
      const adminStatus = localStorage.getItem("admin");
      setIsAdmin(adminStatus);
    };
  }, []);

  return (
    <header className="bg-white shadow-sm">
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          <Link to="/" className="text-2xl font-bold text-eggplant">
            FoodieHub
          </Link>
          <div className="md:hidden">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="text-charcoal focus:outline-none"
            >
              <svg
                className="h-6 w-6"
                fill="none"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  d={
                    isMenuOpen
                      ? "M6 18L18 6M6 6l12 12"
                      : "M4 6h16M4 12h16M4 18h16"
                  }
                />
              </svg>
            </button>
          </div>
        </div>
        <nav className={`${isMenuOpen ? "block" : "hidden"} md:block `}>
          <div className="flex flex-col md:flex-row md:items-center md:justify-between">
            <ul className="md:flex md:space-x-6">
              <li>
                <Link
                  to="/cuisines"
                  className="block py-2 text-charcoal hover:text-eggplant"
                >
                  Cuisines
                </Link>
              </li>
              <li>
                <Link
                  to="/offers"
                  className="block py-2 text-charcoal hover:text-eggplant"
                >
                  Offers
                </Link>
              </li>
              {isAdmin && (
                <li>
                  <Link
                    to="/add-restaurant"
                    className="block py-2 text-charcoal hover:text-eggplant"
                  >
                    Add Restaurant Info
                  </Link>
                </li>
              )}

              {!user ? (
                <li>
                  <Link
                    to="/login"
                    className="block py-2 text-charcoal hover:text-eggplant"
                  >
                    Sign In
                  </Link>
                </li>
              ) : (
                <li>
                  <PositionedMenu user={user} handleLogout={handleLogout} />
                </li>
              )}
              <li>
                <Link
                  to="/cart-page"
                  className="block py-2 text-charcoal hover:text-eggplant"
                >
                  Cart{" "}
                  {CartItem.length > 0 && (
                    <span className="text-white bg-green-700 rounded-full px-2 py-1 text-xs">
                      {CartItem.length}
                    </span>
                  )}
                </Link>
              </li>
            </ul>
          </div>
        </nav>
      </div>
    </header>
  );
}

export default Header;
