import React from 'react';
import Link from 'next/link';
import MagicButton from './ui/MagicButton';
import { Spotlight } from './ui/Spotlight';
import { useUser } from '@clerk/nextjs';

const AboutIntroduction = () => {
  const { user, isSignedIn } = useUser();

  return (
    <div className="pb-2 pt-36" id="Hero">
      <div>
        <Spotlight className="-top-40 -left-10 md:-left-32 md:-top-20 h-screen" fill="white" />
        <Spotlight className="top-10 left-full h-[80vh] w-[50vw]" fill="purple" />
        <Spotlight className="top-28 left-80 h-[80vh] w-[50vw]" fill="blue" />
      </div>

      <div className="h-screen w-full dark:bg-black-100 bg-white dark:bg-grid-white/[0.03] bg-grid-black/[0.2] absolute flex items-center justify-center top-0 left-0">
        <div className="absolute pointer-events-none inset-0 flex items-center justify-center dark:bg-black-100 bg-white [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)]" />
      </div>

      <div className="flex justify-center relative my-20 z-10">
        <div className="max-w-[89vw] md:max-w-2xl lg:max-w-[60vw] flex flex-col items-center justify-center">
          {/* Display the user's name if signed in */}
          <h3 className='text-[1.2rem] font-bold tracking-wider text-white sm:text-[1.8rem]'>
            {isSignedIn && user ? (
              <>
                👋 Hey <span className='text-purple'>{user.firstName}</span>
              </>
            ) : (
              '👋 Hey there!'
            )}
          </h3>

          <h1 className='text-[2.5rem] font-bold text-center tracking-wider text-white sm:text-[2.8rem]'>
            Learn About<span className='text-purple'>&nbsp;Chatter</span>
          </h1>
          <p className="text-center text-gray-300 md:tracking-wider leading-8 sm:tracking-wider my-4 text-[16px] md:text-[16px] lg:text-[16px] md:mb-8 mb-8">
          Chatter is a vibrant platform designed to bring authors, readers, and collaborators together. Our mission is to foster creativity and collaboration through engaging stories, insightful articles, and meaningful interactions. Whether you're an author looking to share your work or a reader seeking fresh perspectives, Chatter is here to connect you with the content and community that inspires you.
          </p>
          <div className="flex flex-col md:flex-row justify-center items-center mb-2 space-y-4 md:space-y-0 md:space-x-4">
            <Link href="/pages/create-post" legacyBehavior>
              <a rel="noopener noreferrer">
                <MagicButton 
                  title="Try our Editor" 
                  otherClasses='text-[1.3rem] flex justify-center items-center text-center'
                />
              </a>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutIntroduction;




