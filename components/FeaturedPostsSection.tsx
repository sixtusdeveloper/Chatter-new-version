
// ==================================== Working perfectly okay ====================================//
'use client';

import React, { useState } from 'react';
import { format, parseISO } from 'date-fns';
import Image from 'next/image';
import { FaFacebook, FaTwitter, FaLinkedin, FaThumbsUp, FaComment } from 'react-icons/fa';

const featuredPost = {
  title: "Boost Your Conversion Rate",
  description: "Unlock the potential of your marketing strategy by improving your conversion rates. Discover actionable insights and proven techniques to enhance user engagement, drive higher sales, and turn visitors into loyal customers. Learn how to optimize every step of your customer journey with data-driven strategies.",
  imageUrl: "https://images.unsplash.com/photo-1506765515384-028b60a970df?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwzNjUyOXwwfDF8c2VvfHx8fHx8fHwxNjg4MDQ4NzY5&ixlib=rb-1.2.1&q=80&w=1080",
  author: {
    name: "Boost Your Conversion Rate",
    imageUrl: "https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwzNjUyOXwwfDF8c2VxfHx8fHx8fHwxNjkxNTA3MzU4&ixlib=rb-1.2.1&q=80&w=1080",
    role: "Co-Founder / CTO",
    date: "2024-08-06", // Valid ISO date string
    datetime: "2024-08-06T12:00:00Z", // Valid ISO datetime string
    organization: "(ElitesDev Ltd)",
  },
  category: {
    title: "Marketing",
    href: "#",
  },
  features: ["Marketing", "Design", "Architecture", "Technology", "Development", "Business"],
};

const FeaturedPostsSection = () => {
  const [comment, setComment] = useState('');
  const [likes, setLikes] = useState<number>(0);
  const [commentsCount, setCommentsCount] = useState<number>(0);
  const [liked, setLiked] = useState<boolean>(false);

  const handleLike = () => {
    if (liked) {
      setLikes(likes - 1);
    } else {
      setLikes(likes + 1);
    }
    setLiked(!liked);
  };

  const handleCommentSubmit = () => {
    if (comment.trim()) {
      setCommentsCount(commentsCount + 1);
      setComment('');
    }
  };

  return (
    <section className="bg-black-200 lg:px-10 py-8 lg:py-12" id="featured-posts">
      <div className="container mx-auto px-2">
        <h2 className="font-bold mb-6 lg:mb-[5rem] text-center text-[2.4rem] tracking-wider text-white lg:text-[2.7rem]">Featured <span className="text-purple">Post</span></h2>
        <div className="flex flex-col md:flex-row items-center">
          <div className="relative w-full md:w-1/3 mb-4 md:mb-0">
            <Image src={featuredPost.imageUrl} alt={featuredPost.title} width={400} height={240} className="object-cover rounded-lg" />
            <div className="flex justify-between items-center mt-4 gap-8">
              <div className='flex space-x-4 bg-transparent rounded-full py-1 px-2 border border-gray-800'>
                <FaFacebook className="text-gray-300 hover:text-gray-200 cursor-pointer" size={20} />
                <FaTwitter className="text-gray-300 hover:text-gray-200 cursor-pointer" size={20} />
                <FaLinkedin className="text-gray-300 hover:text-gray-200 cursor-pointer" size={20} />
              </div>
              <div className='flex items-center bg-transparent py-1 px-2 rounded-full border border-gray-800'>
                <p className='text-sm text-gray-400'>{featuredPost.category.title}</p>
              </div>
            </div>
            <div className='mt-8 hidden md:block'>
              <h3 className="text-md font-semibold text-gray-300 mb-4">Featured Categories</h3>
              <div className="grid grid-cols-2 gap-4 mt-2">
                {featuredPost.features.map((feature, index) => (
                  <div
                    key={index}
                    className="flex-none bg-gray-800 p-1 rounded-full border border-gray-700 text-center text-gray-300 text-sm overflow-hidden"
                  >
                    <span className="block truncate">{feature}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
          <div className="md:ml-6 flex-1 overflow-y-auto lg:px-10 md:border-l md:border-gray-800 md:pl-6 custom-scrollbar">
            
            <h2 className="text-2xl font-bold text-white lg:mt-0 lg:mb-0">{featuredPost.title}</h2>
            <p className="mt-2 text-gray-400 text-sm leading-6">{featuredPost.description}</p>
            
            <div className="my-8 flex items-center">
              <Image src={featuredPost.author.imageUrl} alt={featuredPost.author.name} width={48} height={48} className="rounded-full" />
              <div className="ml-4">
                <p className="text-sm font-semibold text-white">{featuredPost.author.name}</p>
                <span className='flex text-center py-1'>
                  <p className="text-xs text-gray-200 mr-2">{featuredPost.author.role}</p>
                  <p className="text-xs text-gray-300">({featuredPost.author.organization})</p>
                </span>
                <span className='flex text-center'>
                  <p className="text-xs text-gray-500 mr-2">{format(parseISO(featuredPost.author.date), 'PP')}</p>
                  <p className="text-xs text-gray-500">{format(parseISO(featuredPost.author.datetime), 'p')}</p>
                </span>
              </div>
            </div>
            <div className="mt-4 flex w-2xl gap-4 items-center p-1">
              <button
                className={`flex items-center gap-2 ${liked ? 'text-blue-400 border-blue-400 border-1' : 'text-gray-400 border-gray-800'} bg-transparent rounded-full border py-1 px-4 transition-all duration-200`}
                onClick={handleLike}
              >
                <FaThumbsUp size={18} />
                <span>{likes}</span>
              </button>
              <button
                className="flex items-center gap-2 text-gray-400 hover:text-gray-300 bg-transparent rounded-full border border-gray-800 py-1 px-2"
              >
                <FaComment size={18} />
                <span>{commentsCount}</span>
              </button>
            </div>
            <div className="mt-8">
              <textarea
                className="w-full h-24 p-2 rounded-md bg-gray-800 border border-gray-700 text-white resize-none"
                placeholder="Add a comment..."
                value={comment}
                onChange={(e) => setComment(e.target.value)}
              />
              <button
                className="mt-4 w-full bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-500"
                onClick={handleCommentSubmit}
              >
                Post Comment
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FeaturedPostsSection;








