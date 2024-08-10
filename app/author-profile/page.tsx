// Example usage in a parent component or page
import AuthorProfile from '@/components/AuthorProfile';

const exampleAuthor = {
  name: 'John Doe',
  imageUrl: '/path-to-author-image.jpg',
  role: 'Senior Developer',
  organization: 'Tech Company',
  date: 'January 2024',
  datetime: '2024-01-01T00:00:00Z',
  href: '/author/john-doe',
  fallbackImageUrl: '/fallback-image.jpg',
};

const examplePosts = [
  {
    id: 1,
    title: 'Understanding React Hooks',
    description: 'An in-depth look at how React Hooks work.',
    imageUrl: '/path-to-post-image.jpg',
    fallbackImageUrl: '/fallback-image.jpg',
    date: 'January 2024',
    datetime: '2024-01-01T00:00:00Z',
    category: { title: 'React', href: '/categories/react' },
    author: exampleAuthor,
    href: '/posts/understanding-react-hooks',
    features: ['React', 'Hooks', 'JavaScript'],
  },
  // Additional posts
];

const AuthorPage = () => (
  <AuthorProfile author={exampleAuthor} posts={examplePosts} />
);

export default AuthorPage;
