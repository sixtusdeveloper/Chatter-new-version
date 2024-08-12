'use client';

import React, { useState } from "react";
import { Spotlight } from './ui/Spotlight';
import ImageWithFallback from './ImageWithFallback';
import { posts as allPosts } from '@/data'; // Renamed for clarity
import { GoArrowLeft, GoArrowRight } from "react-icons/go"; // Import up and down arrow icons
import { Post } from '@/types'; // Import the Post type
import Link from "next/link";
import SearchFilterSection from '@/components/SearchFilterSection';
import PostNotFound from '@/components/PostNotFound'; // Import the PostNotFound component

const POSTS_PER_PAGE = 6; // Number of posts to show per page

// Truncate the title to a maximum length
const MAX_TITLE_LENGTH = 30; // Define the maximum length for the description
const truncateTitle = (text: string, maxLength: number): string => {
  if (text.length <= maxLength) return text;
  return `${text.slice(0, maxLength)}...`;
};

// Truncate the description to a maximum length
const MAX_DESCRIPTION_LENGTH = 150; // Define the maximum length for the description
const truncateDescription = (text: string, maxLength: number): string => {
  if (text.length <= maxLength) return text;
  return `${text.slice(0, maxLength)}...`;
};

// Truncate the organization to a maximum length
const MAX_ORGANIZATION_LENGTH = 10; // Define the maximum length for the description
const truncateOrganization = (text: string, maxLength: number): string => {
  if (text.length <= maxLength) return text;
  return `${text.slice(0, maxLength)}...`;
};

const AllPostsSection = () => {
  const [posts] = useState<Post[]>(allPosts);
  const [filteredPosts, setFilteredPosts] = useState<Post[]>(allPosts);
  const [currentPage, setCurrentPage] = useState(1);

  const totalPages = Math.ceil(filteredPosts.length / POSTS_PER_PAGE);

  const handlePageChange = (direction: 'next' | 'prev') => {
    if (direction === 'next' && currentPage < totalPages) {
      setCurrentPage(prevPage => prevPage + 1);
    } else if (direction === 'prev' && currentPage > 1) {
      setCurrentPage(prevPage => prevPage - 1);
    }
  };

  const startIndex = (currentPage - 1) * POSTS_PER_PAGE;
  const endIndex = startIndex + POSTS_PER_PAGE;
  const visiblePosts = filteredPosts.slice(startIndex, endIndex);

  return (
    <div className="relative pb-8 pt-0 lg:pt-0" id="all-posts">
      <Spotlight className="-top-40 -right-10 md:-right-32 md:-top-20 h-screen" fill="white" />
      <Spotlight className="top-10 left-full h-[80vh] w-[60vw]" fill="purple" />
      <Spotlight className="top-28 left-80 h-[80vh] w-[60vw]" fill="blue" />

      <div className="h-screen w-full dark:bg-black-100 bg-white dark:bg-grid-white/[0.03] bg-grid-black/[0.2] absolute top-0 left-0 flex items-center justify-center">
        <div className="absolute pointer-events-none inset-0 flex items-center justify-center dark:bg-black-100 bg-white [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)]" />
      </div>

      <div className="relative mx-auto max-w-7xl px-6 lg:px-10 z-10">
        <div className="lg:mx-0 mx-auto text-center mt-8 md:p-6">
          <div className="mx-auto max-w-md sm:max-w-lg md:max-w-2xl lg:max-w-3xl xl:max-w-4xl mt-0 sm:mt-0 lg:mt-0">
            <h2 className="text-[2.4rem] font-bold tracking-wide text-white sm:text-[2.7rem]">
              All<span className="text-purple">&nbsp;Posts</span>
            </h2>
            <p className="mt-2 text-md leading-8 text-white">
              Dive into a wealth of knowledge with articles crafted by our talented authors.
              Discover insights, tips, and stories to help you grow your business and inspire 
              your creativity.
            </p>
          </div>
          <SearchFilterSection posts={posts} onFilteredPosts={setFilteredPosts} />
        </div>

        {filteredPosts.length === 0 ? (
          <PostNotFound /> // Render PostNotFound component if no posts are found
        ) : (
          <>
            <div className="mt-6 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 border-t border-gray-800 py-4 sm:mt-10 md:py-4">
              {visiblePosts.map((post: Post) => (
                <article
                  key={post.id}
                  className="bg-transparent rounded-lg shadow-lg p-2 overflow-hidden flex flex-col post-card"
                >
                  <ImageWithFallback
                    src={post.imageUrl}
                    alt={post.title}
                    className="w-full h-57 md:h-60 object-cover rounded-lg post-image"
                    // style={{ width: 'auto', height: 'auto' }}
                    fallbackSrc={post.fallbackImageUrl}
                    width={500}
                    height={300}
                  />
                  <div className="pt-6">
                    <div className="flex items-center gap-4 text-xs">
                      <time dateTime={post.datetime} className="text-gray-200">
                        {post.date}
                      </time>
                      <Link
                        href={post.category.href}
                        className="rounded-full bg-gray-900 px-3 py-1.5 font-medium text-gray-400 hover:bg-gray-800"
                      >
                        {post.category.title}
                      </Link>
                    </div>
                    <div className="mt-3">
                      <h3 className="text-lg font-semibold leading-6 text-gray-100">
                        <Link href='/pages/single-post' legacyBehavior>
                          <a className="hover:text-gray-400">{truncateTitle(post.title, MAX_TITLE_LENGTH)}</a>
                        </Link>
                      </h3>
                      <p className="mt-2 text-sm leading-6 text-gray-300">
                        {truncateDescription(post.description, MAX_DESCRIPTION_LENGTH)}
                        <Link href='/pages/single-post' legacyBehavior>
                          <a className="text-purple hover:text-purple-600 inline-flex items-center">
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
                        <p className="font-semibold text-md text-gray-300">
                          <Link href={post.author.href} className="hover:text-gray-400">
                            {post.author.name}
                          </Link>
                        </p>
                        <span className='flex text-center'>
                          <p className="text-xs text-gray-200 py-1 mr-2">{post.author.position}&nbsp;at&nbsp;{truncateOrganization(post.author.organization, MAX_ORGANIZATION_LENGTH)}</p>
                          
                        </span>
                        <span className='flex text-center'>
                          <p className="text-xs text-gray-500 mr-2">{post.author.date}&nbsp;{post.author.datetime}</p>
                        </span>
                      </div>
                    </div>
                  </div>
                </article>
              ))}
            </div>

            {/* Pagination controls */}
            <div className="flex justify-center items-center mt-4 md:mt-12">
              {/* Previous Button */}
              <button
                onClick={() => handlePageChange('prev')}
                disabled={currentPage === 1}
                className={`inline-flex items-center px-4 py-2 border border-transparent text-base font-medium rounded-lg shadow-sm text-white bg-purple-600 hover:bg-purple-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-purple-500 transition duration-150 ease-in-out ${currentPage === 1 ? 'opacity-50 cursor-not-allowed' : ''}`}
              >
                <GoArrowLeft className="text-lg mr-2" />
                Previous
              </button>
              
              {/* Page Indicator */}
              <span className="mx-4 text-white text-lg font-medium">
                {`Page ${currentPage} of ${totalPages}`}
              </span>
              
              {/* Next Button */}
              <button
                onClick={() => handlePageChange('next')}
                disabled={currentPage === totalPages}
                className={`inline-flex items-center px-4 py-2 border border-transparent text-base font-medium rounded-lg shadow-sm text-white bg-purple-600 hover:bg-purple-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-purple-500 transition duration-150 ease-in-out ${currentPage === totalPages ? 'opacity-50 cursor-not-allowed' : ''}`}
              >
                Next
                <GoArrowRight className="text-lg ml-2" />
              </button>
            </div>
          </>
        )}
      </div>
    </div>
  );
};

export default AllPostsSection;





