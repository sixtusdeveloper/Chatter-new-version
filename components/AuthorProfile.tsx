'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import { Post, Author } from '@/types';
import SocialIcons from '@/components/SocialIcons';
import Link from 'next/link';
import { FiArrowRight } from 'react-icons/fi';

// Define the props type
interface AuthorProfileProps {
  author: Author;
  posts: Post[];
}

const MAX_TITLE_LENGTH = 30;
const MAX_DESCRIPTION_LENGTH = 30;
const POSTS_PER_PAGE = 6; // Number of posts per page

const AuthorProfile: React.FC<AuthorProfileProps> = ({ author, posts }) => {
  // Pagination state
  const [currentPage, setCurrentPage] = useState(1);

  // Calculate total pages
  const totalPages = Math.ceil(posts.length / POSTS_PER_PAGE);

  // Get the posts for the current page
  const paginatedPosts = posts.slice((currentPage - 1) * POSTS_PER_PAGE, currentPage * POSTS_PER_PAGE);

  // Truncate text utility
  const truncateText = (text: string, maxLength: number) => {
    return text.length > maxLength ? `${text.substring(0, maxLength)}...` : text;
  };

  // Handler for page change
  const handlePageChange = (page: number) => {
    if (page >= 1 && page <= totalPages) {
      setCurrentPage(page);
    }
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
          <SocialIcons role={author.role} />

          <div className="mt-4">
            {/* Followed and Following buttons */}
            <div className="flex justify-start gap-2 items-center space-x-1">
              <button className="px-4 py-2 bg-gray-900 text-sm text-gray-300 rounded-lg">
                Followers: {author.followersCount}
              </button>
              <button className="px-4 py-2 bg-gray-900 text-sm text-gray-300 rounded-lg">
                Following: {author.followingCount}
              </button>
            </div>
          </div>
        </div>
        <div className="md:ml-6 md:w-2/3">
          <h1 className="text-3xl font-bold text-white">{author.name}</h1>
          <p className="mt-2 text-gray-400">{author.position} at {author.organization}</p>
          
          <p className="mt-4 text-gray-400">
            Welcome to <span className='text-white'>{author.name}&apos;s</span> profile page. Here you can find all the posts authored by <span className="text-white">{author.name}.</span>
          </p>

          {/* Bio Section */}
          <p className="mt-4 text-gray-400 text-md leading-7 tracking-wide">
            {author.bio}
          </p>
        </div>
      </div>
      
      <div className="mt-16">
        <h2 className="text-2xl font-bold text-gray-300">Posts by <span className='text-white'>{author.name}</span></h2>
        <div className="mt-6 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {paginatedPosts.map((post: Post) => (
            <Link key={post.id} href={post.href}>
              <div className="bg-black-200 p-4 border border-gray-800 rounded-lg cursor-pointer hover:bg-gray-900 transition-all duration-200">
                <Image
                  src={post.imageUrl}
                  alt={post.title}
                  width={400}
                  height={400}
                  className="object-cover rounded-lg post-image"
                />
                <h3 className="mt-4 text-lg font-semibold text-white">
                  {truncateText(post.title, MAX_TITLE_LENGTH)}
                </h3>
                <p className="mt-2 text-gray-400">
                  {truncateText(post.description, MAX_DESCRIPTION_LENGTH)}
                </p>
                <div className="mt-4 flex justify-between items-center text-gray-500 text-sm">
                  <span>{post.date}</span>
                  <Link href={post.href} legacyBehavior>
                    <a className="flex items-center text-white hover:text-purple">
                      Read more <FiArrowRight className="ml-0" />
                    </a>
                  </Link>
                </div>
              </div>
            </Link>
          ))}
        </div>

        {/* Pagination Controls */}
        <div className="mt-12 flex justify-center gap-8 items-center">
          <button
            onClick={() => handlePageChange(currentPage - 1)}
            disabled={currentPage === 1}
            className="px-4 py-2 bg-gray-800 text-white rounded-lg disabled:opacity-50"
          >
            Previous
          </button>
          <span className="text-gray-400">
            Page {currentPage} of {totalPages}
          </span>
          <button
            onClick={() => handlePageChange(currentPage + 1)}
            disabled={currentPage === totalPages}
            className="px-4 py-2 bg-gray-800 text-white rounded-lg disabled:opacity-50"
          >
            Next
          </button>
        </div>
      </div>
    </div>
  );
};

export default AuthorProfile;







