import React from 'react';
import { FaRocket, FaUsers, FaCogs, FaStar } from 'react-icons/fa'; // Example icons, replace with your own

const features = [
  {
    id: 1,
    icon: <FaRocket className="text-4xl text-purple-500" />, // Example icon
    title: 'Interactive Content',
    description: 'Dive into articles, stories, and posts created by our talented authors.',
  },
  {
    id: 2,
    icon: <FaUsers className="text-4xl text-purple-500" />, // Example icon
    title: 'Collaborative Tools',
    description: 'Engage in discussions, provide feedback, and connect with other users.',
  },
  {
    id: 3,
    icon: <FaCogs className="text-4xl text-purple-500" />, // Example icon
    title: 'Personalized Experience',
    description: 'Discover content tailored to your interests and preferences.',
  },
  {
    id: 4,
    icon: <FaStar className="text-4xl text-purple-500" />, // Example icon
    title: 'Community Engagement',
    description: 'Join a thriving community of readers and creators.',
  },
];

const AboutFeatures: React.FC = () => {
  return (
    <section className="relative py-8 bg-cover bg-center" style={{ backgroundImage: "url('/socials05.jpg')" }}>
      <div className="absolute inset-0 bg-gradient-to-r from-black via-gray-800 to-black opacity-60"></div>
      <div className="text-center relative container mx-auto px-4 max-w-7xl z-10">
        <h2 className="text-[2.6rem] py-10 mb-4 font-bold tracking-wider text-white sm:text-[2.8rem]">Key <span className="text-purple">Features</span></h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8 text-center text-white">
          {features.map((feature) => (
            <div key={feature.id} className="bg-gray-800 rounded-lg p-6 shadow-lg flex flex-col items-center">
              <div className="mb-4">
                {feature.icon}
              </div>
              <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
              <p className='text-gray-300 text-md text-center p-2'>{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AboutFeatures;
