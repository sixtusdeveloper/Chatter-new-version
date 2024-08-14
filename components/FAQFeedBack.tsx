'use client';

import React, { useState } from 'react';
import { getFirestore, collection, addDoc, Timestamp } from 'firebase/firestore';
import { firebaseApp } from '@/firebase/firebaseConfig'; // Import Firebase configuration

const db = getFirestore(firebaseApp);

const FAQFeedBack = () => {
  const [feedbackGiven, setFeedbackGiven] = useState(false);
  const [positiveFeedback, setPositiveFeedback] = useState(true); // Default to positive feedback

  const handleFeedback = async (isHelpful: boolean) => {
    setFeedbackGiven(true);
    setPositiveFeedback(isHelpful);

    // Store feedback in Firestore
    try {
      const docRef = await addDoc(collection(db, 'faqFeedback'), {
        isHelpful,
        timestamp: Timestamp.now(),
      });
      console.log('Feedback recorded with ID: ', docRef.id);
    } catch (error) {
      console.error('Error recording feedback: ', error);
    }

    // Hide feedback message after 5 seconds
    setTimeout(() => {
      setFeedbackGiven(false);
    }, 5000);
  };

  return (
    <div className="flex-1 justify-center items-center text-center mt-4 md:mt-10">
      <p>Did you find the Questions and Answers helpful?</p>
      <div className="mt-4 flex justify-center space-x-4">
        <button
          onClick={() => handleFeedback(true)}
          className="bg-black-200 ring-1 text-white py-2 px-4 rounded focus:outline-none"
        >
          👍 Yes
        </button>
        <button
          onClick={() => handleFeedback(false)}
          className="bg-black-200 ring-1 text-white py-2 px-4 rounded focus:outline-none"
        >
          👎 No
        </button>
      </div>
      {feedbackGiven && (
        <div className="relative mt-4 mx-auto w-11/12 sm:w-10/12 md:w-9/12 lg:w-8/12">
          <div className="absolute top-full left-0 right-0 bg-black-200 border-t border-b border:bg-black-300 text-green-500 text-sm px-4 py-3 rounded-lg shadow-lg">
            <div className="max-w-screen-xl mx-auto">
              <p className="font-bold">
                {positiveFeedback ? "Thank you for your feedback!" : "Oh, 😢 feel free to send us a DM for your concerns"}
              </p>
            </div>
            <button
              onClick={() => setFeedbackGiven(false)}
              className="absolute top-0 right-0 mt-1 mr-2 text-purple hover:text-white hover:bg-black-300 rounded-full"
            >
              <svg className="h-6 w-6 fill-current" viewBox="0 0 20 20">
                <path
                  fillRule="evenodd"
                  d="M13.414 6.586a2 2 0 10-2.828-2.828L10 7.172 8.414 5.586a2 2 0 10-2.828 2.828L7.172 10l-1.586 1.586a2 2 0 102.828 2.828L10 12.828l1.586 1.586a2 2 0 102.828-2.828L12.828 10l1.586-1.586z"
                  clipRule="evenodd"
                />
              </svg>
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default FAQFeedBack;



// 'use client';

// import React, { useState } from 'react';

// const FAQFeedBack = () => {
//   const [feedbackGiven, setFeedbackGiven] = useState(false);
//   const [positiveFeedback, setPositiveFeedback] = useState(true); // Default to positive feedback

//   const handleFeedback = (isHelpful: boolean | ((prevState: boolean) => boolean)) => {
//     setFeedbackGiven(true);
//     setPositiveFeedback(isHelpful);

//     setTimeout(() => {
//       setFeedbackGiven(false);
//     }, 5000);
//   };

//   return (
//     <div className="flex-1 justify-center items-center text-center mt-4 md:mt-10">
//       <p>Did you find the Questions and Answers helpful?</p>
//       <div className="mt-4 flex justify-center space-x-4">
//         <button
//           onClick={() => handleFeedback(true)}
//           className="bg-black-200 ring-1 text-white py-2 px-4 rounded focus:outline-none"
//         >
//           👍 Yes
//         </button>
//         <button
//           onClick={() => handleFeedback(false)}
//           className="bg-black-200 ring-1 text-white py-2 px-4 rounded focus:outline-none"
//         >
//           👎 No
//         </button>
//       </div>
//       {feedbackGiven && (
//         <div className="relative mt-4 mx-auto w-11/12 sm:w-10/12 md:w-9/12 lg:w-8/12">
//           <div className="absolute top-full left-0 right-0 bg-black-200 border-t border-b border:bg-black-300 text-green-500 text-sm px-4 py-3 rounded-lg shadow-lg">
//             <div className="max-w-screen-xl mx-auto">
//               <p className="font-bold">
//                 {positiveFeedback ? "Thank you for your feedback!" : "Oh, 😢 feel free to send us a DM for your concerns"}
//               </p>
//             </div>
//             <button
//               onClick={() => setFeedbackGiven(false)}
//               className="absolute top-0 right-0 mt-1 mr-2 text-purple hover:text-white hover:bg-black-300 rounded-full"
//             >
//               <svg className="h-6 w-6 fill-current" viewBox="0 0 20 20">
//                 <path
//                   fillRule="evenodd"
//                   d="M13.414 6.586a2 2 0 10-2.828-2.828L10 7.172 8.414 5.586a2 2 0 10-2.828 2.828L7.172 10l-1.586 1.586a2 2 0 102.828 2.828L10 12.828l1.586 1.586a2 2 0 102.828-2.828L12.828 10l1.586-1.586z"
//                   clipRule="evenodd"
//                 />
//               </svg>
//             </button>
//           </div>
//         </div>
//       )}
//     </div>
//   );
// };

// export default FAQFeedBack;
