'use client';

import React, { useEffect } from 'react';

type CommentModalProps = {
  isOpen: boolean;
  onClose: () => void;
  commentsCount: number;
  children: React.ReactNode;
};

const CommentModal = ({ isOpen, onClose, commentsCount, children }: CommentModalProps) => {
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'auto';
    }

    // Cleanup the overflow style when component unmounts
    return () => {
      document.body.style.overflow = 'auto';
    };
  }, [isOpen]);

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-70 transition-opacity duration-400">
      <div className="relative bg-black-100 border border-gray-900 p-6 w-full max-w-2xl rounded-lg">
        <button
          onClick={onClose}
          className="absolute top-2 right-2 text-white hover:text-gray-400 focus:outline-none"
        >
          X
        </button>
        {commentsCount > 0 ? (
          <>
            <h2 className="text-lg font-semibold text-white mb-4">Comments</h2>
            <div className="max-h-80 overflow-y-auto custom-scrollbar">
              {children}
            </div>
          </>
        ) : (
          <p className="text-gray-400 text-center">No comments available</p>
        )}
      </div>
    </div>
  );
};

export default CommentModal;
