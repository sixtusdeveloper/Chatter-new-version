import React from 'react';

const AboutStory: React.FC = () => {
  return (
    <section className="bg-black-100 py-8">
      <div className="container mx-auto px-4 text-center py-6 md:py-12 max-w-3xl">
        <h2 className="text-[2.6rem] font-bold tracking-wider text-white text-center sm:text-[2.8rem] mb-4">Our&nbsp;<span className="text-purple">Story</span></h2>
        <p className="text-md leading-8 tracking-wide">
          Chatter was born out of a passion for storytelling and community. Our journey began with a simple idea: to create a platform where writers and readers could connect more meaningfully. What started as a small project has grown into a vibrant community, thanks to the support of our users and the dedication of our team.
        </p>
      </div>
    </section>
  );
};

export default AboutStory;
