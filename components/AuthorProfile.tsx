// 'use client';

import React from 'react';
import Image from 'next/image';
import { Post } from '@/types';
import SocialIcons from '@/components/SocialIcons';
import { Author } from '@/types';
import Link from 'next/link';
import { FiArrowRight } from 'react-icons/fi';

interface AuthorProfileProps {
  author: Author;
  posts: Post[];
}

const MAX_TITLE_LENGTH = 30; // Adjust based on your preference
const MAX_DESCRIPTION_LENGTH = 30; // Adjust based on your preference

const AuthorProfile: React.FC<AuthorProfileProps> = ({ author, posts }) => {
  // Truncating text
  const truncateText = (text: string, maxLength: number) => {
    if (text.length > maxLength) {
      return text.substring(0, maxLength) + '...';
    }
    return text;
  };

  return (
    <div className="container mx-auto lg:p-14 px-4 py-12">
      <div className="flex flex-col items-center md:flex-row md:items-start">
        <div className="w-full md:w-1/3 mb-6 md:mb-0">
          <Image
            src={author.imageUrl}
            alt={author.name}
            width={200}
            height={200}
            className="rounded-full object-cover"
          />
          <SocialIcons category={author.role} />
        </div>
        <div className="md:ml-6 md:w-2/3">
          <h1 className="text-3xl font-bold text-white">{author.name}</h1>
          <p className="mt-2 text-gray-400">{author.position} at {author.organization}</p>
          <p className="mt-4 text-gray-300">
            Welcome to <span className='text-white'>{author.name}&apos;s</span> profile page. Here you can find all the posts authored by <span className="text-white">{author.name}.</span>
          </p>
        </div>
      </div>
      
      <div className="mt-16">
        <h2 className="text-2xl font-bold text-gray-300">Posts by <span className='text-white'>{author.name}</span></h2>
        <div className="mt-6 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {posts.map((post) => (
            <Link key={post.id} href={post.href}>
              <div className="bg-black-200 p-4 border border-gray-800 rounded-lg cursor-pointer hover:bg-gray-900 transition-all duration-200">
                <Image
                  src={post.imageUrl}
                  alt={post.title}
                  width={400}
                  height={400}
                  className="object-cover rounded-lg"
                />
                <h3 className="mt-4 text-lg font-semibold text-white">
                  {truncateText(post.title, MAX_TITLE_LENGTH)}
                </h3>
                <p className="mt-2 text-gray-400">
                  {truncateText(post.description, MAX_DESCRIPTION_LENGTH)}
                </p>
                <div className="mt-4 flex justify-between items-center text-gray-500 text-sm">
                  <span>{post.date}</span>
                  <Link href="/single-post" legacyBehavior>
                    <a className="flex items-center text-white hover:text-purple">
                      Read more <FiArrowRight className="ml-0" />
                    </a>
                  </Link>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
};

export default AuthorProfile;




// // src/pages/AuthorProfile.tsx
// 'use client';

// import React from 'react';
// import Image from 'next/image';
// import { Post } from '@/types'; // Adjust the import path based on your project structure
// import SocialIcons from '@/components/SocialIcons';
// import { Author } from '@/types'; // Adjust the import path based on your project structure
// import Link from 'next/link';

// interface AuthorProfileProps {
//   author: Author;
//   posts: Post[];
// }

// const AuthorProfile: React.FC<AuthorProfileProps> = ({ author, posts }) => {
//   return (
//     <div className="container mx-auto lg:p-14 px-4 py-12">
//       <div className="flex flex-col items-center md:flex-row md:items-start">
//         <div className="w-full md:w-1/3 mb-6 md:mb-0">
//           <Image
//             src={author.imageUrl}
//             alt={author.name}
//             width={200}
//             height={200}
//             className="rounded-full object-cover"
//           />
//           <SocialIcons category={author.role} />
//         </div>
//         <div className="md:ml-6 md:w-2/3">
//           <h1 className="text-3xl font-bold text-purple">{author.name}</h1>
//           <p className="mt-2 text-gray-400">{author.role} at {author.organization}</p>
//           <p className="mt-4 text-gray-300">
//             Welcome to <span className='text-purple'>{author.name}&apos;s</span> profile page. Here you can find all the posts authored by <span className="text-purple">{author.name}.</span>
//           </p>
//         </div>
//       </div>
      
//       <div className="mt-12">
//         <h2 className="text-2xl font-bold text-white">Posts by <span className='text-purple'>{author.name}</span></h2>
//         <div className="mt-6 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
//           {posts.map((post) => (
//             <Link key={post.id} href={post.href}>
//               <div className="bg-black-200 p-4 border border-gray-800 rounded-lg cursor-pointer hover:bg-gray-900 transition-all duration-200">
//                 <Image
//                   src={post.imageUrl}
//                   alt={post.title}
//                   width={400}
//                   height={200}
//                   className="object-cover rounded-lg"
//                 />
//                 <h3 className="mt-4 text-lg font-semibold text-white">{post.title}</h3>
//                 <p className="mt-2 text-gray-400">{post.description}</p>
//                 <p className="mt-2 text-gray-500 text-sm">{post.date}</p>
//               </div>
//             </Link>
//           ))}
//         </div>
//       </div>
//     </div>
//   );
// };

// export default AuthorProfile;
