'use client';


import React from 'react';
import { useRequireAuth } from '@/app/hooks/useRequireAuth';

const withAuth = (WrappedComponent: React.ComponentType) => {
  return (props: any) => {
    const { isSignedIn } = useRequireAuth();

    if (!isSignedIn) {
      return null; // Render nothing if not authenticated
    }

    return <WrappedComponent {...props} />;
  };
};

export default withAuth;
