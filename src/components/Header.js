import { logo_url } from "../utils/constants";
import { useState } from "react";
import { Link } from "react-router-dom";

const Header = () => {
  const [changeButton, setChangeButton] = useState("Login");

  const loginButtonHandler = () => {
    setChangeButton(changeButton === "Login" ? "Logout" : "Login");
  };

  return (
    <header className="bg-white shadow-md">
      <div className="max-w-7xl mx-auto flex items-center justify-between py-4 px-6">
        {/* Logo */}
        <div className="flex-shrink-0">
          <img className="h-20 w-auto" src={logo_url} alt="Logo" />
        </div>

        {/* Navigation Links */}
        <nav className="flex-grow flex justify-end">
          <ul className="flex space-x-8 text-gray-600 font-medium items-center">
            <li>
              <Link
                to="/"
                className="hover:text-blue-600 transition duration-200"
              >
                Home
              </Link>
            </li>
            <li>
              <Link
                to="/about"
                className="hover:text-blue-600 transition duration-200"
              >
                About Us
              </Link>
            </li>
            <li>
              <Link
                to="/contact"
                className="hover:text-blue-600 transition duration-200"
              >
                Contact Us
              </Link>
            </li>
            <li>
              <Link
                to="/grocery"
                className="hover:text-blue-600 transition duration-200"
              >
                Grocery
              </Link>
            </li>
            <li className="hover:text-blue-600 transition duration-200">
              Cart
            </li>
          </ul>
        </nav>

        {/* Login/Logout Button */}
        <button
          onClick={loginButtonHandler}
          className="bg-blue-500 hover:bg-blue-600 text-white font-semibold py-2 px-4 rounded-lg transition duration-200 ml-4"
        >
          {changeButton}
        </button>
      </div>
    </header>
  );
};

export default Header;
