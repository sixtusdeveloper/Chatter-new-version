// app/single-post/[id]/page.tsx

'use client';

import { useEffect, useState } from 'react';
import { Post } from '@/types';

interface Props {
  params: {
    id: string;
  };
}

const SingleDetailPost = ({ params }: Props) => {
  const [post, setPost] = useState<Post | null>(null);

  useEffect(() => {
    if (params.id) {
      // Fetch the post data based on the ID
      fetch(`/api/posts/${params.id}`)
        .then(response => response.json())
        .then(data => setPost(data))
        .catch(error => console.error('Error fetching post:', error));
    }
  }, [params.id]);

  if (!post) return <div>Loading... your post is working</div>;

  return (
    <div>
      <h1>{post.title}</h1>
      <p>{post.description}</p>
      {/* Render other post details here */}
    </div>
  );
};

export default SingleDetailPost;





// "use client";

// import React from 'react';
// import SingleNavigation from '@/components/SingleNav';
// import { singlePostNavigation } from '@/data';
// import SingleDetailPost from '@/components/SingleDetailPost';
// import BlogFooter from '@/components/BlogFooter';
// import withAuth from '@/components/WithAuth';

// const DetailedPost = () => {
//   return (
//     <>
//       <main className="relative bg-black-100 flex justify-center items-center flex-col mx-auto sm:px-10 px-5 overflow-clip">
//         <div className="max-w-7xl w-screen">
//           <SingleNavigation navigation={singlePostNavigation} />
//           <SingleDetailPost postId={''} />
//           <BlogFooter />
//         </div>
//       </main>
//     </>
//   );
// };

// export default withAuth(DetailedPost);






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
