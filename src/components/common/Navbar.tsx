import React from "react";
import { Link } from "react-router-dom";

const Navbar: React.FC = () => {
  return (
    <nav className="bg-blue-500 p-4 text-white">
      <div className="max-w-7xl mx-auto flex justify-between items-center">
        <Link to="/" className="text-xl font-bold">Blog</Link>
        <div>
          <Link to="/home" className="ml-4 hover:text-gray-300">Home</Link>
          <Link to="/blog" className="ml-4 hover:text-gray-300">Blog</Link>
          <Link to="/profile" className="ml-4 hover:text-gray-300">Profile</Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
