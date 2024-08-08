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

      <div className="relative mx-auto max-w-7xl px-6 lg:px-8 z-10">
        <div className="lg:mx-0 mx-auto text-center mt-8 md:p-10">
          <div className="mx-auto max-w-md sm:max-w-lg md:max-w-2xl lg:max-w-3xl xl:max-w-4xl mt-0 sm:mt-0 lg:mt-0">
            <h2 className="text-[2.6rem] font-bold tracking-wider text-white sm:text-[2.8rem]">
              Meet <span className="text-purple">The Team</span>
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
                  style={{ objectFit: 'cover' }}
                  className="rounded-t-lg"
                />
              </div>
              <div className="flex flex-col justify-start">
                <h3 className="text-lg py-2 font-semibold text-gray-100">{member.name}</h3>
                <p className="text-gray-200">{member.role}</p>
                <p className="text-gray-400 mt-2 text-md">
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













// import React from 'react';
// import Image from 'next/image';

// const teamMembers = [
//   {
//     id: 1,
//     name: 'John Doe',
//     role: 'Founder & CEO',
//     description: 'John has over 20 years of experience in the tech industry. He started Chatter with the vision of creating a platform where people can share their thoughts and collaborate effectively. His leadership and innovative thinking have been pivotal in driving the company towards success.',
//     imageUrl: '/team-member-1.jpg',
//   },
//   {
//     id: 2,
//     name: 'Jane Smith',
//     role: 'Chief Technology Officer',
//     description: 'Jane is a tech enthusiast with a knack for solving complex problems. She leads the technology team at Chatter, ensuring that the platform is scalable, secure, and user-friendly. Her expertise in software development and her passion for technology make her an invaluable asset to the company.',
//     imageUrl: '/team-member-2.jpg',
//   },
//   {
//     id: 3,
//     name: 'Alice Johnson',
//     role: 'Head of Marketing',
//     description: 'Alice brings a wealth of knowledge in digital marketing and brand management. She is responsible for the marketing strategies that have propelled Chatter into the limelight. Alice’s creativity and strategic thinking help in crafting campaigns that resonate with our audience.',
//     imageUrl: '/team-member-3.jpg',
//   },
// ];

// const AboutTeam: React.FC = () => {
//   return (
//     <section className="bg-gray-100 py-8">
//       <div className="container mx-auto px-4 text-center max-w-6xl">
//         <h2 className="text-3xl font-bold mb-8">Meet the Team</h2>
//         <div className="flex flex-wrap justify-center">
//           {teamMembers.map(member => (
//             <div key={member.id} className="w-full sm:w-1/2 md:w-1/3 lg:w-1/3 p-4">
//               <div className="flex items-center space-x-4">
//                 <div className="w-48 h-48 flex-shrink-0 rounded-lg overflow-hidden">
//                   <Image 
//                     src={member.imageUrl}
//                     alt={member.name}
//                     width={200}
//                     height={200}
//                     objectFit="cover"
//                     className="rounded-lg"
//                   />
//                 </div>
//                 <div className="text-left">
//                   <h3 className="text-xl font-semibold">{member.name}</h3>
//                   <p className="text-gray-700">{member.role}</p>
//                   <p className="text-gray-500 mt-2">{member.description}</p>
//                 </div>
//               </div>
//             </div>
//           ))}
//         </div>
//       </div>
//     </section>
//   );
// };

// export default AboutTeam;












// import React from 'react';
// import Image from 'next/image';

// const AboutTeam: React.FC = () => {
//   return (
//     <section className="bg-gray-800 py-8">
//       <div className="container mx-auto px-4 text-center max-w-7xl">
//         <h2 className="text-3xl font-bold mb-4">Meet the Team</h2>
//         <div className="flex flex-wrap justify-center">
//           <div className="w-full sm:w-1/2 md:w-1/3 lg:w-1/4 p-4">
//             <Image src="/team-member-1.jpg" alt="Team Member 1" width={80} height={80} objectFit='cover' className="rounded-full mx-auto mb-4" />
//             <h3 className="text-xl font-semibold">Sixtus Aondoakaa</h3>
//             <p className="text-gray-700">Founder & CEO</p>
//             <p className="text-gray-500">Brief description about their background, expertise, and role in the company.</p>
//           </div>
//           <div className="w-full sm:w-1/2 md:w-1/3 lg:w-1/4 p-4">
//             <Image src="/team-member-2.jpg" alt="Team Member 2" width={80} height={80} objectFit='cover' className="rounded-full mx-auto mb-4" />
//             <h3 className="text-xl font-semibold">Jack Denis</h3>
//             <p className="text-gray-700">Lead Developer</p>
//             <p className="text-gray-500">Brief description about their background, expertise, and role in the company.</p>
//           </div>
//           <div className="w-full sm:w-1/2 md:w-1/3 lg:w-1/4 p-4">
//             <Image src="/team-member-3.jpg" alt="Team Member 3" width={80} height={80} objectFit='cover' className="rounded-full mx-auto mb-4" />
//             <h3 className="text-xl font-semibold">Ben Ananda</h3>
//             <p className="text-gray-700">Content Strategist</p>
//             <p className="text-gray-500">Brief description about their background, expertise, and role in the company.</p>
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// };

// export default AboutTeam;
