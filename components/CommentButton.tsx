'use client';


// components/CommentButton.tsx
import { useState } from 'react';
import { FaComment } from 'react-icons/fa';

const CommentButton = ({ commentsCount, setCommentsCount }: { commentsCount: number, setCommentsCount: React.Dispatch<React.SetStateAction<number>> }) => {
  return (
    <button
      className="flex items-center gap-2 text-gray-400 hover:text-gray-300 bg-transparent rounded-full border border-gray-800 py-1 px-2"
    >
      <FaComment size={18} />
      <span>{commentsCount}</span>
    </button>
  );
};

export default CommentButton;
