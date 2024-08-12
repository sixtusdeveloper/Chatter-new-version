import React, { useState } from 'react';
import { Post } from '@/types'; // Import the correct Post type

interface SearchFilterSectionProps {
  posts: Post[];
  onFilteredPosts: (filteredPosts: Post[]) => void;
}

const SearchFilterSection: React.FC<SearchFilterSectionProps> = ({ posts, onFilteredPosts }) => {
  const [searchQuery, setSearchQuery] = useState('');

  const handleSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
    const query = e.target.value.toLowerCase();
    setSearchQuery(query);

    const filteredPosts = posts.filter((post) => {
      const searchInTitle = post.title.toLowerCase().includes(query);
      const searchInCategory = post.category.title.toLowerCase().includes(query);
      const searchInTags = post.tags?.some(tag => tag.toLowerCase().includes(query)) ?? false; // Handle undefined tags
      const searchInContent = (post.content ?? '').toLowerCase().includes(query); // Handle undefined content
      const searchInDescription = (post.description ?? '').toLowerCase().includes(query); // Handle undefined description

      return searchInTitle || searchInCategory || searchInTags || searchInContent || searchInDescription;
    });

    onFilteredPosts(filteredPosts); // Pass the filtered posts back to the parent component
  };

  return (
    <section className="relative md:pt-10 mx-auto max-w-7xl px-6 lg:px-8 pb-10">
      <h3 className="text-[1.3rem] text-center font-bold text-white lg:text-[2rem] py-4">
        Search your Favorite <span className='text-purple'>Post</span> below 👇
      </h3>
      <p className="text-center text-white-100 text-md p-2">Filter posts by title, category, tags, content, or description</p>
      <div className="container mx-auto max-w-4xl px-6 flex flex-col lg:flex-row justify-between items-center">
        <div className="flex-grow mb-0 lg:mb-0 w-full lg:w-auto">
          <input
            type="text"
            placeholder="Search posts..."
            value={searchQuery}
            onChange={handleSearch}
            className="w-full px-4 md:py-3 py-2 border border-gray-700 rounded-full bg-black-200 text-white md:w-80 lg:w-full"
          />
        </div>
      </div>
    </section>
  );
};

export default SearchFilterSection;













