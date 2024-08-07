'use client';

import React from 'react';
import { useUser } from '@clerk/nextjs';
import { useRouter } from 'next/navigation';

const withAuth = (WrappedComponent: React.FC<any>) => {
  const AuthenticatedComponent: React.FC<any> = (props) => {
    const { isLoaded, isSignedIn } = useUser();
    const router = useRouter();

    React.useEffect(() => {
      if (isLoaded && !isSignedIn) {
        router.push('/sign-in'); // Redirect to the sign-in page if not authenticated
      }
    }, [isLoaded, isSignedIn, router]);

    if (!isLoaded) {
      return <div>Loading...</div>; // Optional loading state
    }

    return isSignedIn ? <WrappedComponent {...props} /> : null;
  };

  return AuthenticatedComponent;
};

export default withAuth;







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
