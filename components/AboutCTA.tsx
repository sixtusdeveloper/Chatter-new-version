import React from 'react';
import MagicButton from './ui/MagicButton';
import Link from 'next/link';

const AboutCTA: React.FC = () => {
  return (
    <section className="bg-black-100 py-10">
      <div className="container mx-auto px-4 text-center max-w-2xl">
        <h2 className="text-[2.6rem] font-bold tracking-wider text-white text-center sm:text-[2.8rem] mb-4">Join <span className='text-purple'>Us</span></h2>
        <p className="text-md mb-4 leading-7">
          Ready to dive into the world of Chatter? Sign up today to start exploring content, connecting with authors, and becoming part of our vibrant community.
        </p>
        <div className="flex flex-col py-4 md:flex-row justify-center items-center mb-2 space-y-4 md:space-y-0 md:space-x-4">
          <Link href="/create-post" legacyBehavior>
            <a rel="noopener noreferrer">
              <MagicButton 
                title="Join Now" 
                otherClasses='text-[1.3rem] flex justify-center items-center text-center'
              />
            </a>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default AboutCTA;
