import React from 'react';
import Card from './Card';

const AboutUs = () => {
  return (
    <section id="about-us" className="py-20">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-8">About Us</h2>
        <p className="text-gray-700 leading-loose mb-8">
          Sri Hospitals Is A Multi-Specialty Hospital In Tondiarpet, Chennai That Offers High-Quality Treatment Through State-Of-The-Art Technology And Skilled Consultants. With Quality Infrastructure And The Latest Medical Technology Our Goal Is To Make Every Patient Who Comes To Us Believe In Our Motto We Care, We Heal, We Lead. From Orthopedics To Pediatric Care, Sri Hospitals Offers A Wide Range Of Treatments To Patients Of All Age Groups. This Medical Institution Is Also A 24/7 Accident And Emergency Hospital In Tondiarpet, Chennai. Trust Us To Treat You With Compassion, Empathy, And Care.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <Card 
            title="Our Mission" 
            description="To Be A Dynamic Center For Medical Excellence That Always Serves Patients With Commitment, Care And Compassion. To Surpass Patient Expectations Through Exceptional Service And Deliver Impressive Clinical Outcomes. To Be A World-Class Trauma Care Centre That Believes In Putting The Patient’s Well-Being At The Forefront."
          />
          <Card 
            title="Our Vision" 
            description="To Be An Ethical, Efficient And Empathetic Institution That Impacts Our Patient’s Lives Positively. To Bring In Innovative And Successful Treatments That Could Deliver The Best Outcome For Our Patients. To Be A True Leader That Has The Welfare Of The Community We Serve, At Its Heart."
          />
          <Card 
            title="Quality Policy" 
            description="We Constantly Seek To Enhance The Knowledge Of Our Medical And Nursing Personnel. We Actively Encourage Them To Update Themselves About Innovative Medical Practices And Also Incorporate The Most Cutting-Edge Technology Available."
          />
        </div>
      </div>
    </section>
  );
};

export default AboutUs;
