'use client';

import AuthorProfile from '@/components/AuthorProfile';
import { SignedIn, SignedOut, RedirectToSignIn } from "@clerk/nextjs";
import { AuthorProfilePage, AuthorPosts } from '@/data/authorData';

const AuthorPage = () => (
  <>
    <SignedIn>
      <main className='bg-black-200 py-2'>
        <AuthorProfile author={AuthorProfilePage} posts={AuthorPosts} />
      </main>
    </SignedIn>
    <SignedOut>
      <RedirectToSignIn />
    </SignedOut>
  </> 
);

export default AuthorPage;










// // Example usage in a parent component or page
// import AuthorProfile from '@/components/AuthorProfile';
// import { SignedIn, SignedOut, RedirectToSignIn } from "@clerk/nextjs";

// const AuthorProfilePage = {
//   id: 1,
//   name: 'Jackson Alves',
//   imageUrl: 'https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwzNjUyOXwwfDF8c2VxfHx8fHx8fHwxNjkxNTA3MzU4&ixlib=rb-1.2.1&q=80&w=1080',
//   role: 'Senior Developer',
//   organization: 'Clerk.dev',
//   date: 'January 2024',
//   datetime: '2024-01-01T00:00:00Z',
//   href: '/users-profile/jackson-alves',
//   fallbackImageUrl: '/fallback-image.jpg',
// };

// const AuthorPosts = [
//   {
//     id: 1,
//     title: 'Understanding React Hooks',
//     description: 'An in-depth look at how React Hooks work.',
//     imageUrl: 'https://images.unsplash.com/photo-1506765515384-028b60a970df?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwzNjUyOXwwfDF8c2VvfHx8fHx8fHwxNjg4MDQ4NzY5&ixlib=rb-1.2.1&q=80&w=1080',
//     fallbackImageUrl: '/fallback-image.jpg',
//     date: 'January 2024',
//     datetime: '2024-01-01T00:00:00Z',
//     category: { title: 'React', href: '/categories/react' },
//     author: AuthorProfilePage,
//     href: '/posts/understanding-react-hooks',
//     features: ['React', 'Hooks', 'JavaScript'],
//   },
//   {
//     id: 2,
//     title: 'How to Build a Blog with Next.js and TypeScript',
//     description: 'The complete guide to building a blog with Next.js and TypeScript.',
//     imageUrl: 'https://images.unsplash.com/photo-1556740738-b6a63e27c4df?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwxMjA3fDB8MXxyYW5kb218fHx8fHx8fHwxNjYxMzM3MDc0&ixlib=rb-1.2.1&q=80&w=400',
//     fallbackImageUrl: '/fallback-image.jpg',
//     date: 'January 2024',
//     datetime: '2024-01-01T00:00:00Z',
//     category: { title: 'React', href: '/categories/react' },
//     author: AuthorProfilePage,
//     href: '/posts/how-to-build-a-blog-with-nextjs-and-typescript',
//     features: ['React', 'Hooks', 'JavaScript'],
//   },
//   {
//     id: 3,
//     title: 'How to land your first job as a developer',
//     description: 'The easy way to land your first job as a developer.',
//     imageUrl: 'https://images.unsplash.com/photo-1522202176988-66273c2fd55f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwzNjUyOXwwfDF8c2VxfHx8fHx8fHwxNjkxNTA3MzU4&ixlib=rb-1.2.1&q=80&w=1080',
//     fallbackImageUrl: '/fallback-image.jpg',
//     date: 'January 2024',
//     datetime: '2024-01-01T00:00:00Z',
//     category: { title: 'React', href: '/categories/react' },
//     author: AuthorProfilePage,
//     href: '/posts/how-to-land-your-first-job-as-a-developer',
//     features: ['React', 'Hooks', 'JavaScript'],
//   },
//   // Additional posts
// ];

// const AuthorPage = () => (
//   <>
//     <SignedIn>
//       <main className='bg-black-200 py-2'>
//         <AuthorProfile author={AuthorProfilePage} posts={AuthorPosts} />
//       </main>
//     </SignedIn>
//     <SignedOut>
//       <RedirectToSignIn />
//     </SignedOut>
//   </> 
// );

// export default AuthorPage;
