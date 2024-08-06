'use client';

import React, { useEffect, useState } from 'react';
import { FaTimes, FaFacebook, FaTwitter, FaLinkedin, FaThumbsUp, FaComment } from 'react-icons/fa';

interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
  post: {
    title: string;
    description: string;
    imageUrl: string;
    author: {
      name: string;
      imageUrl: string;
      role: string;
      date: string;
      datetime: string;
      organization: string;
    };
    date: string;
    datetime: string;
    category: {
      title: string;
      href: string;
    };
    features: string[];
  } | null;
}

const Modal: React.FC<ModalProps> = ({ isOpen, onClose, post }) => {
  const [comment, setComment] = useState('');
  const [likes, setLikes] = useState<number>(0);
  const [commentsCount, setCommentsCount] = useState<number>(0);
  const [liked, setLiked] = useState<boolean>(false);

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [isOpen]);

  if (!isOpen || !post) return null;

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
    <div className="fixed inset-0 z-50 flex items-center justify-center overflow-hidden">
      <div className="fixed inset-0 bg-gray-800 bg-opacity-70"></div>
      <div className="bg-gray-800 rounded-lg shadow-lg w-full max-w-4xl h-full md:h-auto p-6 relative border border-gray-700 z-10">
        <button
          onClick={onClose}
          className="absolute top-2 right-2 text-gray-400 hover:text-gray-200 p-2 z-20"
        >
          <FaTimes size={18} />
        </button>
        <div className="flex flex-col md:flex-row h-full md:h-auto">
          <div className="relative w-full md:w-1/3 mb-4 md:mb-0">
            <img src={post.imageUrl} alt={post.title} className="w-full h-60 object-cover rounded-lg" />
            <div className="flex justify-between items-center mt-4 gap-8">
              <div className='flex space-x-4 bg-transparent rounded-full py-1 px-2 border border-gray-700'>
                <FaFacebook className="text-gray-300 hover:text-gray-200 cursor-pointer" size={20} />
                <FaTwitter className="text-gray-300 hover:text-gray-200 cursor-pointer" size={20} />
                <FaLinkedin className="text-gray-300 hover:text-gray-200 cursor-pointer" size={20} />
              </div>
              <div className='flex items-center bg-transparent py-1 px-2 rounded-full border border-gray-700'>
                <p className='text-sm text-gray-400'>{post.category.title}</p>
              </div>
            </div>
            <div className='mt-8 hidden md:block'>
              <h3 className="text-md font-semibold text-gray-300 mb-4">Featured Categories</h3>
              <div className="grid grid-cols-2 gap-4 mt-2">
                {post.features.map((feature, index) => (
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
          <div className="md:ml-6 flex-1 overflow-y-auto md:border-l md:border-gray-700 md:pl-6 custom-scrollbar">
            <h2 className="text-2xl font-bold text-white mt-4 mb-4 md:mt-0 md:mb-0">{post.title}</h2>
            <p className="mt-2 text-gray-400 text-sm leading-6">{post.description}</p>
            <div className="my-8 flex items-center">
              <img src={post.author.imageUrl} alt={post.author.name} className="w-12 h-12 rounded-full" />
              <div className="ml-4">
                <p className="text-sm font-semibold text-white-100">{post.author.name}</p>
                <span className='flex text-center py-1'>
                  <p className="text-xs text-gray-200 mr-2">{post.author.role}</p>
                  <p className="text-xs text-gray-300">({post.author.organization})</p>
                </span>
                <span className='flex text-center'>
                  <p className="text-xs text-gray-500 mr-2">{post.author.date}</p>
                  <p className="text-xs text-gray-500">{post.author.datetime}</p>
                </span>
              </div>
            </div>
            <div className="mt-4 flex gap-4 items-center bg-gray-800 p-1 rounded-full border border-gray-700">
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
                className="mt-2 w-full bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-500"
                onClick={handleCommentSubmit}
              >
                Post Comment
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Modal;


