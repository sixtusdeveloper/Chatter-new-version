'use client';
import React, { useState } from 'react';

// import '@/styles/comment.css';

interface Comment {
  id: number;
  author: string;
  avatarUrl: string;
  text: string;
  likes: number;
  replies: Comment[];
  emojis: Record<string, number>;
}

interface CommentWithRepliesProps {
  comment: Comment;
  onReply: (commentId: number, text: string) => void;
  onLike: (commentId: number) => void;
  onAddEmoji: (commentId: number, emoji: string) => void;
}

const CommentWithReplies: React.FC<CommentWithRepliesProps> = ({ comment, onReply, onLike, onAddEmoji }) => {
  const [replyText, setReplyText] = useState('');
  const [showReplyInput, setShowReplyInput] = useState(false);

  const handleReply = () => {
    onReply(comment.id, replyText);
    setReplyText('');
    setShowReplyInput(false);
  };

  const handleEmojiClick = (emoji: string) => {
    onAddEmoji(comment.id, emoji);
  };

  return (
    <div className="comment-container">
      <div className="comment-header">
        <img src={comment.avatarUrl} alt={`${comment.author}'s avatar`} className="avatar" />
        <span className="author-name">{comment.author}</span>
      </div>
      <p>{comment.text}</p>
      <div className="comment-actions">
        <button onClick={() => onLike(comment.id)}>Like ({comment.likes})</button>
        <button onClick={() => setShowReplyInput(!showReplyInput)}>Reply</button>
        <div className="emoji-section">
          {Object.entries(comment.emojis).map(([emoji, count]) => (
            <span key={emoji} onClick={() => handleEmojiClick(emoji)}>
              {emoji} ({count})
            </span>
          ))}
          <span onClick={() => handleEmojiClick('👍')}>👍</span>
          <span onClick={() => handleEmojiClick('❤️')}>❤️</span>
          <span onClick={() => handleEmojiClick('😂')}>😂</span>
        </div>
      </div>
      {showReplyInput && (
        <div className="reply-input">
          <input
            type="text"
            value={replyText}
            onChange={(e) => setReplyText(e.target.value)}
            placeholder="Write a reply..."
          />
          <button onClick={handleReply}>Reply</button>
        </div>
      )}
      <div className="replies">
        {comment.replies.map((reply) => (
          <CommentWithReplies
            key={reply.id}
            comment={reply}
            onReply={onReply}
            onLike={onLike}
            onAddEmoji={onAddEmoji}
          />
        ))}
      </div>
    </div>
  );
};

export default CommentWithReplies;
