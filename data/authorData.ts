// authorData.ts
import { Author, Post } from '@/types';


export const AuthorProfilePage: Author = {
  id: 1,
  name: 'Jackson Alves',
  imageUrl: 'https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwzNjUyOXwwfDF8c2VxfHx8fHx8fHwxNjkxNTA3MzU4&ixlib=rb-1.2.1&q=80&w=1080',
  role: 'author',
  position: 'Senior Developer',
  organization: 'Clerk.dev',
  date: 'January 2024',
  datetime: '2024-01-01T00:00:00Z',
  href: '/users-profile/jackson-alves',
  fallbackImageUrl: '/fallback-image.jpg',
  canCreatePost: true,
  canLike: true,
  bio: '',
  followersCount: 0,
  followingCount: 0
};

export const AuthorPosts: Post[] = [
    {
      id: 1,
      title: 'Understanding React Hooks',
      description: 'An in-depth look at how React Hooks work.',
      imageUrl: '/socials10.avif',
      fallbackImageUrl: '/socials10.avif',
      date: 'January 2024',
      datetime: '2024-01-01T00:00:00Z',
      category: { title: 'React', href: '/categories/react' },
      author: AuthorProfilePage,
      href: '/posts/understanding-react-hooks',
      features: ['React', 'Hooks', 'JavaScript'],
      tags: ['React', 'JavaScript'],  // Provide actual tags
      content: 'This is the content of the post...',  // Provide actual content
    },
    {
      id: 2,
      title: 'How to Build a Blog with Next.js and TypeScript',
      description: 'The complete guide to building a blog with Next.js and TypeScript.',
      imageUrl: '/socials11.avif',
      fallbackImageUrl: '/socials11.avif',
      date: 'January 2024',
      datetime: '2024-01-01T00:00:00Z',
      category: { title: 'React', href: '/categories/react' },
      author: AuthorProfilePage,
      href: '/posts/how-to-build-a-blog-with-nextjs-and-typescript',
      features: ['React', 'Hooks', 'JavaScript'],
      tags: ['React', 'JavaScript'],  // Provide actual tags
      content: 'This is the content of the post...',  // Provide actual content
    },
    {
      id: 3,
      title: 'How to land your first job as a developer',
      description: 'The easy way to land your first job as a developer.',
      imageUrl: '/socials12.avif',
      fallbackImageUrl: '/socials12.avif',
      date: 'January 2024',
      datetime: '2024-01-01T00:00:00Z',
      category: { title: 'React', href: '/categories/react' },
      author: AuthorProfilePage,
      href: '/posts/how-to-land-your-first-job-as-a-developer',
      features: ['React', 'Hooks', 'JavaScript'],
      // Optional properties can be omitted entirely if not needed:
      tags: ['Career', 'Development'],  // Example value
      content: 'This post discusses the steps to land your first job as a developer.',  // Example value
    },
    {
      id: 4,
      title: 'How to land your first job as a developer',
      description: 'The easy way to land your first job as a developer.',
      imageUrl: '/socials13.avif',
      fallbackImageUrl: '/socials13.avif',
      date: 'January 2024',
      datetime: '2024-01-01T00:00:00Z',
      category: { title: 'React', href: '/categories/react' },
      author: AuthorProfilePage,
      href: '/posts/how-to-land-your-first-job-as-a-developer',
      features: ['React', 'Hooks', 'JavaScript'],
      // Optional properties can be omitted entirely if not needed:
      tags: ['Career', 'Development'],  // Example value
      content: 'This post discusses the steps to land your first job as a developer.',  // Example value
    },
    {
      id: 5,
      title: 'How to land your first job as a developer',
      description: 'The easy way to land your first job as a developer.',
      imageUrl: '/socials14.avif',
      fallbackImageUrl: '/socials14.avif',
      date: 'January 2024',
      datetime: '2024-01-01T00:00:00Z',
      category: { title: 'React', href: '/categories/react' },
      author: AuthorProfilePage,
      href: '/posts/how-to-land-your-first-job-as-a-developer',
      features: ['React', 'Hooks', 'JavaScript'],
      // Optional properties can be omitted entirely if not needed:
      tags: ['Career', 'Development'],  // Example value
      content: 'This post discusses the steps to land your first job as a developer.',  // Example value
    },
    {
      id: 6,
      title: 'How to land your first job as a developer',
      description: 'The easy way to land your first job as a developer.',
      imageUrl: '/socials15.avif',
      fallbackImageUrl: '/socials15.avif',
      date: 'January 2024',
      datetime: '2024-01-01T00:00:00Z',
      category: { title: 'React', href: '/categories/react' },
      author: AuthorProfilePage,
      href: '/posts/how-to-land-your-first-job-as-a-developer',
      features: ['React', 'Hooks', 'JavaScript'],
      // Optional properties can be omitted entirely if not needed:
      tags: ['Career', 'Development'],  // Example value
      content: 'This post discusses the steps to land your first job as a developer.',  // Example value
    },
    {
      id: 7,
      title: 'How to land your first job as a developer',
      description: 'The easy way to land your first job as a developer.',
      imageUrl: '/socials16.avif',
      fallbackImageUrl: '/socials16.avif',
      date: 'January 2024',
      datetime: '2024-01-01T00:00:00Z',
      category: { title: 'React', href: '/categories/react' },
      author: AuthorProfilePage,
      href: '/posts/how-to-land-your-first-job-as-a-developer',
      features: ['React', 'Hooks', 'JavaScript'],
      // Optional properties can be omitted entirely if not needed:
      tags: ['Career', 'Development'],  // Example value
      content: 'This post discusses the steps to land your first job as a developer.',  // Example value
    },
    {
      id: 8,
      title: 'How to land your first job as a developer',
      description: 'The easy way to land your first job as a developer.',
      imageUrl: '/socials17.avif',
      fallbackImageUrl: '/socials17.avif',
      date: 'January 2024',
      datetime: '2024-01-01T00:00:00Z',
      category: { title: 'React', href: '/categories/react' },
      author: AuthorProfilePage,
      href: '/posts/how-to-land-your-first-job-as-a-developer',
      features: ['React', 'Hooks', 'JavaScript'],
      // Optional properties can be omitted entirely if not needed:
      tags: ['Career', 'Development'],  // Example value
      content: 'This post discusses the steps to land your first job as a developer.',  // Example value
    },
    {
      id: 9,
      title: 'How to land your first job as a developer',
      description: 'The easy way to land your first job as a developer.',
      imageUrl: '/socials18.avif',
      fallbackImageUrl: '/socials18.avif',
      date: 'January 2024',
      datetime: '2024-01-01T00:00:00Z',
      category: { title: 'React', href: '/categories/react' },
      author: AuthorProfilePage,
      href: '/posts/how-to-land-your-first-job-as-a-developer',
      features: ['React', 'Hooks', 'JavaScript'],
      // Optional properties can be omitted entirely if not needed:
      tags: ['Career', 'Development'],  // Example value
      content: 'This post discusses the steps to land your first job as a developer.',  // Example value
    },
    {
      id: 10,
      title: 'How to land your first job as a developer',
      description: 'The easy way to land your first job as a developer.',
      imageUrl: '/socials19.avif',
      fallbackImageUrl: '/socials19.avif',
      date: 'January 2024',
      datetime: '2024-01-01T00:00:00Z',
      category: { title: 'React', href: '/categories/react' },
      author: AuthorProfilePage,
      href: '/posts/how-to-land-your-first-job-as-a-developer',
      features: ['React', 'Hooks', 'JavaScript'],
      // Optional properties can be omitted entirely if not needed:
      tags: ['Career', 'Development'],  // Example value
      content: 'This post discusses the steps to land your first job as a developer.',  // Example value
    },
    {
      id: 11,
      title: 'How to land your first job as a developer',
      description: 'The easy way to land your first job as a developer.',
      imageUrl: '/socials20.avif',
      fallbackImageUrl: '/socials20.avif',
      date: 'January 2024',
      datetime: '2024-01-01T00:00:00Z',
      category: { title: 'React', href: '/categories/react' },
      author: AuthorProfilePage,
      href: '/posts/how-to-land-your-first-job-as-a-developer',
      features: ['React', 'Hooks', 'JavaScript'],
      // Optional properties can be omitted entirely if not needed:
      tags: ['Career', 'Development'],  // Example value
      content: 'This post discusses the steps to land your first job as a developer.',  // Example value
    },
  ];
  