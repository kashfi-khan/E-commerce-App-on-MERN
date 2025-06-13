import React from "react";
import { Link, useNavigate } from "react-router-dom";

const Navbar = () => {
  const auth = localStorage.getItem("user");
  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.clear();
    navigate("/signup");
  };

  return (
    <div className="bg-gradient-to-r from-indigo-700 via-purple-700 to-pink-700 shadow-lg">
      <div className="container mx-auto flex items-center justify-between p-4">
        {/* Logo */}
        <div className="text-3xl font-extrabold bg-gradient-to-r from-yellow-400 via-yellow-300 to-yellow-500 bg-clip-text text-transparent drop-shadow-lg hover:drop-shadow-2xl transition duration-300 ease-in-out cursor-pointer">
          Khan Store
        </div>

        {/* Nav Links */}
        <ul className="flex space-x-10 font-mono text-white text-lg pr-4">
          <li>
            <Link to="/" className="hover:text-yellow-300 transition duration-300">
              Products
            </Link>
          </li>
          <li>
            <Link to="/add" className="hover:text-yellow-300 transition duration-300">
              Add Products
            </Link>
          </li>
          <li>
            <Link to="/update" className="hover:text-yellow-300 transition duration-300">
              Update Products
            </Link>
          </li>
          <li>
            <Link to="/profile" className="hover:text-yellow-300 transition duration-300">
              Profile
            </Link>
          </li>

          {/* Auth Links */}
          {auth ? (
            <li>
              <Link to="/signup" onClick={handleLogout} className="hover:text-yellow-300 transition duration-300">
                Logout
              </Link>
            </li>
          ) : (
            <>
              <li>
                <Link to="/signup" className="hover:text-yellow-300 transition duration-300">
                  SignUp
                </Link>
              </li>
              <li>
                <Link to="/login" className="hover:text-yellow-300 transition duration-300">
                  Login
                </Link>
              </li>
            </>
          )}
        </ul>
      </div>
    </div>
  );  
};

export default Navbar;
