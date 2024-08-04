




// 'use client';

// import React from 'react';
// import { FaTimes } from 'react-icons/fa';

// interface CommentDetailModalProps {
//   isOpen: boolean;
//   onClose: () => void;
//   comments: Array<{
//     commenter: {
//       name: string;
//       imageUrl: string;
//     };
//     commentText: string;
//   }>;
// }

// const CommentDetailModal: React.FC<CommentDetailModalProps> = ({ isOpen, onClose, comments }) => {
//   if (!isOpen) return null;

//   return (
//     <div className="fixed inset-0 z-50 flex items-center justify-center bg-gray-800 bg-opacity-70">
//       <div className="bg-gray-800 rounded-lg shadow-lg w-full max-w-2xl p-6 relative border border-gray-700 z-50 overflow-auto">
//         <button
//           onClick={onClose}
//           className="absolute top-2 right-2 text-gray-400 hover:text-gray-200 p-2"
//         >
//           <FaTimes size={18} />
//         </button>
//         <h2 className="text-xl font-bold text-white mb-4">Comments</h2>
//         <div>
//         {comments?.map((comment, index) => (
//             <div key={index} className="flex mb-4">
//                 <img src={comment.commenter.imageUrl} alt={comment.commenter.name} className="w-10 h-10 rounded-full mr-3" />
//                 <div>
//                 <p className="font-semibold text-white">{comment.commenter.name}</p>
//                 <p className="text-gray-300">{comment.commentText}</p>
//               </div>
//             </div>
//           ))}
//         </div>
//       </div>
//     </div>
//   );
// };

// export default CommentDetailModal;














// 'use client';

// import React from 'react';
// import { FaTimes } from 'react-icons/fa';

// interface CommentDetailModalProps {
//   isOpen: boolean;
//   onClose: () => void;
//   comments: Array<{
//     commenter: {
//       name: string;
//       imageUrl: string;
//     };
//     commentText: string;
//   }>;
// }

// const CommentDetailModal: React.FC<CommentDetailModalProps> = ({ isOpen, onClose, comments }) => {
//   if (!isOpen) return null;

//   return (
//     <div className="fixed inset-0 z-50 flex items-center justify-center">
//       <div className="fixed inset-0 bg-gray-800 bg-opacity-70 z-40"></div>
//       <div className="bg-gray-800 rounded-lg shadow-lg w-full max-w-lg h-auto p-6 relative border border-gray-700 z-50 overflow-hidden">
//         <button
//           onClick={onClose}
//           className="absolute top-2 right-2 text-gray-400 hover:text-gray-200 p-2 z-60"
//         >
//           <FaTimes size={18} />
//         </button>
//         <div className="overflow-y-auto">
//           {comments?.length ? (
//             comments.map((comment, index) => (
//               <div key={index} className="mb-4 flex items-start">
//                 <img src={comment.commenter.imageUrl} alt={comment.commenter.name} className="w-10 h-10 rounded-full" />
//                 <div className="ml-4">
//                   <p className="text-sm font-semibold text-white">{comment.commenter.name}</p>
//                   <p className="mt-1 text-sm text-gray-300">{comment.commentText}</p>
//                 </div>
//               </div>
//             ))
//           ) : (
//             <p className="text-gray-400">No comments yet.</p>
//           )}
//         </div>
//       </div>
//     </div>
//   );
// };

// export default CommentDetailModal;










// WOrking better ===================================/


// import React from 'react';
// import { FaTimes } from 'react-icons/fa';

// interface CommentDetailModalProps {
//   isOpen: boolean;
//   onClose: () => void;
//   comment: {
//     commenter: {
//       name: string;
//       imageUrl: string;
//     };
//     commentText: string;
//   } | null;
// }

// const CommentDetailModal: React.FC<CommentDetailModalProps> = ({ isOpen, onClose, comment }) => {
//   if (!isOpen || !comment) return null;

//   return (
//     <div className="fixed inset-0 z-50 flex items-center justify-center">
//       <div className="fixed inset-0 bg-gray-800 bg-opacity-70 z-40"></div>
//       <div className="bg-gray-800 rounded-lg shadow-lg w-full max-w-md p-6 relative border border-gray-700 z-50">
//         <button
//           onClick={onClose}
//           className="absolute top-2 right-2 text-gray-400 hover:text-gray-200 p-2 z-60"
//         >
//           <FaTimes size={18} />
//         </button>
//         <div className="flex items-start gap-4">
//           <img src={comment.commenter.imageUrl} alt={comment.commenter.name} className="w-12 h-12 rounded-full" />
//           <div>
//             <p className="font-semibold text-white">{comment.commenter.name}</p>
//             <p className="text-gray-300">{comment.commentText}</p>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default CommentDetailModal;



















// Displaying the modal as expected but with no content within it
'use client';

import React from 'react';
import { Dialog, DialogPanel } from '@headlessui/react';
import { FaTimes } from 'react-icons/fa';

interface CommentDetailModalProps {
  isOpen: boolean;
  onClose: () => void;
  comment: {
    commenter: {
      name: string;
      imageUrl: string;
    };
    commentText: string;
  } | null;
  post: {
    author: {
      name: string;
      imageUrl: string;
    };
  };
  className?: string;
}

const CommentDetailModal: React.FC<CommentDetailModalProps> = ({
  isOpen,
  onClose,
  comment,
  post,
  className = "", // Default to an empty string if not provided
}) => {
  if (!isOpen) return null;

  const commenterName = comment?.commenter?.name || 'Unknown';
  const commenterImageUrl = comment?.commenter?.imageUrl || '';
  const commentText = comment?.commentText || '';

  return (
    <Dialog open={isOpen} onClose={onClose} className={`fixed inset-0 z-50 ${className}`}>
      {/* Background overlay */}
      <div className="fixed inset-0 bg-gray-800 bg-opacity-70 z-40"></div>
      {/* Modal panel */}
      <DialogPanel className="absolute inset-0 flex items-center justify-center z-50">
        <div className="relative w-full max-w-md mx-auto p-4 bg-gray-800 rounded-lg border border-gray-700">
          <button
            onClick={onClose}
            className="absolute top-2 right-2 text-gray-400 hover:text-gray-200 p-2"
          >
            <FaTimes size={18} />
          </button>
          <div className="flex items-start">
            <img
              src={commenterImageUrl}
              alt={commenterName}
              className="w-12 h-12 rounded-full"
            />
            <div className="ml-4">
              <p className="text-lg font-semibold text-white">{commenterName}</p>
              <p className="text-sm text-gray-300">{commentText}</p>
            </div>
          </div>
        </div>
      </DialogPanel>
    </Dialog>
  );
};

export default CommentDetailModal;
