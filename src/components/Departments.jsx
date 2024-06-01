import React from 'react';

const departments = [
  { name: 'Trauma Care', gradient: 'from-yellow-400 to-orange-500' },
  { name: 'Pediatric & Newborn', gradient: 'from-pink-400 to-red-500' },
  { name: 'Cardiology', gradient: 'from-red-400 to-purple-500' },
  { name: 'Hand Surgery', gradient: 'from-green-400 to-teal-500' },
  { name: 'Dermatology', gradient: 'from-blue-400 to-indigo-500' },
  { name: 'Diabetology', gradient: 'from-purple-400 to-pink-500' },
  { name: 'ENT', gradient: 'from-teal-400 to-green-500' },
];

const Departments = () => {
  return (
    <section id="departments" className="bg-gray-100 py-20">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-8">Departments</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 justify-center">
          {departments.map((department, index) => (
            <div
              key={index}
              className={`m-4 p-4 bg-gradient-to-r ${department.gradient} text-white shadow-lg rounded-lg text-center`}
            >
              <h3 className="text-lg font-semibold">{department.name}</h3>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Departments;
