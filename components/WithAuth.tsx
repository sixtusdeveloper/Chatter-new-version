import React from 'react';
import SingleNavigation from '@/components/SingleNav';
import { singlePostNavigation } from '@/data';
import SingleDetailPost from '@/components/SingleDetailPost';
import BlogFooter from '@/components/BlogFooter';
// import withAuth from '@/components/WithAuth';

interface IntrinsicAttributes {
  postId?: string;
}

const DetailedPost = ({ params }: { params?: { id: string } }) => {
  const { id = '' } = params ?? {}; // Get the ID from route parameters with a default value of ''

  return (
    <main className="relative bg-black-100 flex justify-center items-center flex-col mx-auto sm:px-10 px-5 overflow-clip">
      <div className="max-w-7xl w-screen">
        <SingleNavigation navigation={singlePostNavigation} />
        <SingleDetailPost postId={id} />
        <BlogFooter />
      </div>
    </main>
  );
};

export default DetailedPost;








// 'use client';

// import React from 'react';
// import { useUser } from '@clerk/nextjs';
// import { useRouter } from 'next/navigation';

// const withAuth = (WrappedComponent: React.FC<any>) => {
//   const AuthenticatedComponent: React.FC<any> = (props) => {
//     const { isLoaded, isSignedIn } = useUser();
//     const router = useRouter();

//     React.useEffect(() => {
//       if (isLoaded && !isSignedIn) {
//         router.push('/sign-in'); // Redirect to the sign-in page if not authenticated
//       }
//     }, [isLoaded, isSignedIn, router]);

//     if (!isLoaded) {
//       return <div>Loading...</div>; // Optional loading state
//     }

//     return isSignedIn ? <WrappedComponent {...props} /> : null;
//   };

//   return AuthenticatedComponent;
// };

// export default withAuth;







// 'use client';


// import React from 'react';
// import { useRequireAuth } from '@/app/hooks/useRequireAuth';

// const withAuth = (WrappedComponent: React.ComponentType) => {
//   return (props: any) => {
//     const { isSignedIn } = useRequireAuth();

//     if (!isSignedIn) {
//       return null; // Render nothing if not authenticated
//     }

//     return <WrappedComponent {...props} />;
//   };
// };

// export default withAuth;
