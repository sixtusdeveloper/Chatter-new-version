"use client";

import React, { useState } from "react";
import Navbar from '@/components/NavBar';
import { blogNavigation } from '@/data';
import WelcomeSection from "@/components/WelcomeSection";
// import SearchFilterSection from '@/components/SearchFilterSection';
import FeaturedPostsSection from '@/components/FeaturedPostsSection';
import AllPostsSection from '@/components/AllPostsSection';
import CategoriesSection from '@/components/CategoriesSection';
import BlogFooter from "@/components/BlogFooter";
import withAuth from '@/components/WithAuth';
import { SignedIn, SignedOut, RedirectToSignIn } from "@clerk/nextjs";
import { posts as allPosts } from '@/data'; // Import the posts data
import { Post } from '@/types'; // Import the Post type

interface BlogProps {
  params?: {
    id: string;
  };
}

const Blog: React.FC<BlogProps> = () => {
  // Example post data, ideally you should fetch this from an API or server
  const [filteredPosts] = useState<Post[]>(allPosts); // Initialize filteredPosts with allPosts data
  
  return (
    <>
      <SignedIn>
        <main className="relative bg-black-100 flex justify-center items-center flex-col mx-auto sm:px-10 px-5 overflow-clip">
          <div className="max-w-7xl w-screen">
            <Navbar navigation={blogNavigation} />
            <WelcomeSection />
            <FeaturedPostsSection />
            <AllPostsSection />
            <CategoriesSection />
            <BlogFooter />
          </div>
        </main>
      </SignedIn>
      <SignedOut>
        <RedirectToSignIn />
      </SignedOut>
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
