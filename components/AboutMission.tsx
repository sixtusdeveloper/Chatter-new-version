import React from 'react';
import { Spotlight } from './ui/Spotlight';

const AboutMission: React.FC = () => {
  return (
    <section className="bg-black-200 py-12 relative overflow-hidden" id="mission">
      <Spotlight className="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-1/2 h-[40vh] w-[40vw]" fill="white" />
      <Spotlight className="absolute top-0 left-1/2 transform -translate-x-1/2 translate-y-20 h-[50vh] w-[50vw]" fill="purple" />
      <Spotlight className="absolute top-0 left-1/2 transform -translate-x-1/2 translate-y-36 h-[50vh] w-[50vw]" fill="blue" />

      <div className="h-screen w-full dark:bg-black-100 bg-white dark:bg-grid-white/[0.03] bg-grid-black/[0.2] absolute flex items-center justify-center top-0 left-0">
        <div className="absolute pointer-events-none inset-0 flex items-center justify-center dark:bg-black-100 bg-white [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)]" />
      </div>

      <div className="container mx-auto px-4 mb-8 md:mb-8 text-center md:max-w-2xl max-w-4xl relative z-10">
        <h2 className="text-[2.7rem] py-2 font-bold tracking-wider text-white sm:text-[2.7rem]">
          Our <span className="text-purple">Mission</span>
        </h2>
        <p className="text-md leading-7 text-center p-2 text-gray-100">
          At Chatter, our mission is to create a space where knowledge meets creativity. We aim to empower authors to share their stories, facilitate dynamic discussions, and inspire our community with valuable insights.
        </p>
      </div>
    </section>
  );
};

export default AboutMission;
