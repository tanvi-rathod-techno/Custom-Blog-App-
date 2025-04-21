import React from "react";

const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-800 text-white py-6 mt-10">
      <div className="max-w-7xl mx-auto text-center">
        <p>&copy; {new Date().getFullYear()} Blog. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;




