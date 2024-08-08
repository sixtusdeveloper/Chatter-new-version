import React from 'react';

const AboutMission: React.FC = () => {
  return (
    <section className="bg-black-200 py-12">
      <div className="container mx-auto px-4 mb-8 md:mb-8 text-center md:max-w-2xl max-w-4xl">
        <h2 className="text-[2.7rem] py-2 font-bold tracking-wider text-white sm:text-[2.7rem]">Our <span className="text-purple">Mission</span></h2>
        <p className="text-md leading-7 text-center p-2 text-gray-100">
          At Chatter, our mission is to create a space where knowledge meets creativity. We aim to empower authors to share their stories, facilitate dynamic discussions, and inspire our community with valuable insights.
        </p>
      </div>
    </section>
  );
};

export default AboutMission;
