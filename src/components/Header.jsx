import React from 'react';

const Header = () => {
  return (
    <header className="bg-white shadow">
      <div className="container mx-auto px-4 py-4 flex flex-col md:flex-row md:justify-between md:items-center">
        <div className="text-xl font-bold text-blue-600 md:text-2xl">SRI HOSPITALS</div>
        <nav className="mt-4 md:mt-0">
          <a href="#home" className="block px-4 text-gray-700 hover:text-blue-600 md:inline-block md:px-2 md:text-sm">Home</a>
          <a href="#departments" className="block px-4 text-gray-700 hover:text-blue-600 md:inline-block md:px-2 md:text-sm">Departments</a>
          <a href="#facilities" className="block px-4 text-gray-700 hover:text-blue-600 md:inline-block md:px-2 md:text-sm">Facilities</a>
          <a href="#blogs" className="block px-4 text-gray-700 hover:text-blue-600 md:inline-block md:px-2 md:text-sm">Blogs</a>
          <a href="#careers" className="block px-4 text-gray-700 hover:text-blue-600 md:inline-block md:px-2 md:text-sm">Careers</a>
        </nav>
      </div>
    </header>
  );
};

export default Header;
