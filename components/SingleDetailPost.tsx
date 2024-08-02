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
      organization: string;
    };
    date: string;
    category: string;
  } | null;
}

const Modal: React.FC<ModalProps> = ({ isOpen, onClose, post }) => {
  const [comment, setComment] = useState('');

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

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center">
      <div className="fixed inset-0 bg-gray-800 bg-opacity-70"></div>
      <div className="bg-gray-800 rounded-lg shadow-lg w-full max-w-4xl h-full md:h-auto p-6 relative border border-gray-500 z-10 overflow-hidden">
        <button
          onClick={onClose}
          className="absolute top-2 right-2 text-white hover:text-gray-200 p-2 z-20"
        >
          <FaTimes size={18} />
        </button>
        <div className="flex flex-col md:flex-row h-full md:h-auto overflow-y-hidden">
          <div className="relative w-full md:w-1/3 mb-4 md:mb-0">
            <img src={post.imageUrl} alt={post.title} className="w-full h-60 object-cover rounded-lg" />
            <div className="flex justify-center mt-4 space-x-4">
              <FaFacebook className="text-white hover:text-blue-600 cursor-pointer" size={20} />
              <FaTwitter className="text-white hover:text-blue-400 cursor-pointer" size={20} />
              <FaLinkedin className="text-white hover:text-blue-700 cursor-pointer" size={20} />
            </div>
          </div>
          <div className="md:ml-6 flex-1 overflow-y-scroll no-scrollbar">
            <h2 className="text-2xl font-bold text-white">{post.title}</h2>
            <p className="mt-1 text-sm text-gray-400">{post.date}</p>
            <p className="mt-1 text-sm text-gray-400">{post.category}</p>
            <p className="mt-2 text-md text-gray-400">{post.description}</p>
            <div className="mt-4 flex items-center">
              <img src={post.author.imageUrl} alt={post.author.name} className="w-10 h-10 rounded-full" />
              <div className="ml-3">
                <p className="font-semibold text-gray-300">{post.author.name}</p>
                <p className="text-gray-400 text-sm">{post.author.role} at {post.author.organization}</p>
              </div>
            </div>
            <div className="mt-6 flex space-x-4">
              <button className="flex items-center space-x-2 text-white hover:text-blue-500">
                <FaThumbsUp size={18} />
                <span>Like</span>
              </button>
              <button className="flex items-center space-x-2 text-white hover:text-blue-500">
                <FaComment size={18} />
                <span>Comment</span>
              </button>
            </div>
            <div className="mt-6 flex flex-col md:flex-row items-start md:items-end">
              <textarea
                value={comment}
                onChange={(e) => setComment(e.target.value)}
                maxLength={250}
                className="w-full md:flex-1 p-2 bg-gray-700 text-white rounded-lg resize-none h-24"
                placeholder="Add a comment..."
              />
              <button
                onClick={() => alert('Comment submitted!')}
                className="mt-2 md:mt-0 md:ml-2 bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded-lg"
              >
                Comment
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Modal;
