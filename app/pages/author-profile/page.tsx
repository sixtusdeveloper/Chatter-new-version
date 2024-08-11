// Example usage in a parent component or page
import AuthorProfile from '@/components/AuthorProfile';
import { SignedIn, SignedOut, RedirectToSignIn } from "@clerk/nextjs";

const AuthorProfilePage = {
  name: 'John Doe',
  imageUrl: 'https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwzNjUyOXwwfDF8c2VxfHx8fHx8fHwxNjkxNTA3MzU4&ixlib=rb-1.2.1&q=80&w=1080',
  role: 'Senior Developer',
  organization: 'Tech Company',
  date: 'January 2024',
  datetime: '2024-01-01T00:00:00Z',
  href: '/author/john-doe',
  fallbackImageUrl: '/fallback-image.jpg',
};

const AuthorPosts = [
  {
    id: 2,
    title: 'Understanding React Hooks',
    description: 'An in-depth look at how React Hooks work.',
    imageUrl: 'https://images.unsplash.com/photo-1506765515384-028b60a970df?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwzNjUyOXwwfDF8c2VvfHx8fHx8fHwxNjg4MDQ4NzY5&ixlib=rb-1.2.1&q=80&w=1080',
    fallbackImageUrl: '/fallback-image.jpg',
    date: 'January 2024',
    datetime: '2024-01-01T00:00:00Z',
    category: { title: 'React', href: '/categories/react' },
    author: AuthorProfilePage,
    href: '/posts/understanding-react-hooks',
    features: ['React', 'Hooks', 'JavaScript'],
  },
  {
    id: 3,
    title: 'Understanding React Hooks',
    description: 'An in-depth look at how React Hooks work.',
    imageUrl: 'https://images.unsplash.com/photo-1506765515384-028b60a970df?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwzNjUyOXwwfDF8c2VvfHx8fHx8fHwxNjg4MDQ4NzY5&ixlib=rb-1.2.1&q=80&w=1080',
    fallbackImageUrl: '/fallback-image.jpg',
    date: 'January 2024',
    datetime: '2024-01-01T00:00:00Z',
    category: { title: 'React', href: '/categories/react' },
    author: AuthorProfilePage,
    href: '/posts/understanding-react-hooks',
    features: ['React', 'Hooks', 'JavaScript'],
  },
  {
    id: 1,
    title: 'Understanding React Hooks',
    description: 'An in-depth look at how React Hooks work.',
    imageUrl: 'https://images.unsplash.com/photo-1506765515384-028b60a970df?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwzNjUyOXwwfDF8c2VvfHx8fHx8fHwxNjg4MDQ4NzY5&ixlib=rb-1.2.1&q=80&w=1080',
    fallbackImageUrl: '/fallback-image.jpg',
    date: 'January 2024',
    datetime: '2024-01-01T00:00:00Z',
    category: { title: 'React', href: '/categories/react' },
    author: AuthorProfilePage,
    href: '/posts/understanding-react-hooks',
    features: ['React', 'Hooks', 'JavaScript'],
  },
  // Additional posts
];

const AuthorPage = () => (
  <>
    <SignedIn>
      <AuthorProfile author={AuthorProfilePage} posts={AuthorPosts} />
    </SignedIn>
    <SignedOut>
      <RedirectToSignIn />
    </SignedOut>
  </> 
);

export default AuthorPage;
