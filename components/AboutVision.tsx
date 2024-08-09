import React from 'react';
import { Spotlight } from './ui/Spotlight';

const AboutVision: React.FC = () => {
  return (
    <section className="bg-black-100 py-12 relative overflow-hidden">
      {/* Adjusted Spotlight colors */}
      <Spotlight className="absolute top-1/2 right-0 transform translate-x-1/2 -translate-y-1/2 h-[90vh] w-[120vw]" fill="rgba(255, 215, 0, 0.3)" /> {/* Gold Spotlight */}
      <Spotlight className="absolute top-1/2 right-0 transform translate-x-1/2 -translate-y-1/2 h-[80vh] w-[100vw]" fill="rgba(0, 255, 255, 0.2)" /> {/* Cyan Spotlight */}

      <div className="container mx-auto px-4 text-center max-w-4xl md:max-w-2xl relative z-10">
        <h2 className="text-[2.6rem] py-4 font-bold tracking-wider text-white sm:text-[2.8rem]">
          Our <span className="text-purple">Vision</span>
        </h2>
        <p className="text-md leading-7 text-center text-gray-100 pb-6">
          We envision Chatter as a global hub for collaboration and inspiration. Our goal is to continuously enhance our platform to provide an unparalleled experience for authors and readers.
        </p>
      </div>
    </section>
  );
};

export default AboutVision;
