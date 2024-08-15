'use client';
import { useParams } from 'next/navigation';
import Image from 'next/image';
import { teamMembers } from '@/data';
import { Spotlight } from '@/components/ui/Spotlight';
import { FaTwitter, FaLinkedin, FaGithub } from 'react-icons/fa';
import { useUser } from '@clerk/nextjs';

const DevThreeMember = () => {
  const { user, isSignedIn } = useUser();
  const params = useParams();
  const { id } = params;

  const member = teamMembers.find(member => member.id === parseInt(id as string));

  if (!member) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <h2 className="text-2xl font-bold text-gray-600">Member not found</h2>
      </div>
    );
  }

  return (
    <>
        <div className="relative min-h-screen bg-gray-900 text-white flex flex-col items-center">
            <Spotlight className="-top-40 -right-10 md:-right-32 md:-top-20 h-screen" fill="white" />
            <Spotlight className="top-10 left-full h-[80vh] w-[60vw]" fill="purple" />
            <Spotlight className="top-28 left-80 h-[80vh] w-[60vw]" fill="blue" />

            <div className="relative w-full h-full flex items-center justify-center p-0 md:p-12">
                <div className="bg-gray-800 p-4 lg:p-8 rounded-lg shadow-lg w-full max-w-4xl">
                    <div className="flex flex-col md:flex-row items-center">
                        <div className="w-full md:w-1/3 mb-4 md:mb-0">
                            <Image
                                src={member.imageUrl}
                                alt={member.name}
                                width={500}
                                height={400}
                                className="rounded-lg object-cover shadow-md"
                            />
                        </div>
                        <div className="w-full md:w-2/3 md:pl-8">
                            <h3 className='text-[1.2rem] py-4 font-bold tracking-wider text-white lg:text-[1.4rem]'>
                                {isSignedIn && user ? (
                                <>
                                    👋 Hey <span className='text-purple'>{user.firstName}</span>
                                </>
                                ) : (
                                '👋 Hey there!'
                                )}
                            </h3>
                            <h1 className="text-3xl text-white tracking-wide font-bold mb-4">{member.name}</h1>
                            <p className="text-lg text-gray-200 tracking-wide mb-4">{member.role}</p>
                            <p className="text-gray-300 leading-relaxed mb-6">{member.description}</p>

                            {/* Social Media Icons */}
                            <div className="flex space-x-6 mb-6">
                                <a href={member.twitterUrl} target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white transition duration-300">
                                <FaTwitter size={24} />
                                </a>
                                <a href={member.linkedinUrl} target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white transition duration-300">
                                <FaLinkedin size={24} />
                                </a>
                                <a href={member.githubUrl} target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white transition duration-300">
                                <FaGithub size={24} />
                                </a>
                            </div>

                            {/* Contact Button */}
                            <a
                                href={`mailto:${member.email}`}
                                className="bg-black-200 border tracking-wider border-gray-700 hover:bg-blue-800 text-gray-400 hover:text-gray-200 py-2 text-sm px-4 rounded-full transition duration-300"
                            >
                                Connect with {member.name}
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </>
  );
};

export default DevThreeMember;
