import React from 'react';

const AboutVision: React.FC = () => {
  return (
    <section className="bg-gray-900 py-12">
      <div className="container mx-auto px-4 text-center max-w-4xl md:max-w-2xl">
        <h2 className="text-[2.6rem] py-4 font-bold tracking-wider text-white sm:text-[2.8rem]">Our <span className="text-purple">Vision</span></h2>
        <p className="text-md  leading-7 text-center text-gray-100 pb-6">
          We envision Chatter as a global hub for collaboration and inspiration. Our goal is to continuously enhance our platform to provide an unparalleled experience for authors and readers.
        </p>
      </div>
    </section>
  );
};

export default AboutVision;
