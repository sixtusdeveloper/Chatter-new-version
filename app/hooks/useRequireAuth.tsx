'use client';


import { useEffect } from 'react';
import { useRouter } from 'next/navigation';
import { useAuth } from '@clerk/nextjs';

export const useRequireAuth = () => {
  const { isSignedIn } = useAuth();
  const router = useRouter();
  const isClient = typeof window !== 'undefined';

  useEffect(() => {
    if (isClient && !isSignedIn) {
      router.push('/sign-in'); // Redirect to login page if not authenticated
    }
  }, [isSignedIn, router, isClient]);

  return { isSignedIn };
};
