'use client';

import React, { useState } from 'react';
import { FaChevronDown, FaChevronUp } from 'react-icons/fa';
import { categories } from '@/data';


const CategoriesSection = () => {
  const [showMore, setShowMore] = useState(false);

  const displayedCategories = showMore ? categories : categories.slice(0, 15);

  return (
    <section className="bg-black-200 py-12" id="categories">
      <div className="container max-w-screen-lg mx-auto px-6">
        <h2 className="text-center text-[2.5rem] font-bold tracking-wide text-white sm:text-[2.7rem] py-6 mb-4 md:mb-7 md:py-10">
          Post &nbsp;<span className='text-purple'>Categories</span>
        </h2>
        <div className="flex flex-wrap justify-center gap-4">
          {displayedCategories.map(category => (
            <a
              key={category.id}
              href={`/categories/${category.slug}`}
              className="px-4 py-2 bg-gray-800 p-1 rounded-full border border-gray-700 text-center hover:bg-black-200 text-gray-300"
            >
              {category.name}
            </a>
          ))}
        </div>
        <div className="flex justify-center mt-8 md:mt-14">
          <button
            onClick={() => setShowMore(!showMore)}
            className="flex items-center bg-purple-500 text-purple text-md py-2 px-4 rounded hover:bg-purple-600"
          >
            {showMore ? (
              <>
                View Less <FaChevronUp className="ml-2" />
              </>
            ) : (
              <>
                View More <FaChevronDown className="ml-2" />
              </>
            )}
          </button>
        </div>
      </div>
    </section>
  );
};

export default CategoriesSection;
