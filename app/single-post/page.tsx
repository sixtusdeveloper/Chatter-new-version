'use client';

import { Post } from '@/types';
import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom'; // Or next/router for Next.js
import { getPostById, singlePostNavigation } from '@/data';

import SingleNavigation from '@/components/SingleNav';
import SingleDetailPost from '@/components/SingleDetailPost';
import BlogFooter from '@/components/BlogFooter';
// import withAuth from '@/components/WithAuth';

const DetailedPost = ({ params }: { params?: { id: string } }) => {
  const { postId = '' } = useParams() ?? { postId: '' };
  const [post, setPost] = useState<Post | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const post = getPostById(parseInt(postId, 10));
    setPost(post || null);
    setLoading(false);
  }, [postId]);

  if (loading) {
    return <p>Loading...</p>;
  }

  if (!post) {
    return <p>Post not found!</p>;
  }

  return (
    <>
      <main className="relative bg-black-100 flex justify-center items-center flex-col mx-auto sm:px-10 px-5 overflow-clip">
        <div className="max-w-7xl w-screen">
          <SingleNavigation navigation={singlePostNavigation} />
          <SingleDetailPost postId={postId} />
          <BlogFooter />
        </div>
      </main>
    </>
  );
}

export default DetailedPost;








// import { Post } from '@/types';
// import React, { useState, useEffect } from 'react';
// import { useParams } from 'react-router-dom'; // Or next/router for Next.js
// import { getPostById } from '@/data';

// const SinglePostPage = () => {
//   const { postId = '' } = useParams() ?? { postId: '' }; // Assuming you're using React Router
//   const [post, setPost] = useState<Post | null>(null);
//   const [loading, setLoading] = useState(true);

//   useEffect(() => {
//     const post = getPostById(parseInt(postId, 10)); // Fetch the post by ID
//     setPost(post);
//     setLoading(false);
//   }, [postId]);

//   if (loading) {
//     return <p>Loading...</p>;
//   }

//   if (!post) {
//     return <p>Post not found!</p>;
//   }

//   return (
//     <div>
//       <h1>{post.title}</h1>
//       <p>{post.description}</p>
//       <img src={post.imageUrl} alt={post.title} />
//       <p>Author: {post.author.name}</p>
//     </div>
//   );
// };

// export default SinglePostPage;























// import React from 'react';
// import SingleNavigation from '@/components/SingleNav';
// import { singlePostNavigation } from '@/data';
// import SingleDetailPost from '@/components/SingleDetailPost';
// import BlogFooter from '@/components/BlogFooter';
// import withAuth from '@/components/WithAuth';

// const DetailedPost = ({ params }: { params?: { id: string } }) => {
//   const { id = '' } = params ?? {}; // Get the ID from route parameters with a default value of ''

//   return (
//     <>
//       <main className="relative bg-black-100 flex justify-center items-center flex-col mx-auto sm:px-10 px-5 overflow-clip">
//         <div className="max-w-7xl w-screen">
//           <SingleNavigation navigation={singlePostNavigation} />
//           <SingleDetailPost postId={id} />
//           <BlogFooter />
//         </div>
//       </main>
//     </>
//   );
// }

// export default withAuth(DetailedPost);
