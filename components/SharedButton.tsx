// components/ShareButton.tsx
import React from 'react';
import { FaShareAlt } from 'react-icons/fa'; // Import the share icon from React Icons
import { db } from '../firebase/firebaseConfig'; // Ensure correct import
import { doc, collection, setDoc } from 'firebase/firestore';

interface ShareButtonProps {
  postId: string;
}

const ShareButton: React.FC<ShareButtonProps> = ({ postId }) => {
  const handleShare = async () => {
    // Replace with logic to determine sharedWith users
    const sharedWith = ['userId1', 'userId2'];

    try {
      const shareRef = doc(collection(db, 'posts', postId, 'shares'));
      await setDoc(shareRef, {
        userId: 'currentUserId',
        sharedAt: new Date(),
        sharedWith: sharedWith,
      });
      console.log('Post shared successfully');
    } catch (error) {
      console.error("Error sharing post: ", error);
    }
  };

  return (
    <button onClick={handleShare} className="flex items-center gap-2 bg-blue-500 text-white px-2 py-1 rounded hover:bg-blue-600">
      <FaShareAlt size={10} />
      <span className="hidden sm:inline text-xs">Share</span>
    </button>
  );
};

export default ShareButton;
