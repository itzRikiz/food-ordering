import { Link } from "react-router-dom";

function Footer() {
  return (
    <footer className="relative bg-eggplant text-cream py-8">
      {/* Gradient Background */}
      <div className="absolute inset-0 bg-gradient-to-r from-transparent to-purple-800 opacity-60"></div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h3 className="text-xl font-semibold mb-4">FoodieHub</h3>
            <p className="text-sage text-sm md:text-base">
              Discover and order the best food from restaurants in your area.
            </p>
          </div>

          <div>
            <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li>
                <Link
                  to="/about"
                  className="text-sage hover:text-orange text-sm md:text-base"
                >
                  About Us
                </Link>
              </li>
              <li>
                <Link
                  to="/contact"
                  className="text-sage hover:text-orange text-sm md:text-base"
                >
                  Contact
                </Link>
              </li>
              <li>
                <Link
                  to="/faq"
                  className="text-sage hover:text-orange text-sm md:text-base"
                >
                  FAQs
                </Link>
              </li>
              <li>
                <Link
                  to="/partner"
                  className="text-sage hover:text-orange text-sm md:text-base"
                >
                  Partner with us
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-semibold mb-4">Follow Us</h4>
            <div className="flex space-x-4">
              <a
                href="#"
                className="text-sage hover:text-orange text-sm md:text-base"
              >
                Facebook
              </a>
              <a
                href="#"
                className="text-sage hover:text-orange text-sm md:text-base"
              >
                Twitter
              </a>
              <a
                href="#"
                className="text-sage hover:text-orange text-sm md:text-base"
              >
                Instagram
              </a>
            </div>
          </div>
        </div>

        <div className="mt-8 pt-8 border-t border-sage text-center text-sage">
          <p className="text-sm md:text-base">
            &copy; 2025 FoodieHub. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
