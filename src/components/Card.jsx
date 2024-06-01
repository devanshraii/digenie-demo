import React from 'react';

const Card = ({ title, description }) => {
  return (
    <div className="bg-white p-6 rounded-lg shadow-lg transform hover:bg-blue-500 transition duration-300 ease-in-out group">
      <h3 className=" text-gray-700text-2xl font-bold mb-2 group-hover:text-white">{title}</h3>
      <p className="text-gray-700 group-hover:text-white">{description}</p>
      <div className="text-right mt-4">
        <span className="text-blue-500 group-hover:text-white">&rarr;</span>
      </div>
    </div>
  );
};

export default Card;
