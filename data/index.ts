import Testimonials from "@/components/Testimonials";

//============================= Home Page Navigation links ============================//
export const navigation = [
    { name: 'Features', href: '#Features' },
    { name: 'Services', href: '#Services' },
    { name: 'Posts', href: '#Posts' },
    { name: 'Testimonials', href: '#Testimonials' },
    { name: 'FAQ', href: '#FAQ' },
];

// ======================== About Page Navigation links ========================//
export const aboutNavigation = [
  { name: 'Home', href: '/' },
  { name: 'Docs', href: '/docs' },
  { name: 'Community', href: '/blog' },
];

// ============================ Blog Post Navigation links ==========================//
export const blogNavigation = [
  { name: 'All Posts', href: '#all-posts' },
  { name: 'Featured Posts', href: '#featured-posts' },
  { name: 'Categories', href: '#categories' },
];

//======================= Blog Single Post Navigation links ========================//
export const singlePostNavigation = [
  { name: 'Home', href: '/' },
  { name: 'Blog Posts', href: '/blog' },
  { name: 'Create Post', href: '/create-post' },
  { name: 'Authors', href: '/authors' },
  { name: 'Dashboard', href: '/dashboard' },
];

// =================== Blog Post Category Items ======================= //
export const categories = [
  { id: 1, name: 'Technology', slug: 'technology' },
  { id: 2, name: 'Science', slug: 'science' },
  { id: 3, name: 'Health', slug: 'health' },
  { id: 4, name: 'Business', slug: 'business' },
  { id: 5, name: 'Entertainment', slug: 'entertainment' },
  { id: 6, name: 'Sports', slug: 'sports' },
  { id: 7, name: 'Education', slug: 'education' },
  { id: 8, name: 'Travel', slug: 'travel' },
  { id: 9, name: 'Food', slug: 'food' },
  { id: 10, name: 'Fashion', slug: 'fashion' },
  { id: 11, name: 'Finance', slug: 'finance' },
  { id: 12, name: 'Environment', slug: 'environment' },
  { id: 13, name: 'Politics', slug: 'politics' },
  { id: 14, name: 'History', slug: 'history' },
  { id: 15, name: 'Art', slug: 'art' },
  { id: 16, name: 'Music', slug: 'music' },
  { id: 17, name: 'Gaming', slug: 'gaming' },
  { id: 18, name: 'Literature', slug: 'literature' },
  { id: 19, name: 'Marketing', slug: 'marketing' },
  { id: 20, name: 'Writing', slug: 'writing' },
  { id: 21, name: 'SEO', slug: 'seo' },
  { id: 22, name: 'Architecture', slug: 'architecture' },
  { id: 23, name: 'Design', slug: 'design' },
];

//===========================  Documentation Side-bar links===========================//
export const sections = [
  { id: 'introduction', label: 'Introduction' },
  { id: 'installation', label: 'Installation' },
  { id: 'getting-started', label: 'Getting Started' },
  { id: 'features', label: 'Features' },
  { id: 'api', label: 'API' },
  { id: 'faq', label: 'FAQ' }
];

//========================== Features Section Data ==========================//
export const features = [
{
    id: 1,
    title: "User Registration and Authentication",
    desc: "Secure and seamless user onboarding with email and social media authentication.",
    className: "md:col-span-2",
    thumbnail: "/exp1.svg",
},
{
    id: 2,
    title: "Content Creation and Publishing",
    desc: "Rich text editor for creating and publishing engaging content with ease.",
    className: "md:col-span-2", // change to md:col-span-2
    thumbnail: "/exp2.svg",
},
{
    id: 3,
    title: "Personalized Content Discovery",
    desc: "Discover new content based on your interests and reading history.",
    className: "md:col-span-2", // change to md:col-span-2
    thumbnail: "/exp3.svg",
},
{
    id: 4,
    title: "Social Interactions",
    desc: "Engage with other users through comments and likes..",
    className: "md:col-span-2",
    thumbnail: "/exp4.svg",
},
];

// ========================== Posts Section Data ==========================//
export const posts = [
  {
    id: 1,
    title: "Boost Your Conversion Rate",
    href: "/posts/1",
    description: "Unlock the potential of your marketing strategy by improving your conversion rates. Discover actionable insights and proven techniques to enhance user engagement, drive higher sales, and turn visitors into loyal customers. Learn how to optimize every step of your customer journey with data-driven strategies.",
    date: "August 12th, 2024",
    datetime: "07:55:33",
    category: { title: "Marketing", href: "/categories/marketing" },
    imageUrl: "https://images.unsplash.com/photo-1506765515384-028b60a970df?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwzNjUyOXwwfDF8c2VvfHx8fHx8fHwxNjg4MDQ4NzY5&ixlib=rb-1.2.1&q=80&w=1080",
    fallbackImageUrl: "/socials04.jpg",
    author: {
      name: "Michael Benjamin",
      role: "Co-Founder / CTO",
      date: "August 12th, 2024",
      datetime: "07:55:33",
      organization: "ElitesDev Ltd",
      href: "/authors/michael-foster",
      imageUrl: "https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwzNjUyOXwwfDF8c2VxfHx8fHx8fHwxNjkxNTA3MzU4&ixlib=rb-1.2.1&q=80&w=1080",
      fallbackImageUrl: "/profile.svg",
    },
    features: ["SEO", "Design", "Marketing", "Science", "Technology", "Architecture", "Writing"],
  },
  {
    id: 2,
    title: "Improve Your Website Design",
    href: "/posts/2",
    description: "Elevate your online presence with top-notch website design strategies. Explore modern design principles, user experience best practices, and innovative techniques to create visually stunning and highly functional websites. This post covers everything from aesthetic design trends to practical tips for enhancing usability.",
    date: "August 3rd, 2024",
    datetime: "2:50:39",
    category: { title: "Design", href: "/categories/design" },
    imageUrl: "https://images.unsplash.com/photo-1556740738-b6a63e27c4df?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwxMjA3fDB8MXxyYW5kb218fHx8fHx8fHwxNjYxMzM3MDc0&ixlib=rb-1.2.1&q=80&w=400",
    fallbackImageUrl: "/socials03.jpg",
    author: {
      name: "Sandra Ankana",
      role: "Lead Designer",
      date: "August 3rd, 2024",
      datetime: "2:50:39",
      organization: "Pinace Ltd",
      href: "/authors/sarah-johnson",
      imageUrl: "https://images.unsplash.com/photo-1524504388940-b1c1722653e1?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwzNjUyOXwwfDF8c2VxfHx8fHx8fHwxNjkxNTA3MzU4&ixlib=rb-1.2.1&q=80&w=1080",
      fallbackImageUrl: "/socials01.jpg",
    },
    features: ["SEO", "Design", "Marketing", "Science", "Technology", "Architecture", "Writing"],

  },
  {
    id: 3,
    title: "Maximize Your SEO Efforts",
    href: "/posts/3",
    description: "Enhance your website's visibility and attract more organic traffic with effective SEO strategies. This post provides a comprehensive guide on optimizing your content, improving search engine rankings, and leveraging analytics to measure your success. Discover practical tips and techniques to boost your SEO performance and achieve long-term growth.",
    date: "August 20th, 2024",
    datetime: "09:25:33",
    category: { title: "SEO", href: "/categories/seo" },
    imageUrl: "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwzNjUyOXwwfDF8c2VxfHx8fHx8fHwxNjkxNTA3MzU4&ixlib=rb-1.2.1&q=80&w=1080",
    fallbackImageUrl: "/socials03.jpg",
    author: {
      name: "Stephenie Bruce",
      role: "SEO Specialist",
      date: "August 20th, 2024",
      datetime: "09:25:33",
      organization: "Google",
      href: "/authors/john-doe",
      imageUrl: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwxMjA3fDB8MXxyYW5kb218fHx8fHx8fHwxNjYxMzM3MDUw&ixlib=rb-1.2.1&q=80&w=400",
      fallbackImageUrl: "/socials03.jpg",
    },
    features: ["SEO", "Design", "Marketing", "Science", "Technology", "Architecture", "Writing"],
    
  },
  {
    id: 4,
    title: "Maximize Your SEO Efforts",
    href: "/posts/3",
    description: "Enhance your website's visibility and attract more organic traffic with effective SEO strategies. This post provides a comprehensive guide on optimizing your content, improving search engine rankings, and leveraging analytics to measure your success. Discover practical tips and techniques to boost your SEO performance and achieve long-term growth.",
    date: "August 20th, 2024",
    datetime: "09:25:33",
    category: { title: "SEO", href: "/categories/seo" },
    imageUrl: "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwzNjUyOXwwfDF8c2VxfHx8fHx8fHwxNjkxNTA3MzU4&ixlib=rb-1.2.1&q=80&w=1080",
    fallbackImageUrl: "/socials03.jpg",
    author: {
      name: "Stephenie Bruce",
      role: "SEO Specialist",
      date: "August 20th, 2024",
      datetime: "09:25:33",
      organization: "Google",
      href: "/authors/john-doe",
      imageUrl: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwxMjA3fDB8MXxyYW5kb218fHx8fHx8fHwxNjYxMzM3MDUw&ixlib=rb-1.2.1&q=80&w=400",
      fallbackImageUrl: "/socials03.jpg",
    },
    features: ["SEO", "Design", "Marketing", "Science", "Technology", "Architecture", "Writing"],
    
  },
  {
    id: 5,
    title: "Maximize Your SEO Efforts",
    href: "/posts/3",
    description: "Enhance your website's visibility and attract more organic traffic with effective SEO strategies. This post provides a comprehensive guide on optimizing your content, improving search engine rankings, and leveraging analytics to measure your success. Discover practical tips and techniques to boost your SEO performance and achieve long-term growth.",
    date: "August 20th, 2024",
    datetime: "09:25:33",
    category: { title: "SEO", href: "/categories/seo" },
    imageUrl: "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwzNjUyOXwwfDF8c2VxfHx8fHx8fHwxNjkxNTA3MzU4&ixlib=rb-1.2.1&q=80&w=1080",
    fallbackImageUrl: "/socials03.jpg",
    author: {
      name: "Stephenie Bruce",
      role: "SEO Specialist",
      date: "August 20th, 2024",
      datetime: "09:25:33",
      organization: "Google",
      href: "/authors/john-doe",
      imageUrl: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwxMjA3fDB8MXxyYW5kb218fHx8fHx8fHwxNjYxMzM3MDUw&ixlib=rb-1.2.1&q=80&w=400",
      fallbackImageUrl: "/socials03.jpg",
    },
    features: ["SEO", "Design", "Marketing", "Science", "Technology", "Architecture", "Writing"],
    
  },
  {
    id: 6,
    title: "Maximize Your SEO Efforts",
    href: "/posts/3",
    description: "Enhance your website's visibility and attract more organic traffic with effective SEO strategies. This post provides a comprehensive guide on optimizing your content, improving search engine rankings, and leveraging analytics to measure your success. Discover practical tips and techniques to boost your SEO performance and achieve long-term growth.",
    date: "August 20th, 2024",
    datetime: "09:25:33",
    category: { title: "SEO", href: "/categories/seo" },
    imageUrl: "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwzNjUyOXwwfDF8c2VxfHx8fHx8fHwxNjkxNTA3MzU4&ixlib=rb-1.2.1&q=80&w=1080",
    fallbackImageUrl: "/socials03.jpg",
    author: {
      name: "Stephenie Bruce",
      role: "SEO Specialist",
      date: "August 20th, 2024",
      datetime: "09:25:33",
      organization: "Google",
      href: "/authors/john-doe",
      imageUrl: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwxMjA3fDB8MXxyYW5kb218fHx8fHx8fHwxNjYxMzM3MDUw&ixlib=rb-1.2.1&q=80&w=400",
      fallbackImageUrl: "/socials03.jpg",
    },
    features: ["SEO", "Design", "Marketing", "Science", "Technology", "Architecture", "Writing"],
    
  },
  {
    id: 7,
    title: "Maximize Your SEO Efforts",
    href: "/posts/3",
    description: "Enhance your website's visibility and attract more organic traffic with effective SEO strategies. This post provides a comprehensive guide on optimizing your content, improving search engine rankings, and leveraging analytics to measure your success. Discover practical tips and techniques to boost your SEO performance and achieve long-term growth.",
    date: "August 20th, 2024",
    datetime: "09:25:33",
    category: { title: "SEO", href: "/categories/seo" },
    imageUrl: "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwzNjUyOXwwfDF8c2VxfHx8fHx8fHwxNjkxNTA3MzU4&ixlib=rb-1.2.1&q=80&w=1080",
    fallbackImageUrl: "/socials03.jpg",
    author: {
      name: "Stephenie Bruce",
      role: "SEO Specialist",
      date: "August 20th, 2024",
      datetime: "09:25:33",
      organization: "Google",
      href: "/authors/john-doe",
      imageUrl: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwxMjA3fDB8MXxyYW5kb218fHx8fHx8fHwxNjYxMzM3MDUw&ixlib=rb-1.2.1&q=80&w=400",
      fallbackImageUrl: "/socials03.jpg",
    },
    features: ["SEO", "Design", "Marketing", "Science", "Technology", "Architecture", "Writing"],
    
  },
  {
    id: 8,
    title: "Maximize Your SEO Efforts",
    href: "/posts/3",
    description: "Enhance your website's visibility and attract more organic traffic with effective SEO strategies. This post provides a comprehensive guide on optimizing your content, improving search engine rankings, and leveraging analytics to measure your success. Discover practical tips and techniques to boost your SEO performance and achieve long-term growth.",
    date: "August 20th, 2024",
    datetime: "09:25:33",
    category: { title: "SEO", href: "/categories/seo" },
    imageUrl: "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwzNjUyOXwwfDF8c2VxfHx8fHx8fHwxNjkxNTA3MzU4&ixlib=rb-1.2.1&q=80&w=1080",
    fallbackImageUrl: "/socials03.jpg",
    author: {
      name: "Stephenie Bruce",
      role: "SEO Specialist",
      date: "August 20th, 2024",
      datetime: "09:25:33",
      organization: "Google",
      href: "/authors/john-doe",
      imageUrl: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwxMjA3fDB8MXxyYW5kb218fHx8fHx8fHwxNjYxMzM3MDUw&ixlib=rb-1.2.1&q=80&w=400",
      fallbackImageUrl: "/socials03.jpg",
    },
    features: ["SEO", "Design", "Marketing", "Science", "Technology", "Architecture", "Writing"],
    
  },
  {
    id: 10,
    title: "Maximize Your SEO Efforts",
    href: "/posts/3",
    description: "Enhance your website's visibility and attract more organic traffic with effective SEO strategies. This post provides a comprehensive guide on optimizing your content, improving search engine rankings, and leveraging analytics to measure your success. Discover practical tips and techniques to boost your SEO performance and achieve long-term growth.",
    date: "August 20th, 2024",
    datetime: "09:25:33",
    category: { title: "SEO", href: "/categories/seo" },
    imageUrl: "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwzNjUyOXwwfDF8c2VxfHx8fHx8fHwxNjkxNTA3MzU4&ixlib=rb-1.2.1&q=80&w=1080",
    fallbackImageUrl: "/socials03.jpg",
    author: {
      name: "Stephenie Bruce",
      role: "SEO Specialist",
      date: "August 20th, 2024",
      datetime: "09:25:33",
      organization: "Google",
      href: "/authors/john-doe",
      imageUrl: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwxMjA3fDB8MXxyYW5kb218fHx8fHx8fHwxNjYxMzM3MDUw&ixlib=rb-1.2.1&q=80&w=400",
      fallbackImageUrl: "/socials03.jpg",
    },
    features: ["SEO", "Design", "Marketing", "Science", "Technology", "Architecture", "Writing"],
    
  },
  {
    id: 11,
    title: "Improve Your Website Design",
    href: "/posts/2",
    description: "Elevate your online presence with top-notch website design strategies. Explore modern design principles, user experience best practices, and innovative techniques to create visually stunning and highly functional websites. This post covers everything from aesthetic design trends to practical tips for enhancing usability.",
    date: "August 3rd, 2024",
    datetime: "2:50:39",
    category: { title: "Design", href: "/categories/design" },
    imageUrl: "https://images.unsplash.com/photo-1556740738-b6a63e27c4df?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwxMjA3fDB8MXxyYW5kb218fHx8fHx8fHwxNjYxMzM3MDc0&ixlib=rb-1.2.1&q=80&w=400",
    fallbackImageUrl: "/socials03.jpg",
    author: {
      name: "Sandra Ankana",
      role: "Lead Designer",
      date: "August 3rd, 2024",
      datetime: "2:50:39",
      organization: "Pinace Ltd",
      href: "/authors/sarah-johnson",
      imageUrl: "https://images.unsplash.com/photo-1524504388940-b1c1722653e1?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwzNjUyOXwwfDF8c2VxfHx8fHx8fHwxNjkxNTA3MzU4&ixlib=rb-1.2.1&q=80&w=1080",
      fallbackImageUrl: "/socials01.jpg",
    },
    features: ["SEO", "Design", "Marketing", "Science", "Technology", "Architecture", "Writing"],

  },
  {
    id: 12,
    title: "Improve Your Website Design",
    href: "/posts/2",
    description: "Elevate your online presence with top-notch website design strategies. Explore modern design principles, user experience best practices, and innovative techniques to create visually stunning and highly functional websites. This post covers everything from aesthetic design trends to practical tips for enhancing usability.",
    date: "August 3rd, 2024",
    datetime: "2:50:39",
    category: { title: "Design", href: "/categories/design" },
    imageUrl: "https://images.unsplash.com/photo-1556740738-b6a63e27c4df?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwxMjA3fDB8MXxyYW5kb218fHx8fHx8fHwxNjYxMzM3MDc0&ixlib=rb-1.2.1&q=80&w=400",
    fallbackImageUrl: "/socials03.jpg",
    author: {
      name: "Sandra Ankana",
      role: "Lead Designer",
      date: "August 3rd, 2024",
      datetime: "2:50:39",
      organization: "Pinace Ltd",
      href: "/authors/sarah-johnson",
      imageUrl: "https://images.unsplash.com/photo-1524504388940-b1c1722653e1?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwzNjUyOXwwfDF8c2VxfHx8fHx8fHwxNjkxNTA3MzU4&ixlib=rb-1.2.1&q=80&w=1080",
      fallbackImageUrl: "/socials01.jpg",
    },
    features: ["SEO", "Design", "Marketing", "Science", "Technology", "Architecture", "Writing"],

  },
  {
    id: 13,
    title: "Improve Your Website Design",
    href: "/posts/2",
    description: "Elevate your online presence with top-notch website design strategies. Explore modern design principles, user experience best practices, and innovative techniques to create visually stunning and highly functional websites. This post covers everything from aesthetic design trends to practical tips for enhancing usability.",
    date: "August 3rd, 2024",
    datetime: "2:50:39",
    category: { title: "Design", href: "/categories/design" },
    imageUrl: "https://images.unsplash.com/photo-1556740738-b6a63e27c4df?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwxMjA3fDB8MXxyYW5kb218fHx8fHx8fHwxNjYxMzM3MDc0&ixlib=rb-1.2.1&q=80&w=400",
    fallbackImageUrl: "/socials03.jpg",
    author: {
      name: "Sandra Ankana",
      role: "Lead Designer",
      date: "August 3rd, 2024",
      datetime: "2:50:39",
      organization: "Pinace Ltd",
      href: "/authors/sarah-johnson",
      imageUrl: "https://images.unsplash.com/photo-1524504388940-b1c1722653e1?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwzNjUyOXwwfDF8c2VxfHx8fHx8fHwxNjkxNTA3MzU4&ixlib=rb-1.2.1&q=80&w=1080",
      fallbackImageUrl: "/socials01.jpg",
    },
    features: ["SEO", "Design", "Marketing", "Science", "Technology", "Architecture", "Writing"],

  },
  {
    id: 14,
    title: "Improve Your Website Design",
    href: "/posts/2",
    description: "Elevate your online presence with top-notch website design strategies. Explore modern design principles, user experience best practices, and innovative techniques to create visually stunning and highly functional websites. This post covers everything from aesthetic design trends to practical tips for enhancing usability.",
    date: "August 3rd, 2024",
    datetime: "2:50:39",
    category: { title: "Design", href: "/categories/design" },
    imageUrl: "https://images.unsplash.com/photo-1556740738-b6a63e27c4df?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwxMjA3fDB8MXxyYW5kb218fHx8fHx8fHwxNjYxMzM3MDc0&ixlib=rb-1.2.1&q=80&w=400",
    fallbackImageUrl: "/socials03.jpg",
    author: {
      name: "Sandra Ankana",
      role: "Lead Designer",
      date: "August 3rd, 2024",
      datetime: "2:50:39",
      organization: "Pinace Ltd",
      href: "/authors/sarah-johnson",
      imageUrl: "https://images.unsplash.com/photo-1524504388940-b1c1722653e1?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwzNjUyOXwwfDF8c2VxfHx8fHx8fHwxNjkxNTA3MzU4&ixlib=rb-1.2.1&q=80&w=1080",
      fallbackImageUrl: "/socials01.jpg",
    },
    features: ["SEO", "Design", "Marketing", "Science", "Technology", "Architecture", "Writing"],

  },
  {
    id: 15,
    title: "Improve Your Website Design",
    href: "/posts/2",
    description: "Elevate your online presence with top-notch website design strategies. Explore modern design principles, user experience best practices, and innovative techniques to create visually stunning and highly functional websites. This post covers everything from aesthetic design trends to practical tips for enhancing usability.",
    date: "August 3rd, 2024",
    datetime: "2:50:39",
    category: { title: "Design", href: "/categories/design" },
    imageUrl: "https://images.unsplash.com/photo-1556740738-b6a63e27c4df?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwxMjA3fDB8MXxyYW5kb218fHx8fHx8fHwxNjYxMzM3MDc0&ixlib=rb-1.2.1&q=80&w=400",
    fallbackImageUrl: "/socials03.jpg",
    author: {
      name: "Sandra Ankana",
      role: "Lead Designer",
      date: "August 3rd, 2024",
      datetime: "2:50:39",
      organization: "Pinace Ltd",
      href: "/authors/sarah-johnson",
      imageUrl: "https://images.unsplash.com/photo-1524504388940-b1c1722653e1?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwzNjUyOXwwfDF8c2VxfHx8fHx8fHwxNjkxNTA3MzU4&ixlib=rb-1.2.1&q=80&w=1080",
      fallbackImageUrl: "/socials01.jpg",
    },
    features: ["SEO", "Design", "Marketing", "Science", "Technology", "Architecture", "Writing"],

  },
  {
    id: 16,
    title: "Improve Your Website Design",
    href: "/posts/2",
    description: "Elevate your online presence with top-notch website design strategies. Explore modern design principles, user experience best practices, and innovative techniques to create visually stunning and highly functional websites. This post covers everything from aesthetic design trends to practical tips for enhancing usability.",
    date: "August 3rd, 2024",
    datetime: "2:50:39",
    category: { title: "Design", href: "/categories/design" },
    imageUrl: "https://images.unsplash.com/photo-1556740738-b6a63e27c4df?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwxMjA3fDB8MXxyYW5kb218fHx8fHx8fHwxNjYxMzM3MDc0&ixlib=rb-1.2.1&q=80&w=400",
    fallbackImageUrl: "/socials03.jpg",
    author: {
      name: "Sandra Ankana",
      role: "Lead Designer",
      date: "August 3rd, 2024",
      datetime: "2:50:39",
      organization: "Pinace Ltd",
      href: "/authors/sarah-johnson",
      imageUrl: "https://images.unsplash.com/photo-1524504388940-b1c1722653e1?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwzNjUyOXwwfDF8c2VxfHx8fHx8fHwxNjkxNTA3MzU4&ixlib=rb-1.2.1&q=80&w=1080",
      fallbackImageUrl: "/socials01.jpg",
    },
    features: ["SEO", "Design", "Marketing", "Science", "Technology", "Architecture", "Writing"],

  },
];

//===============================  Testimonials Section Data ================================//
export const testimonials = [
  {
    quote: "Our experience with Chatter has been transformative. Sixtus’s platform has significantly streamlined our communication and project management. His prompt responses and the intuitive design of Chatter have truly elevated our team's productivity and collaboration, making it an indispensable tool for us.",
    fullQuote: "Our experience with Chatter has been transformative. Sixtus’s platform has significantly streamlined our communication and project management. His prompt responses and the intuitive design of Chatter have truly elevated our team's productivity and collaboration, making it an indispensable tool for us. We are extremely grateful for this tool.",
    name: "Michael Benjamin",
    title: "Co-Founder / CTO at Pestins Ltd",
    imageUrl: "https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwzNjUyOXwwfDF8c2VxfHx8fHx8fHwxNjkxNTA3MzU4&ixlib=rb-1.2.1&q=80&w=1080",
    fallbackImageUrl: "/profile.svg",
    rating: 4,
  },
  {
    quote: "Chatter has been a game-changer for our design team. The platform's seamless integration and user-friendly interface have allowed us to collaborate more effectively and efficiently. Sandra's commitment to using Chatter has resulted in a more cohesive and creative team, driving our design projects to new heights.",
    fullQuote: "Chatter has been a game-changer for our design team. The platform's seamless integration and user-friendly interface have allowed us to collaborate more effectively and efficiently. Sandra's commitment to using Chatter has resulted in a more cohesive and creative team, driving our design projects to new heights. We are thrilled with the results and look forward to continuing our partnership with Chatter.",
    name: "Sandra Ankana",
    title: "Lead Designer at Google",
    imageUrl: "https://images.unsplash.com/photo-1524504388940-b1c1722653e1?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwzNjUyOXwwfDF8c2VxfHx8fHx8fHwxNjkxNTA3MzU4&ixlib=rb-1.2.1&q=80&w=1080",
    fallbackImageUrl: "/socials01.jpg",
    rating: 5,
  },
  {
    quote: "Chatter's advanced features have been invaluable for our SEO strategies. The platform's insightful analytics and ease of use have enabled Stephenie to implement more effective SEO campaigns. Chatter has been a crucial part of our growth strategy, thanks to its powerful tools and user-centric design.",
    fullQuote: "Chatter's advanced features have been invaluable for our SEO strategies. The platform's insightful analytics and ease of use have enabled Stephenie to implement more effective SEO campaigns. Chatter has been a crucial part of our growth strategy, thanks to its powerful tools and user-centric design. We couldn't have achieved our goals without it.",
    name: "Stephenie Bruce",
    title: "SEO Specialist at Pinacle",
    imageUrl: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwxMjA3fDB8MXxyYW5kb218fHx8fHx8fHwxNjYxMzM3MDUw&ixlib=rb-1.2.1&q=80&w=400",
    fallbackImageUrl: "/socials03.jpg",
    rating: 3,
  },
  {
    quote: "Working with Chatter has revolutionized our frontend development process. Freedom's integration of Chatter into our workflow has enhanced our UI significantly. The platform’s features are not only robust but also flexible, allowing us to create a more engaging user experience.",
    fullQuote: "Working with Chatter has revolutionized our frontend development process. Freedom's integration of Chatter into our workflow has enhanced our UI significantly. The platform’s features are not only robust but also flexible, allowing us to create a more engaging user experience. We are excited about the future developments and improvements Chatter will bring to our projects.",
    name: "Freedom Amos",
    title: "Frontend Engineer at Pinacle",
    imageUrl: "https://images.unsplash.com/photo-1544723795-3fb6469f5b39?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwzNjUyOXwwfDF8c2VxfHx8fHx8fHwxNjkxNTA3MzU4&ixlib=rb-1.2.1&q=80&w=1080",
    fallbackImageUrl: "/socials04.jpg",
    rating: 5,
  },
  {
    quote: "Chatter has greatly improved our data analysis and decision-making processes. Ella's use of the platform has enabled her to extract valuable insights and collaborate more effectively. Chatter’s analytical tools and intuitive design have made a substantial difference in our data-driven strategies.",
    fullQuote: "Chatter has greatly improved our data analysis and decision-making processes. Ella's use of the platform has enabled her to extract valuable insights and collaborate more effectively. Chatter’s analytical tools and intuitive design have made a substantial difference in our data-driven strategies. We are very satisfied with the performance and efficiency it brings to our operations.",
    name: "Ella Markson",
    title: "Data Analyst at Amazon",
    imageUrl: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwzNjUyOXwwfDF8c2VxfHx8fHx8fHwxNjkxNTA3MzU4&ixlib=rb-1.2.1&q=80&w=1080",
    fallbackImageUrl: "/socials03.jpg",
    rating: 3,
  },
];

//===============================  Team Members Section Data from About page  ================================//
export const teamMembers = [
  {
    id: 1,
    name: 'Sixtus Aondoakaa',
    role: 'Founder & CEO',
    description: 'Sixtus has over 8 years of experience in the tech industry. He started Chatter with the vision of creating a platform where people can share their thoughts and collaborate effectively. His leadership and innovative thinking have been pivotal in driving the company towards success.',
    imageUrl: '/team-member-1.jpg',
  },
  {
    id: 2,
    name: 'Calvin Benjamin',
    role: 'Chief Technology Officer',
    description: 'Calvin is a tech enthusiast with a knack for solving complex problems. She leads the technology team at Chatter, ensuring that the platform is scalable, secure, and user-friendly. Her expertise in software development and her passion for technology make her an invaluable asset to the company.',
    imageUrl: '/team-member-2.jpg',
  },
  {
    id: 3,
    name: 'Ade Johnson',
    role: 'Head of Marketing',
    description: 'Ade brings a wealth of knowledge in digital marketing and brand management. She is responsible for the marketing strategies that have propelled Chatter into the limelight. Alice’s creativity and strategic thinking help in crafting campaigns that resonate with our audience.',
    imageUrl: '/team-member-3.jpg',
  },
];


// ======================== Side Bar Navigation Links for DOCUMENTATION ============================//
export const SidebarNavbarLists = [
  { name: 'Introduction', href: 'introduction' },
  { name: 'Getting Started', href: 'getting-started' },
  { name: 'Features', href: 'features' },
  { name: 'Best Practices', href: 'best-practices' },
  { name: 'API Reference', href: 'api-reference' },
  { name: 'Released Notes', href: 'release-notes' },
  { name: 'FAQ', href: 'faq' },
];



// Import your components
import DocsIntroduction from "@/data/docsData/DocsIntroduction";
import DocsGettingStarted from "@/data/docsData/DocsGettingStarted";
import DocsFeatures from "@/data/docsData/DocsFeatures";
import DocsReleaseNotes from "@/data/docsData/DocsReleaseNotes";
import FAQ from "@/data/docsData/DocsFAQ";
import DocsBestPractices from "@/data/docsData/DocsBestPractices";
import DocsAPIReference from "@/data/docsData/DocsAPIReference";

export const DocumentationContents = {
  introduction: DocsIntroduction,
  gettingStarted: DocsGettingStarted,
  features: DocsFeatures,
  releaseNotes: DocsReleaseNotes,
  bestPractices: DocsBestPractices,
  api: DocsAPIReference,
  faq: FAQ,
};
