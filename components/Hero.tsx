import Link from 'next/link';
import BackDropButton from './ui/BackDropButton';
import MagicButton from './ui/MagicButton';
import { Spotlight } from './ui/Spotlight';
import { TextGenerateEffect } from './ui/TextGenerateEffect';
import { GoArrowRight } from 'react-icons/go';


const Hero = () => {
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
          <div className="hidden sm:mb-8 sm:flex sm:justify-center">
            <div className="relative rounded-full px-3 py-1 text-sm leading-6 text-blue-300 ring-1 bg-black-300/10 hover:ring-gray-900/20">
              Your Haven for Text-Based Content.{' '}
              <a href="#" className="font-semibold text-purple">
                <span aria-hidden="true" className="absolute inset-0" />
                Read more <span aria-hidden="true">&rarr;</span>
              </a>
            </div>
          </div>

          <TextGenerateEffect className="text-center text-[40px] md:text-5xl lg:text-6xl" words="The Ultimate Destination for Connecting Authors and Readers" />
          <p className="text-center md:tracking-wider sm:tracking-wider my-4 text-[16px] md:text-[16px] lg:text-[16px] md:mb-8 mb-8">
            Chatter is a dynamic and innovative platform designed to cater to the needs of traditional bookworms and modern content creators alike. By offering a multi-functional space where authors and readers can create, share, and discover rich text-based content.
          </p>
          <div className="flex flex-col md:flex-row justify-center items-center mb-2 space-y-4 md:space-y-0 md:space-x-4">
            <Link href="/editorcomponents" target='_blanck' legacyBehavior>
              <a>
                <MagicButton 
                  title="Get Started" 
                  otherClasses='text-[1.3rem] flex justify-center items-center text-center'
                />
              </a>
            </Link>

            <BackDropButton
              title="Read More"
              icon={<GoArrowRight className="text-purple forced-colors:purple text-lg" />}
              position="right"
              otherClasses=' md:ring-none text-[1.3rem] flex justify-center items-center text-center tracking-wider text-purple border-gray-200 rounded-lg hover:border-black-200'
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;



