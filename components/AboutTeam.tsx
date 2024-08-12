import React from "react";
import Image from "next/image";
import { Spotlight } from './ui/Spotlight'; // Ensure the Spotlight component is correctly imported
import { GoArrowRight } from "react-icons/go";
import { teamMembers } from "@/data";

const MAX_DESCRIPTION_LENGTH = 100;

const truncateDescription = (text: string, maxLength: number): string => {
  if (text.length <= maxLength) return text;
  return `${text.slice(0, maxLength)}...`;
};

const AboutTeam: React.FC = () => {
  return (
    <section className="relative bg-black-200 py-8">
      <Spotlight className="-top-40 -right-10 md:-right-32 md:-top-20 h-screen" fill="white" />
      <Spotlight className="top-10 left-full h-[80vh] w-[60vw]" fill="purple" />
      <Spotlight className="top-28 left-80 h-[80vh] w-[60vw]" fill="blue" />

      <div className="h-screen w-full dark:bg-black-100 bg-white dark:bg-grid-white/[0.03] bg-grid-black/[0.2] absolute top-0 left-0 flex items-center justify-center">
        <div className="absolute pointer-events-none inset-0 flex items-center justify-center dark:bg-black-100 bg-white [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)]" />
      </div>

      <div className="relative mx-auto max-w-7xl px-6 lg:px-10 z-10">
        <div className="lg:mx-0 mx-auto text-center mt-8 md:p-10">
          <div className="mx-auto max-w-md sm:max-w-lg md:max-w-2xl lg:max-w-3xl xl:max-w-4xl mt-0 sm:mt-0 lg:mt-0">
            <h2 className="text-[2.6rem] font-bold tracking-wider text-white sm:text-[2.8rem]">
              Meet <span className="text-purple">Our Team</span>
            </h2>
            <p className="mt-2 text-md leading-8 text-gray-300">
              Get to know some of our talented individuals behind Chatter. Our team is dedicated to building a platform where collaboration and innovation thrive.
            </p>
          </div>
        </div>
        <div className="mt-6 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 border-t border-gray-800 py-4 sm:mt-10 md:py-4">
          {teamMembers.map((member) => (
            <div
              key={member.id}
              className="bg-black-200 rounded-lg shadow-lg p-4 flex flex-col border border-gray-800"
            >
              <div className="relative w-full h-64 mb-4"> {/* Adjusted height */}
                <Image
                  src={member.imageUrl}
                  alt={member.name}
                  fill
                  sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                  style={{ objectFit: 'cover' }}
                  className="rounded-t-lg"
                />
              </div>
              <div className="flex flex-col justify-start">
                <h3 className="text-md py-2 font-semibold text-gray-100">{member.name}</h3>
                <p className="text-gray-200 text-sm">{member.role}</p>
                <p className="text-gray-400 mt-2 text-sm">
                  {truncateDescription(member.description, MAX_DESCRIPTION_LENGTH)}
                  <a
                    href={`/team/${member.id}`} // Update the link to the member's full profile or details
                    className="text-purple hover:text-purple-600 inline-flex items-center mt-2"
                  >
                    Read more <GoArrowRight className="text-purple text-lg ml-1" />
                  </a>
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AboutTeam;
