import React from 'react';
import Card from './Card';

const HeroSection = () => {
  return (
    <section id="home" className="bg-gradient-to-r from-blue-500 to-green-500 text-white py-20">
      <div className="container mx-auto px-4 text-center">
        <h1 className="text-5xl font-bold mb-8">We Care, We Heal, We Lead</h1>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <Card 
            title="Cardiology" 
            description="Evidence-Based Treatment For Multiple Cardiac Problems With Cutting-Edge Technology By Our Highly Knowledgeable Cardiac Consultants."
          />
          <Card 
            title="Interventional Radiology" 
            description="Equipped With Artificial Intelligence For Image-Guided Diagnosis And Treatment Of Various Diseases With Less Risk And Faster Recovery."
          />
          <Card 
            title="New Born & Pediatric Care" 
            description="Provides A Wide Range Of Services From Routine Check-Ups To Immunizations And Cater To The Unique Needs Of Infants, Children And Adolescents."
          />
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
