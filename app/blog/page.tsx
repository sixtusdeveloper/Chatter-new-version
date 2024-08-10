"use client";

import React, { useState } from "react";
import Navbar from '@/components/NavBar';
import { blogNavigation } from '@/data';
import WelcomeSection from "@/components/WelcomeSection";
import SearchFilterSection from '@/components/SearchFilterSection';
import FeaturedPostsSection from '@/components/FeaturedPostsSection';
import AllPostsSection from '@/components/AllPostsSection';
import CategoriesSection from '@/components/CategoriesSection';
import BlogFooter from "@/components/BlogFooter";
import withAuth from '@/components/WithAuth';
import Post from "@/components/AllPostsSection";

interface BlogProps {
  params?: {
    id: string;
  };
}

const Blog: React.FC<BlogProps> = () => {
  // Example post data, ideally you should fetch this from an API or server
  const initialPosts: Post[] = [
    { title: 'Post 1', category: 'Technology', tags: ['tech', 'innovation'], content: '...', author: 'Author 1' },
    { title: 'Post 2', category: 'Design', tags: ['art', 'design'], content: '...', author: 'Author 2' },
    { title: 'Post 3', category: 'Marketing', tags: ['seo', 'marketing'], content: '...', author: 'Author 3' },
    // Add more posts as necessary
  ];

  const [posts] = useState<Post[]>(initialPosts);
  const [filteredPosts, setFilteredPosts] = useState<Post[]>(initialPosts);

  const handleFilteredPosts = (filteredPosts: Post[]) => {
    setFilteredPosts(filteredPosts);
  };

  return (
    <>
      <main className="relative bg-black-100 flex justify-center items-center flex-col mx-auto sm:px-10 px-5 overflow-clip">
        <div className="max-w-7xl w-screen">
          <Navbar navigation={blogNavigation} />
          <WelcomeSection />
          <SearchFilterSection posts={posts} onFilteredPosts={handleFilteredPosts} />
          <FeaturedPostsSection posts={filteredPosts} />
          <AllPostsSection posts={filteredPosts} />
          <CategoriesSection />
          <BlogFooter />
        </div>
      </main>
    </>
  );
}

export default Blog;
















// // pages/blog.tsx
// "use client";

// import React from "react";
// import Navbar from '@/components/NavBar';
// import { blogNavigation } from '@/data';
// import WelcomeSection from "@/components/WelcomeSection";
// import SearchFilterSection from '@/components/SearchFilterSection';
// import FeaturedPostsSection from '@/components/FeaturedPostsSection';
// import AllPostsSection from '@/components/AllPostsSection';
// import CategoriesSection from '@/components/CategoriesSection';
// import BlogFooter from "@/components/BlogFooter";
// import withAuth from '@/components/WithAuth';
// import { Post } from "@/types";


// function Blog() {
//   return (
//     <>
//       <main className="relative bg-black-100 flex justify-center items-center flex-col mx-auto sm:px-10 px-5 overflow-clip">
//         <div className="max-w-7xl w-screen">
//           <Navbar navigation={blogNavigation} />
//           <WelcomeSection />
//           <SearchFilterSection />
//           <FeaturedPostsSection />
//           <AllPostsSection />
//           <CategoriesSection />
//           <BlogFooter />
//         </div>
//       </main>
//     </>
//   );
// }

// export default Blog;
