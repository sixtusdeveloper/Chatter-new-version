import React from 'react';
import SingleNavigation from '@/components/SingleNav';
import { singlePostNavigation } from '@/data';
import SingleDetailPost from '@/components/SingleDetailPost';
import BlogFooter from '@/components/BlogFooter';
import { SignedIn, SignedOut, RedirectToSignIn } from "@clerk/nextjs";

const DetailedPost = () => {

  return (
    <>
      <SignedIn>
        <main className="relative bg-black-100 flex justify-center items-center flex-col mx-auto sm:px-10 px-5 overflow-clip">
          <div className="max-w-7xl w-screen">
            <SingleNavigation navigation={singlePostNavigation} />
            <SingleDetailPost/>
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

export default DetailedPost;
