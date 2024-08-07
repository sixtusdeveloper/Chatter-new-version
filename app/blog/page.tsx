// pages/blog.tsx
"use client";

import React from "react";
import Navbar from '@/components/NavBar';
import { blogNavigation } from '@/data';
import WelcomeSection from "@/components/WelcomeSection";
import SearchFilterSection from '@/components/SearchFilterSection';
import FeaturedPostsSection from '@/components/FeaturedPostsSection';
import AllPostsSection from '@/components/AllPostsSection';
import CategoriesSection from '@/components/CategoriesSection';
import BlogFooter from "@/components/BlogFooter";
import withAuth from '@/components/WithAuth';

function Blog() {
  return (
    <>
      <main className="relative bg-black-100 flex justify-center items-center flex-col mx-auto sm:px-10 px-5 overflow-clip">
        <div className="max-w-7xl w-screen">
          <Navbar navigation={blogNavigation} />
          <WelcomeSection />
          <SearchFilterSection />
          <FeaturedPostsSection />
          <AllPostsSection />
          <CategoriesSection />
          <BlogFooter />
        </div>
      </main>
    </>
  );
}

export default withAuth(Blog);
