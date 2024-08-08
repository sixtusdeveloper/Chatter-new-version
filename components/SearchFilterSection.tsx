import React, { useState } from 'react';

const SearchFilterSection = () => {
  const [searchQuery, setSearchQuery] = useState('');

  const handleSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchQuery(e.target.value);
    // Implement search functionality here
  };

  return (
    <section className="bg-gray-900 relative md:pt-10 mx-auto max-w-7xl px-6 lg:px-8 border-b border-gray-800 pb-20">
      <h3 className="text-[1.8rem] text-center font-bold  text-white sm:text-[2rem] py-8">Search your Favorite <span className='text-purple'>Post</span>&nbsp;below&nbsp;👇</h3>
      <div className="container mx-auto max-w-4xl px-6 flex flex-col lg:flex-row justify-between items-center">
        <div className="flex-grow mb-4 lg:mb-0 w-full lg:w-auto">
          <input
            type="text"
            placeholder="Search posts by category..."
            value={searchQuery}
            onChange={handleSearch}
            className="w-full px-4 md:py-3 py-2 border border-gray-800 rounded-full bg-black-100 text-white md:w-80 lg:w-full"
          />
        </div>
      </div>
    </section>
  );
};

export default SearchFilterSection;
