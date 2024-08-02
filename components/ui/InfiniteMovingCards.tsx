"use client";

import { cn } from "@/utils/cn";
import React, { useEffect, useState } from "react";
import { FaQuoteLeft, FaStar, FaStarHalfAlt } from "react-icons/fa";
import ImageWithFallback from "../ImageWithFallback";

export const InfiniteMovingCards = ({
  items,
  direction = "left",
  speed = "fast",
  pauseOnHover = true,
  className,
}: {
  items: {
    rating: number;
    quote: string;
    name: string;
    title: string;
    imageUrl: string;
    fallbackImageUrl: string;
  }[];
  direction?: "left" | "right";
  speed?: "fast" | "normal" | "slow";
  pauseOnHover?: boolean;
  className?: string;
}) => {
  const containerRef = React.useRef<HTMLDivElement>(null);
  const scrollerRef = React.useRef<HTMLUListElement>(null);

  useEffect(() => {
    addAnimation();
  }, []);
  const [start, setStart] = useState(false);

  function addAnimation() {
    if (containerRef.current && scrollerRef.current) {
      const scrollerContent = Array.from(scrollerRef.current.children);

      scrollerContent.forEach((item) => {
        const duplicatedItem = item.cloneNode(true);
        if (scrollerRef.current) {
          scrollerRef.current.appendChild(duplicatedItem);
        }
      });

      getDirection();
      getSpeed();
      setStart(true);
    }
  }

  const getDirection = () => {
    if (containerRef.current) {
      if (direction === "left") {
        containerRef.current.style.setProperty(
          "--animation-direction",
          "forwards"
        );
      } else {
        containerRef.current.style.setProperty(
          "--animation-direction",
          "reverse"
        );
      }
    }
  };

  const getSpeed = () => {
    if (containerRef.current) {
      if (speed === "fast") {
        containerRef.current.style.setProperty("--animation-duration", "20s");
      } else if (speed === "normal") {
        containerRef.current.style.setProperty("--animation-duration", "40s");
      } else {
        containerRef.current.style.setProperty("--animation-duration", "80s");
      }
    }
  };

  // Helper function to render stars based on rating
  const renderStars = (rating: number) => {
    const stars = [];
    const fullStars = Math.floor(rating);
    const hasHalfStar = rating % 1 >= 0.5;

    for (let i = 0; i < fullStars; i++) {
      stars.push(<FaStar key={`full-${i}`} className="text-yellow-400 text-lg" />);
    }
    if (hasHalfStar) {
      stars.push(<FaStarHalfAlt key="half" className="text-yellow-400 text-lg" />);
    }
    return stars;
  };

  return (
    <div
      ref={containerRef}
      className={cn(
        "scroller relative z-20 w-screen overflow-hidden [mask-image:linear-gradient(to_right,transparent,white_20%,white_80%,transparent)]",
        className
      )}
    >
      <ul
        ref={scrollerRef}
        className={cn(
          "flex min-w-full shrink-0 gap-12 py-4 w-max flex-nowrap",
          start && "animate-scroll ",
          pauseOnHover && "hover:[animation-play-state:paused]"
        )}
      >
        {items.map((item, idx) => (
          <li
            className="w-[90vw] max-w-full relative rounded-2xl border border-b-0 flex-shrink-0 border-slate-800 p-4 md:p-10 md:w-[50vw]"
            style={{
              background: "rgb(4,7,29)",
              backgroundColor: "linear-gradient(90deg, rgba(4,7,29,1) 0%, rgba(12,14,35,1) 100%)",
            }}
            key={idx}
          >
            <blockquote>
              <div
                aria-hidden="true"
                className="user-select-none -z-1 pointer-events-none absolute -left-0.5 -top-0.5 h-[calc(100%_+_4px)] w-[calc(100%_+_4px)]"
              ></div>
              <div className="absolute top-4 right-4 text-white text-3xl">
                <FaQuoteLeft />
              </div>
              <div className="flex justify-between items-center gap-4 mb-4 md:mb-6">
                <span className="flex items-center gap-1 text-yellow-400 text-lg">
                  {renderStars(item.rating)}
                </span>
              </div>
              <span className="relative z-20 text-md md:text-md lg:text-lg leading-[1.6] text-white-100 font-normal">
                {item.quote}
              </span>
              <div className="relative z-20 mt-6 flex flex-row items-center">
                <span className="flex items-center gap-4">
                  {/* Profile photo */}
                  <div className="me-3">
                    <ImageWithFallback
                      src={item.imageUrl}
                      fallbackSrc="/profile.svg"
                      alt="Profile"
                      className="avatar-image"
                      width={40}
                      height={40}
                    />
                  </div>
                  <div className="text-sm leading-6">
                    <p className="font-semibold text-gray-200">
                      <a href="#" className="hover:text-gray-400">
                        {item.name}
                      </a>
                    </p>
                    <p className="text-gray-500">
                      {item.title}
                    </p>
                  </div>
                </span>
              </div>
            </blockquote>
          </li>
        ))}
      </ul>
    </div>
  );
};


export default InfiniteMovingCards;





// Update code to implement "Read more"

// 'use client';

// import React, { useState } from 'react';
// import { cn } from "@/utils/cn";
// import { FaQuoteLeft, FaTimes, FaRegThumbsUp, FaRegCommentDots } from 'react-icons/fa';
// import ImageWithFallback from '../ImageWithFallback';
// import { testimonials } from '@/data';

// const truncateText = (text: string, maxLength: number) => {
//   return text.length > maxLength ? text.substring(0, maxLength) + '...' : text;
// };

// const InfiniteMovingCards = ({
//   items,
//   direction = "left",
//   speed = "fast",
//   pauseOnHover = true,
//   className,
// }: {
//   items: {
//     rating: number;
//     quote: string;
//     name: string;
//     title: string;
//     imageUrl: string;
//     fallbackImageUrl: string;
//     fullQuote?: string; // Add this if not already present
//   }[];
//   direction?: "left" | "right";
//   speed?: "fast" | "normal" | "slow";
//   pauseOnHover?: boolean;
//   className?: string;
// }) => {
//   const [selectedItem, setSelectedItem] = useState(null);
//   const [isModalOpen, setIsModalOpen] = useState(false);

//   const handleReadMore = (item) => {
//     setSelectedItem(item);
//     setIsModalOpen(true);
//   };

//   const closeModal = () => {
//     setIsModalOpen(false);
//   };

//   // CSS for the scrolling effect
//   const speedClasses = {
//     fast: "scroll-fast",
//     normal: "scroll-normal",
//     slow: "scroll-slow",
//   };

//   const directionClasses = {
//     left: "scroll-left",
//     right: "scroll-right",
//   };

//   return (
//     <>
//       <div className={cn("scroller relative z-20 w-screen overflow-hidden", className)}>
//         <ul className={cn(
//           "flex min-w-full shrink-0 gap-12 py-4 w-max flex-nowrap",
//           speedClasses[speed],
//           directionClasses[direction],
//           pauseOnHover && "hover:[animation-play-state:paused]"
//         )}>
//           {items.map((item, idx) => (
//             <li
//               className="w-[90vw] max-w-full relative rounded-2xl border border-b-0 flex-shrink-0 border-slate-800 p-4 md:p-10 md:w-[50vw]"
//               style={{
//                 background: "rgb(4,7,29)",
//                 backgroundColor: "linear-gradient(90deg, rgba(4,7,29,1) 0%, rgba(12,14,35,1) 100%)",
//               }}
//               key={idx}
//             >
//               <blockquote>
//                 <div className="absolute top-4 right-4 text-white text-3xl">
//                   <FaQuoteLeft />
//                 </div>
//                 <div className="flex justify-between items-center gap-4">
//                   <span className="text-yellow-400 text-lg">
//                     {"★".repeat(item.rating)}{"☆".repeat(5 - item.rating)}
//                   </span>
//                 </div>
//                 <p className="relative z-20 text-md md:text-md lg:text-lg leading-[1.6] text-white-100 font-normal mb-4">
//                   {truncateText(item.quote, 150)}
//                 </p>
//                 <button 
//                   className="text-blue-500 hover:underline"
//                   onClick={() => handleReadMore(item)}
//                 >
//                   Read more
//                 </button>
//                 <div className="relative z-20 mt-6 flex flex-row items-center">
//                   <span className="flex items-center gap-4">
//                     <div className="me-3">
//                       <ImageWithFallback
//                         src={item.imageUrl}
//                         fallbackSrc={item.fallbackImageUrl}
//                         alt="Profile"
//                         className="avatar-image"
//                         width={40}
//                         height={40}
//                       />
//                     </div>
//                     <div className="text-sm leading-6">
//                       <p className="font-semibold text-gray-200">
//                         <a href="#" className="hover:text-gray-400">
//                           {item.name}
//                         </a>
//                       </p>
//                       <p className="text-gray-500">
//                         {item.title}
//                       </p>
//                     </div>
//                   </span>
//                 </div>
//               </blockquote>
//             </li>
//           ))}
//         </ul>
//       </div>

//       {isModalOpen && selectedItem && (
//         <div className="fixed inset-0 z-50 bg-black bg-opacity-75 flex items-center justify-center">
//           <div className="bg-gray-800 p-8 rounded-lg w-full max-w-4xl relative">
//             <button
//               className="absolute top-4 right-4 text-white text-2xl"
//               onClick={closeModal}
//             >
//               <FaTimes />
//             </button>
//             <div className="flex gap-6 mb-6">
//               <div className="flex-shrink-0">
//                 <ImageWithFallback
//                   src={selectedItem.imageUrl}
//                   fallbackSrc={selectedItem.fallbackImageUrl}
//                   alt="Profile"
//                   className="w-32 h-32 rounded-lg"
//                   width={500}
//                   height={300}
//                 />
//               </div>
//               <div className="flex-grow">
//                 <h2 className="text-white text-2xl font-semibold">{selectedItem.name}</h2>
//                 <p className="text-gray-400">{selectedItem.title}</p>
//                 <div className="flex gap-4 mt-2">
//                   <button className="bg-blue-500 text-white px-4 py-2 rounded shadow-md flex items-center gap-2">
//                     <FaRegThumbsUp />
//                     Like
//                   </button>
//                   <button className="bg-blue-500 text-white px-4 py-2 rounded shadow-md flex items-center gap-2">
//                     <FaRegCommentDots />
//                     Comment
//                   </button>
//                 </div>
//               </div>
//             </div>
//             <div className="bg-gray-700 p-6 rounded-lg mb-6 text-white">
//               <p>{selectedItem.fullQuote || selectedItem.quote}</p>
//               <div className="mt-4">
//                 <textarea
//                   className="w-full p-2 rounded bg-gray-600 text-white"
//                   placeholder="Add a comment..."
//                   rows={4}
//                 />
//                 <div className="flex gap-4 mt-4">
//                   <button className="bg-green-500 text-white px-4 py-2 rounded shadow-md">Save</button>
//                   <button className="bg-yellow-500 text-white px-4 py-2 rounded shadow-md">Edit</button>
//                 </div>
//               </div>
//             </div>
//           </div>
//         </div>
//       )}
//     </>
//   );
// };

// export default InfiniteMovingCards;



// Latest code for testimonial avatar been to large on the read more modal

