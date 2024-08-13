// import React from 'react';
// import SingleNavigation from '@/components/SingleNav';
// import { singlePostNavigation } from '@/data';
// import SingleDetailPost from '@/components/SingleDetailPost';
// import BlogFooter from '@/components/BlogFooter';
// import { SignedIn, SignedOut, RedirectToSignIn } from "@clerk/nextjs";

// // Example featuredPost object (replace this with your actual data)
// const featuredPost = {
//   imageUrl: '/path-to-image.jpg',
//   title: 'Your Post Title',
//   description: 'This is a detailed description of the post.',
//   category: {
//     title: 'Technology',
//   },
//   features: ['SEO', 'Design', 'Marketing'],
//   author: {
//     imageUrl: '/path-to-author-image.jpg',
//     name: 'Author Name',
//     role: 'Author Role',
//     organization: 'Organization Name',
//     date: '2023-08-13', // Example date
//     datetime: '2023-08-13T14:00:00Z', // Example datetime
//   },
// };

// const DetailedPost = () => {
//   return (
//     <>
//       <SignedIn>
//         <main className="relative bg-black-100 flex justify-center items-center flex-col mx-auto sm:px-10 px-5 overflow-clip">
//           <div className="max-w-7xl w-screen">
//             <SingleNavigation navigation={singlePostNavigation} />
//             <SingleDetailPost featuredPost={featuredPost} />
//             <BlogFooter />
//           </div>
//         </main>
//       </SignedIn>
//       <SignedOut>
//         <RedirectToSignIn />
//       </SignedOut>
//     </>
//   );
// };

// export default DetailedPost;













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
