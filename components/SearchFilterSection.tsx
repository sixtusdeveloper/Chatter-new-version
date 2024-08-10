'use client';


import React, { useState } from 'react';

interface Post {
  title: string;
  category: string;
  tags: string[];
  // Other properties of a post
}

interface SearchFilterSectionProps {
  posts: Post[];
  onFilteredPosts: (filteredPosts: Post[]) => void;
}

const SearchFilterSection: React.FC<SearchFilterSectionProps> = ({ posts, onFilteredPosts }) => {
  const [searchQuery, setSearchQuery] = useState('');

  const handleSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchQuery(e.target.value);
    const filteredPosts = posts.filter(
      (post) =>
        post.category.toLowerCase().includes(e.target.value.toLowerCase()) ||
        post.tags.some(tag => tag.toLowerCase().includes(e.target.value.toLowerCase()))
    );
    onFilteredPosts(filteredPosts); // Pass the filtered posts back to the parent component
  };

  return (
    <section className="bg-gray-900 relative md:pt-10 mx-auto max-w-7xl px-6 lg:px-8 border-b border-gray-800 pb-20">
      <h3 className="text-[1.8rem] text-center font-bold text-white lg:text-[2rem] py-4">
        Search your Favorite <span className='text-purple'>Post</span> below 👇
      </h3>
      <p className="text-center text-white-100 text-md p-2">Filter posts by category or tag name</p>
      <div className="container mx-auto max-w-4xl px-6 flex flex-col lg:flex-row justify-between items-center">
        <div className="flex-grow mb-4 lg:mb-0 w-full lg:w-auto">
          <input
            type="text"
            placeholder="Search posts by category or tag..."
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













// import React, { useState } from 'react';

// const SearchFilterSection = () => {
//   const [searchQuery, setSearchQuery] = useState('');

//   const handleSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
//     setSearchQuery(e.target.value);
//     // Implement search functionality here
//   };

//   return (
//     <section className="bg-gray-900 relative md:pt-10 mx-auto max-w-7xl px-6 lg:px-8 border-b border-gray-800 pb-20">
//       <h3 className="text-[1.8rem] text-center font-bold text-white lg:text-[2rem] py-4">Search your Favorite <span className='text-purple'>Post</span>&nbsp;below&nbsp;👇</h3>
//       <p className="text-center text-white-100 text-md p-2">Filter posts by category or tag name</p>
//       <div className="container mx-auto max-w-4xl px-6 flex flex-col lg:flex-row justify-between items-center">
//         <div className="flex-grow mb-4 lg:mb-0 w-full lg:w-auto">
//           <input
//             type="text"
//             placeholder="Search posts by category..."
//             value={searchQuery}
//             onChange={handleSearch}
//             className="w-full px-4 md:py-3 py-2 border border-gray-800 rounded-full bg-black-100 text-white md:w-80 lg:w-full"
//           />
//         </div>
//       </div>
//     </section>
//   );
// };

// export default SearchFilterSection;
