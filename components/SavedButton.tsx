// components/SaveButton.tsx
import React, { useState } from 'react';
import { FaBookmark, FaRegBookmark } from 'react-icons/fa'; // Import save icons from React Icons
import { db } from '../firebase/firebaseConfig'; // Ensure correct import
import { doc, setDoc } from 'firebase/firestore';

interface SaveButtonProps {
  postId: string;
}

const SaveButton: React.FC<SaveButtonProps> = ({ postId }) => {
  const [isSaved, setIsSaved] = useState<boolean>(false);

  const handleSave = async () => {
    try {
      const userId = 'currentUserId'; // Replace with actual current user ID
      const saveRef = doc(db, 'posts', postId, 'saves', userId);
      await setDoc(saveRef, {
        savedAt: new Date(),
      });
      setIsSaved(true);
    } catch (error) {
      console.error("Error saving post: ", error);
    }
  };

  return (
    <button onClick={handleSave} disabled={isSaved} className={`flex items-center gap-2 px-2 py-1 rounded ${isSaved ? 'bg-gray-500' : 'bg-green-500'} text-white hover:${isSaved ? 'bg-gray-600' : 'bg-green-600'}`}>
      {isSaved ? <FaBookmark size={10} /> : <FaRegBookmark size={10} />}
      <span className="hidden text-xs sm:inline">{isSaved ? 'Saved' : 'Save'}</span>
    </button>
  );
};

export default SaveButton;
