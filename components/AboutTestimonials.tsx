import React from 'react';

const AboutTestimonials: React.FC = () => {
  return (
    <section className="bg-gray-800 py-8">
      <div className="container mx-auto px-4 text-center max-w-7xl">
        <h2 className="text-3xl font-bold mb-4">What Our Users Say</h2>
        <div className="flex flex-wrap justify-center">
          <div className="w-full md:w-1/2 lg:w-1/3 p-4">
            <div className="bg-white p-6 rounded-lg shadow-lg">
              <p className="text-gray-700">"Chatter has transformed the way I engage with content. The platform's collaborative features have allowed me to connect with like-minded creators and readers."</p>
              <h3 className="text-lg font-semibold mt-4">- User Name</h3>
            </div>
          </div>
          <div className="w-full md:w-1/2 lg:w-1/3 p-4">
            <div className="bg-white p-6 rounded-lg shadow-lg">
              <p className="text-gray-700">"As an author, Chatter has been an incredible tool for sharing my work and receiving feedback from a supportive community."</p>
              <h3 className="text-lg font-semibold mt-4">- User Name</h3>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutTestimonials;
