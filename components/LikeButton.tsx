'use client';

// components/LikeButton.tsx
import { useState } from 'react';
import { FaThumbsUp } from 'react-icons/fa';

const LikeButton = () => {
  const [likes, setLikes] = useState<number>(0);
  const [liked, setLiked] = useState<boolean>(false);

  const handleLike = () => {
    if (liked) {
      setLikes(likes - 1);
    } else {
      setLikes(likes + 1);
    }
    setLiked(!liked);
  };

  return (
    <button
      className={`flex items-center gap-2 ${liked ? 'text-blue-400 border-blue-400' : 'text-gray-400 border-gray-800'} bg-transparent rounded-full border py-1 px-4 transition-all duration-200`}
      onClick={handleLike}
    >
      <FaThumbsUp size={18} />
      <span>{likes}</span>
    </button>
  );
};

export default LikeButton;
