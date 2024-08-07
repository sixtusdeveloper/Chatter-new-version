'use client';

import React, { useState } from 'react';
import { FaChevronDown, FaChevronUp } from 'react-icons/fa';

const categories = [
  { id: 1, name: 'Technology', slug: 'technology' },
  { id: 2, name: 'Science', slug: 'science' },
  { id: 3, name: 'Health', slug: 'health' },
  { id: 4, name: 'Business', slug: 'business' },
  { id: 5, name: 'Entertainment', slug: 'entertainment' },
  { id: 6, name: 'Sports', slug: 'sports' },
  { id: 7, name: 'Education', slug: 'education' },
  { id: 8, name: 'Travel', slug: 'travel' },
  { id: 9, name: 'Food', slug: 'food' },
  { id: 10, name: 'Fashion', slug: 'fashion' },
  { id: 11, name: 'Finance', slug: 'finance' },
  { id: 12, name: 'Environment', slug: 'environment' },
  { id: 13, name: 'Politics', slug: 'politics' },
  { id: 14, name: 'History', slug: 'history' },
  { id: 15, name: 'Art', slug: 'art' },
  { id: 16, name: 'Music', slug: 'music' },
  { id: 17, name: 'Gaming', slug: 'gaming' },
  { id: 18, name: 'Literature', slug: 'literature' },
  { id: 19, name: 'Marketing', slug: 'marketing' },
  { id: 20, name: 'Writing', slug: 'writing' },
  { id: 21, name: 'SEO', slug: 'seo' },
  { id: 22, name: 'Architecture', slug: 'architecture' },
  { id: 23, name: 'Design', slug: 'design' },
];

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
              className="px-4 py-2 bg-gray-800 p-1 rounded-full border border-gray-700 text-center text-gray-300"
            >
              {category.name}
            </a>
          ))}
        </div>
        <div className="flex justify-center mt-6">
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
