'use client';

import React from "react";
import { Spotlight } from './ui/Spotlight';
import ImageWithFallback from './ImageWithFallback';
import { posts } from '@/data';
import { GoArrowRight } from "react-icons/go";
import { Post } from '@/types';
import Link from "next/link";
import { useRouter } from 'next/navigation';

const MAX_DESCRIPTION_LENGTH = 100;

const truncateDescription = (text: string, maxLength: number): string => {
  if (text.length <= maxLength) return text;
  return `${text.slice(0, maxLength)}...`;
};

const Posts = () => {
  const router = useRouter();

  const displayedPosts = posts.slice(0, 3); // Display the first three posts

  const handlePostClick = (postId: number) => {
    router.push(`/single-post?id=${postId}`);
  };

  return (
    <div className="relative pb-24 md:pt-12" id="Posts">
      <Spotlight className="-top-40 -right-10 md:-right-32 md:-top-20 h-screen" fill="white" />
      <Spotlight className="top-10 left-full h-[80vh] w-[60vw]" fill="purple" />
      <Spotlight className="top-28 left-80 h-[80vh] w-[60vw]" fill="blue" />

      <div className="h-screen w-full dark:bg-black-100 bg-white dark:bg-grid-white/[0.03] bg-grid-black/[0.2] absolute top-0 left-0 flex items-center justify-center">
        <div className="absolute pointer-events-none inset-0 flex items-center justify-center dark:bg-black-100 bg-white [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)]" />
      </div>

      <div className="relative mx-auto max-w-7xl px-6 lg:px-8 z-10">
        <div className="lg:mx-0 mx-auto text-center mt-8 md:p-6">
          <div className="mx-auto max-w-md sm:max-w-lg md:max-w-2xl lg:max-w-3xl xl:max-w-4xl mt-0 sm:mt-0 lg:mt-0">
            <h2 className="text-[2.7rem] font-bold tracking-wider text-white sm:text-[2.7rem]">
              From <span className="text-purple">Our Authors</span>
            </h2>
            <p className="mt-2 text-md leading-8 text-white">
              Dive into a wealth of knowledge with articles crafted by our talented authors.
              Discover insights, tips, and stories to help you grow your business and inspire 
              your creativity.
            </p>
          </div>
        </div>
        <div className="mt-6 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 border-t border-gray-800 py-4 sm:mt-10 md:py-4">
          {displayedPosts.map((post: Post) => (
            <article
              key={post.id}
              className="bg-transparent rounded-lg shadow-lg p-2 overflow-hidden flex flex-col post-card"
            >
              <ImageWithFallback
                src={post.imageUrl}
                alt={post.title}
                className="w-full h-57 md:h-60 object-cover rounded-lg"
                fallbackSrc={post.fallbackImageUrl}
                width={500}
                height={300}
              />
              <div className="pt-6">
                <div className="flex items-center gap-4 text-xs">
                  <time dateTime={post.datetime} className="text-gray-200">
                    {post.date}
                  </time>
                  <a
                    href={post.category.href}
                    className="rounded-full bg-gray-900 px-3 py-1.5 font-medium text-gray-400 hover:bg-gray-800"
                  >
                    {post.category.title}
                  </a>
                </div>
                <div className="mt-3">
                  <h3 className="text-lg font-semibold leading-6 text-gray-100">
                    <a
                      onClick={() => handlePostClick(post.id)}
                      className="hover:text-gray-400 cursor-pointer"
                    >
                      {post.title}
                    </a>
                  </h3>
                  <p className="mt-2 text-sm leading-6 text-gray-300">
                    {truncateDescription(post.description, MAX_DESCRIPTION_LENGTH)}
                    <Link href={`/single-post?id=${post.id}`} legacyBehavior>
                      <a
                        className="text-purple hover:text-purple-600 inline-flex items-center cursor-pointer"
                      >
                        Read more <GoArrowRight className="text-purple forced-colors:purple text-lg" />
                      </a>
                    </Link>
                  </p>
                </div>
              </div>
              <div className="p-6 border-t border-gray-800 mt-auto">
                <div className="flex items-center gap-4">
                  <ImageWithFallback
                    alt={post.author.name}
                    src={post.author.imageUrl}
                    className="avatar-image"
                    fallbackSrc={post.author.fallbackImageUrl}
                    width={40}
                    height={40}
                  />
                  <div className="leading-6">
                    <p className="font-semibold text-sm text-gray-300">
                      <a href={post.author.href} className="hover:text-gray-400">
                        {post.author.name}
                      </a>
                    </p>
                    <span className='flex text-center'>
                      <p className="text-xs text-gray-200 mr-2">{post.author.role}</p>
                      <p className="text-xs text-gray-300">({post.author.organization})</p>
                    </span>
                    <span className='flex text-center'>
                      <p className="text-xs text-gray-500 mr-2">{post.author.date}</p>
                      <p className="text-xs text-gray-500">{post.author.datetime}</p>
                    </span>
                  </div>
                </div>
              </div>
            </article>
          ))}
        </div>

        {/* View more button */}
        <div className="flex md:w-full relative flex-col justify-center items-center mt-4 md:mt-12">
          <Link href="/blog" legacyBehavior>
            <a rel="noopener noreferrer" className="bg-purple-500 text-purple text-md py-2 px-4 rounded flex items-center justify-center gap-2 hover:bg-purple-600">
              View More <GoArrowRight className="text-purple forced-colors:purple text-lg" />
            </a>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Posts;


















// 'use client';

// import React from "react";
// import { Spotlight } from './ui/Spotlight';
// import ImageWithFallback from './ImageWithFallback';
// import { posts } from '@/data';
// import { GoArrowRight } from "react-icons/go";
// import { Post } from '@/types';
// import Link from "next/link";
// import { useRouter } from 'next/navigation';

// const MAX_DESCRIPTION_LENGTH = 100;

// const truncateDescription = (text: string, maxLength: number): string => {
//   if (text.length <= maxLength) return text;
//   return `${text.slice(0, maxLength)}...`;
// };

// const Posts = () => {
//   const router = useRouter();

//   // Get the first three posts
//   const displayedPosts = posts.slice(0, 3);

//   const handlePostClick = (postId: number) => {
//     router.push(`/single-post?id=${postId}`);
//   };

//   return (
//     <div className="relative pb-24 md:pt-12" id="Posts">
//       <Spotlight className="-top-40 -right-10 md:-right-32 md:-top-20 h-screen" fill="white" />
//       <Spotlight className="top-10 left-full h-[80vh] w-[60vw]" fill="purple" />
//       <Spotlight className="top-28 left-80 h-[80vh] w-[60vw]" fill="blue" />

//       <div className="h-screen w-full dark:bg-black-100 bg-white dark:bg-grid-white/[0.03] bg-grid-black/[0.2] absolute top-0 left-0 flex items-center justify-center">
//         <div className="absolute pointer-events-none inset-0 flex items-center justify-center dark:bg-black-100 bg-white [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)]" />
//       </div>

//       <div className="relative mx-auto max-w-7xl px-6 lg:px-8 z-10">
//         <div className="lg:mx-0 mx-auto text-center mt-8 md:p-6">
//           <div className="mx-auto max-w-md sm:max-w-lg md:max-w-2xl lg:max-w-3xl xl:max-w-4xl mt-0 sm:mt-0 lg:mt-0">
//             <h2 className="text-[2.7rem] font-bold tracking-wider text-white sm:text-[2.7rem]">
//               From <span className="text-purple">Our Authors</span>
//             </h2>
//             <p className="mt-2 text-md leading-8 text-white">
//               Dive into a wealth of knowledge with articles crafted by our talented authors.
//               Discover insights, tips, and stories to help you grow your business and inspire 
//               your creativity.
//             </p>
//           </div>
//         </div>
//         <div className="mt-6 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 border-t border-gray-800 py-4 sm:mt-10 md:py-4">
//           {displayedPosts.map((post: Post) => (
//             <article
//               key={post.id}
//               className="bg-transparent rounded-lg shadow-lg p-2 overflow-hidden flex flex-col post-card"
//             >
//               <ImageWithFallback
//                 src={post.imageUrl}
//                 alt={post.title}
//                 className="w-full h-57 md:h-60 object-cover rounded-lg"
//                 fallbackSrc={post.fallbackImageUrl}
//                 width={500}
//                 height={300}
//               />
//               <div className="pt-6">
//                 <div className="flex items-center gap-4 text-xs">
//                   <time dateTime={post.datetime} className="text-gray-200">
//                     {post.date}
//                   </time>
//                   <a
//                     href={post.category.href}
//                     className="rounded-full bg-gray-900 px-3 py-1.5 font-medium text-gray-400 hover:bg-gray-800"
//                   >
//                     {post.category.title}
//                   </a>
//                 </div>
//                 <div className="mt-3">
//                   <h3 className="text-lg font-semibold leading-6 text-gray-100">
//                     <a
//                       onClick={() => handlePostClick(post.id)}
//                       className="hover:text-gray-400 cursor-pointer"
//                     >
//                       {post.title}
//                     </a>
//                   </h3>
//                   <p className="mt-2 text-sm leading-6 text-gray-300">
//                     {truncateDescription(post.description, MAX_DESCRIPTION_LENGTH)}
//                     <Link href={`/single-post?id=${post.id}`} legacyBehavior>
//                       <a
//                         className="text-purple hover:text-purple-600 inline-flex items-center cursor-pointer"
//                       >
//                         Read more <GoArrowRight className="text-purple forced-colors:purple text-lg" />
//                       </a>
//                     </Link>
//                   </p>
//                 </div>
//               </div>
//               <div className="p-6 border-t border-gray-800 mt-auto">
//                 <div className="flex items-center gap-4">
//                   <ImageWithFallback
//                     alt={post.author.name}
//                     src={post.author.imageUrl}
//                     className="avatar-image"
//                     fallbackSrc={post.author.fallbackImageUrl}
//                     width={40}
//                     height={40}
//                   />
//                   <div className="leading-6">
//                     <p className="font-semibold text-sm text-gray-300">
//                       <a href={post.author.href} className="hover:text-gray-400">
//                         {post.author.name}
//                       </a>
//                     </p>
//                     <span className='flex text-center'>
//                       <p className="text-xs text-gray-200 mr-2">{post.author.role}</p>
//                       <p className="text-xs text-gray-300">({post.author.organization})</p>
//                     </span>
//                     <span className='flex text-center'>
//                       <p className="text-xs text-gray-500 mr-2">{post.author.date}</p>
//                       <p className="text-xs text-gray-500">{post.author.datetime}</p>
//                     </span>
//                   </div>
//                 </div>
//               </div>
//             </article>
//           ))}
//         </div>

//         {/* View more button */}
//         <div className="flex md:w-full relative flex-col justify-center items-center mt-4 md:mt-12">
//           <Link href="/blog" legacyBehavior>
//             <a rel="noopener noreferrer" className="bg-purple-500 text-purple text-md py-2 px-4 rounded flex items-center justify-center gap-2 hover:bg-purple-600">
//               View More <GoArrowRight className="text-purple forced-colors:purple text-lg" />
//             </a>
//           </Link>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Posts;










// 'use client';

// import React from "react";
// import { Spotlight } from './ui/Spotlight';
// import ImageWithFallback from './ImageWithFallback';
// import { posts } from '@/data';
// import { GoArrowRight } from "react-icons/go";
// import { Post } from '@/types'; // Import the Post type
// import Link from "next/link";
// import { useRouter } from 'next/navigation'; // Update import

// const MAX_DESCRIPTION_LENGTH = 100;

// const truncateDescription = (text: string, maxLength: number): string => {
//   if (text.length <= maxLength) return text;
//   return `${text.slice(0, maxLength)}...`;
// };

// const Posts = () => {
//   const router = useRouter();

//   // Get the first three posts
//   const displayedPosts = posts.slice(0, 3);

//   const handlePostClick = (postId: number) => {
//     // Use router.push for programmatic navigation
//     router.push(`/single-post?id=${postId}`);
//   };

//   return (
//     <div className="relative pb-24 md:pt-12" id="Posts">
//       <Spotlight className="-top-40 -right-10 md:-right-32 md:-top-20 h-screen" fill="white" />
//       <Spotlight className="top-10 left-full h-[80vh] w-[60vw]" fill="purple" />
//       <Spotlight className="top-28 left-80 h-[80vh] w-[60vw]" fill="blue" />

//       <div className="h-screen w-full dark:bg-black-100 bg-white dark:bg-grid-white/[0.03] bg-grid-black/[0.2] absolute top-0 left-0 flex items-center justify-center">
//         <div className="absolute pointer-events-none inset-0 flex items-center justify-center dark:bg-black-100 bg-white [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)]" />
//       </div>

//       <div className="relative mx-auto max-w-7xl px-6 lg:px-8 z-10">
//         <div className="lg:mx-0 mx-auto text-center mt-8 md:p-6">
//           <div className="mx-auto max-w-md sm:max-w-lg md:max-w-2xl lg:max-w-3xl xl:max-w-4xl mt-0 sm:mt-0 lg:mt-0">
//             <h2 className="text-[2.7rem] font-bold tracking-wider text-white sm:text-[2.7rem]">
//               From <span className="text-purple">Our Authors</span>
//             </h2>
//             <p className="mt-2 text-md leading-8 text-white">
//               Dive into a wealth of knowledge with articles crafted by our talented authors.
//               Discover insights, tips, and stories to help you grow your business and inspire 
//               your creativity.
//             </p>
//           </div>
//         </div>
//         <div className="mt-6 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 border-t border-gray-800 py-4 sm:mt-10 md:py-4">
//           {displayedPosts.map((post: Post) => (
//             <article
//               key={post.id}
//               className="bg-transparent rounded-lg shadow-lg p-2 overflow-hidden flex flex-col post-card"
//             >
//               <ImageWithFallback
//                 src={post.imageUrl}
//                 alt={post.title}
//                 className="w-full h-57 md:h-60 object-cover rounded-lg"
//                 fallbackSrc={post.fallbackImageUrl}
//                 width={500}
//                 height={300}
//               />
//               <div className="pt-6">
//                 <div className="flex items-center gap-4 text-xs">
//                   <time dateTime={post.datetime} className="text-gray-200">
//                     {post.date}
//                   </time>
//                   <a
//                     href={post.category.href}
//                     className="rounded-full bg-gray-900 px-3 py-1.5 font-medium text-gray-400 hover:bg-gray-800"
//                   >
//                     {post.category.title}
//                   </a>
//                 </div>
//                 <div className="mt-3">
//                   <h3 className="text-lg font-semibold leading-6 text-gray-100">
//                     <a
//                       onClick={() => handlePostClick(post.id)}
//                       className="hover:text-gray-400 cursor-pointer"
//                     >
//                       {post.title}
//                     </a>
//                   </h3>
//                   <p className="mt-2 text-sm leading-6 text-gray-300">
//                     {truncateDescription(post.description, MAX_DESCRIPTION_LENGTH)}
//                     <Link href={"/single-post"} legacyBehavior>
//                       <a
//                         // onClick={() => handlePostClick(post.id)}
//                         className="text-purple hover:text-purple-600 inline-flex items-center cursor-pointer"
//                       >
//                         Read more <GoArrowRight className="text-purple forced-colors:purple text-lg" />
//                       </a>
//                     </Link>
//                   </p>
//                 </div>
//               </div>
//               <div className="p-6 border-t border-gray-800 mt-auto">
//                 <div className="flex items-center gap-4">
//                   <ImageWithFallback
//                     alt={post.author.name}
//                     src={post.author.imageUrl}
//                     className="avatar-image"
//                     fallbackSrc={post.author.fallbackImageUrl}
//                     width={40}
//                     height={40}
//                   />
//                   <div className="leading-6">
//                     <p className="font-semibold text-sm text-gray-300">
//                       <a href={post.author.href} className="hover:text-gray-400">
//                         {post.author.name}
//                       </a>
//                     </p>
//                     <span className='flex text-center'>
//                       <p className="text-xs text-gray-200 mr-2">{post.author.role}</p>
//                       <p className="text-xs text-gray-300">({post.author.organization})</p>
//                     </span>
//                     <span className='flex text-center'>
//                       <p className="text-xs text-gray-500 mr-2">{post.author.date}</p>
//                       <p className="text-xs text-gray-500">{post.author.datetime}</p>
//                     </span>
//                   </div>
//                 </div>
//               </div>
//             </article>
//           ))}
//         </div>

//         {/* View more button */}
//         <div className="flex md:w-full relative flex-col justify-center items-center mt-4 md:mt-12">
//           <Link href="/blog" legacyBehavior>
//             <a rel="noopener noreferrer" className="bg-purple-500 text-purple text-md py-2 px-4 rounded flex items-center justify-center gap-2 hover:bg-purple-600">
//               View More <GoArrowRight className="text-purple forced-colors:purple text-lg" />
//             </a>
//           </Link>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Posts;




















