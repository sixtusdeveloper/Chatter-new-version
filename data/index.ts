// import Testimonials from "@/components/Testimonials";
import { Post, User, Author } from "@/types";


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
  { name: 'Docs', href: '/pages/docs' },
  { name: 'Community', href: '/pages/blog' },
  { name: 'Dashboard', href: '/pages/admin-dashboard' },
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
  { name: 'Blog', href: '/pages/blog' },
  { name: 'Users', href: '/pages/users' },
  { name: 'Dashboard', href: '/pages/admin-dashboard' },
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

export const posts: Post[] = [ 
  {
  id: 1,
  title: "Boost Your Conversion Rate",
  href: "/single-post/1",
  description: "Unlock the potential of your marketing strategy by improving your conversion rates. Discover actionable insights and proven techniques to enhance user engagement, drive higher sales, and turn visitors into loyal customers. Learn how to optimize every step of your customer journey with data-driven strategies.",
  date: "August 12th, 2024",
  datetime: "07:55:33",
  category: { title: "Marketing", href: "/categories/marketing" },
  imageUrl: "https://images.unsplash.com/photo-1506765515384-028b60a970df?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwzNjUyOXwwfDF8c2VvfHx8fHx8fHwxNjg4MDQ4NzY5&ixlib=rb-1.2.1&q=80&w=1080",
  fallbackImageUrl: "/socials04.jpg",
  author: {
    id: 1,
    name: "Michael Benjamin",
    position: "Co-Founder / CTO",
    role: "author",
    date: "August 12th, 2024",
    datetime: "07:55:33",
    organization: "ElitesDev Ltd",
    href: "/authors/michael-foster",
    imageUrl: "https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwzNjUyOXwwfDF8c2VxfHx8fHx8fHwxNjkxNTA3MzU4&ixlib=rb-1.2.1&q=80&w=1080",
    fallbackImageUrl: "/profile.svg",
    canCreatePost: true,
    canLike: true,
    bio: "Michael Benjamin is a Co-Founder and CTO at ElitesDev Ltd. He has over 10 years of experience in software development and a passion for creating innovative solutions.",
    followersCount: 0,
    followingCount: 0
  },
  features: ["SEO", "Design", "Marketing", "Science", "Technology", "Architecture", "Writing"],
  tags: ["conversion", "marketing", "user engagement"], // Add some example tags
  content: "Detailed content about boosting conversion rates, strategies, and insights.", // Add content
  },
  {
  id: 2,
  title: "Improve Your Website Design",
  href: "/single-post/2",
  description: "Elevate your online presence with top-notch website design strategies. Explore modern design principles, user experience best practices, and innovative techniques to create visually stunning and highly functional websites. This post covers everything from aesthetic design trends to practical tips for enhancing usability.",
  date: "August 3rd, 2024",
  datetime: "14:50:39", // Updated to ISO format
  category: { title: "Design", href: "/categories/design" },
  imageUrl: "https://images.unsplash.com/photo-1556740738-b6a63e27c4df?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwxMjA3fDB8MXxyYW5kb218fHx8fHx8fHwxNjYxMzM3MDc0&ixlib=rb-1.2.1&q=80&w=400",
  fallbackImageUrl: "/socials03.jpg",
  author: {
    id: 2,
    name: "Sandra Ankana",
    position: "Lead Designer",
    role: "author",
    date: "August 3rd, 2024",
    datetime: "14:50:39", // Updated to ISO format
    organization: "Pinace Ltd",
    href: "/authors/sandra-ankana", // Corrected href to match the author's name
    imageUrl: "https://images.unsplash.com/photo-1524504388940-b1c1722653e1?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwzNjUyOXwwfDF8c2VxfHx8fHx8fHwxNjkxNTA3MzU4&ixlib=rb-1.2.1&q=80&w=1080",
    fallbackImageUrl: "/socials01.jpg",
    canCreatePost: true, // Added
    canLike: true,
    bio: "Sandara Ankana is a Lead Designer at Pinace Ltd. She specializes in creating visually stunning and highly functional websites that elevate the online presence of businesses.",
    followersCount: 0,
    followingCount: 0
  },
  features: ["SEO", "Design", "Marketing", "Science", "Technology", "Architecture", "Writing"],
  tags: ["conversion", "marketing", "user engagement"], // Add some example tags
  content: "Detailed content about boosting conversion rates, strategies, and insights.", // Add content
},
{
  id: 3,
  title: "Maximize Your SEO Efforts",
  href: "/single-post/3",
  description: "Enhance your website's visibility and attract more organic traffic with effective SEO strategies. This post provides a comprehensive guide on optimizing your content, improving search engine rankings, and leveraging analytics to measure your success. Discover practical tips and techniques to boost your SEO performance and achieve long-term growth.",
  date: "August 20th, 2024",
  datetime: "09:25:33", // Updated to ISO format
  category: { title: "SEO", href: "/categories/seo" },
  imageUrl: "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwzNjUyOXwwfDF8c2VxfHx8fHx8fHwxNjkxNTA3MzU4&ixlib=rb-1.2.1&q=80&w=1080",
  fallbackImageUrl: "/socials03.jpg",
  author: {
    id: 3, // Added id for consistency
    name: "Stephanie Bruce", // Corrected spelling
    position: "SEO Specialist",
    role: "author",
    date: "August 20th, 2024",
    datetime: "09:25:33", // Updated to ISO format
    organization: "Google",
    href: "/authors/stephanie-bruce", // Corrected href to match the author's name
    imageUrl: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwxMjA3fDB8MXxyYW5kb218fHx8fHx8fHwxNjYxMzM3MDUw&ixlib=rb-1.2.1&q=80&w=400",
    fallbackImageUrl: "/socials03.jpg",
    canCreatePost: true, // Added
    canLike: true,
    bio: "Stephanie Bruce is an SEO Specialist at Google. She has extensive experience in optimizing websites for search engines and driving organic traffic through effective SEO strategies.",
    followersCount: 0,
    followingCount: 0
  },
  features: ["SEO", "Design", "Marketing", "Science", "Technology", "Architecture", "Writing"],
  tags: ["conversion", "marketing", "user engagement"], // Add some example tags
  content: "Detailed content about boosting conversion rates, strategies, and insights.", // Add content
},
{
  id: 4,
  title: "Understanding the importance of health",
  href: "/single-post/4",
  description: "Explore the best practices and resources for learning programming from scratch. This post covers essential programming languages, coding exercises, and tips for staying motivated while mastering the art of coding.",
  date: "August 22nd, 2024",
  datetime: "10:15:45", // Updated to ISO format
  category: { title: "Medicine", href: "/categories/programming" },
  imageUrl: "/socials24.avif",
  fallbackImageUrl: "/socials24.avif",
  author: {
    id: 4, // Added id for consistency
    name: "Johnson Anderson",
    position: "Medical Doctor",
    role: "author",
    date: "August 22nd, 2024",
    datetime: "10:15:45", // Updated to ISO format
    organization: "Tech Innovators",
    href: "/authors/john-smith",
    imageUrl: "https://images.unsplash.com/photo-1552058544-f2b08422138a?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwzNjUyOXwwfDF8c2VxfHx8fHx8fHwxNjkxNTA3MzU4&ixlib=rb-1.2.1&q=80&w=1080",
    fallbackImageUrl: "/profile02.jpeg",
    canCreatePost: true, // Added
    canLike: true,
    bio: "Johnson Anderson is a Medical Doctor at Tech Innovators. He specializes in providing medical care and advice to patients, with a focus on preventive health and wellness.",
    followersCount: 0,
    followingCount: 0
  },
  features: ["SEO", "Design", "Marketing", "Science", "Technology", "Architecture", "Writing"],
  tags: ["conversion", "marketing", "user engagement"], // Add some example tags
  content: "Detailed content about boosting conversion rates, strategies, and insights.", // Add content
},
{
  id: 5,
  title: "How to learn programming from scratch",
  href: "/single-post/4",
  description: "Explore the best practices and resources for learning programming from scratch. This post covers essential programming languages, coding exercises, and tips for staying motivated while mastering the art of coding.",
  date: "August 22nd, 2024",
  datetime: "10:15:45", // Updated to ISO format
  category: { title: "Technology", href: "/categories/programming" },
  imageUrl: "/socials05.jpg",
  fallbackImageUrl: "/socials05.jpg",
  author: {
    id: 5, // Added id for consistency
    name: "Freedom George",
    position: "Software Engineer",
    role: "author",
    date: "August 22nd, 2024",
    datetime: "10:15:45", // Updated to ISO format
    organization: "Tech Innovators",
    href: "/authors/john-smith",
    imageUrl: "/socials02.jpg",
    fallbackImageUrl: "/socials05.jpg",
    canCreatePost: true, // Added
    canLike: true,
    bio: "Freedom George is a Software Engineer at Tech Innovators. He specializes in developing software applications and solutions that meet the needs of clients and users.",
    followersCount: 0,
    followingCount: 0
  },
  features: ["SEO", "Design", "Marketing", "Science", "Technology", "Architecture", "Writing"],
  tags: ["conversion", "marketing", "user engagement"], // Add some example tags
  content: "Detailed content about boosting conversion rates, strategies, and insights.", // Add content
},
{
  id: 6,
  title: "How to secure your data",
  href: "/single-post/4",
  description: "Explore the best practices and resources for learning programming from scratch. This post covers essential programming languages, coding exercises, and tips for staying motivated while mastering the art of coding.",
  date: "August 22nd, 2024",
  datetime: "10:15:45", // Updated to ISO format
  category: { title: "Technology", href: "/categories/programming" },
  imageUrl: "/team-member-1.jpg",
  fallbackImageUrl: "/socials04.jpg",
  author: {
    id: 6, // Added id for consistency
    name: "Franka Benjamin",
    position: "Database Administrator",
    role: "author",
    date: "August 22nd, 2024",
    datetime: "10:15:45", // Updated to ISO format
    organization: "Tech Innovators",
    href: "/authors/john-smith",
    imageUrl: "https://images.unsplash.com/photo-1552058544-f2b08422138a?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwzNjUyOXwwfDF8c2VxfHx8fHx8fHwxNjkxNTA3MzU4&ixlib=rb-1.2.1&q=80&w=1080",
    fallbackImageUrl: "/socials02.jpg",
    canCreatePost: true, // Added
    canLike: true,
    bio: "Franka Benjamin is a Database Administrator at Tech Innovators. She specializes in managing and securing databases to ensure the integrity and confidentiality of data.",
    followersCount: 0,
    followingCount: 0
  },
  features: ["SEO", "Design", "Marketing", "Science", "Technology", "Architecture", "Writing"],
  tags: ["conversion", "marketing", "user engagement"], // Add some example tags
  content: "Detailed content about boosting conversion rates, strategies, and insights.", // Add content
},
{
  id: 7,
  title: "Knowing your design tools",
  href: "/single-post/4",
  description: "Explore the best practices and resources for learning programming from scratch. This post covers essential programming languages, coding exercises, and tips for staying motivated while mastering the art of coding.",
  date: "August 22nd, 2024",
  datetime: "10:15:45", // Updated to ISO format
  category: { title: "Design", href: "/categories/programming" },
  imageUrl: "/socials12.avif",
  fallbackImageUrl: "/socials11.avif",
  author: {
    id: 7, // Added id for consistency
    name: "Faith Johnson",
    position: "UI/UX Designer",
    role: "author",
    date: "August 22nd, 2024",
    datetime: "10:15:45", // Updated to ISO format
    organization: "Tech Innovators",
    href: "/authors/john-smith",
    imageUrl: "/socials11.avif",
    fallbackImageUrl: "/socials12.avif",
    canCreatePost: true, // Added
    canLike: true,
    bio: "Faith Johnson is a UI/UX Designer at Tech Innovators. She specializes in creating intuitive and user-friendly interfaces that enhance the user experience and drive engagement.",
    followersCount: 0,
    followingCount: 0
  },
  features: ["SEO", "Design", "Marketing", "Science", "Technology", "Architecture", "Writing"],
  tags: ["conversion", "marketing", "user engagement"], // Add some example tags
  content: "Detailed content about boosting conversion rates, strategies, and insights.", // Add content
},
{
  id: 8,
  title: "How to become a Fullstack Engineer",
  href: "/single-post/4",
  description: "Explore the best practices and resources for learning programming from scratch. This post covers essential programming languages, coding exercises, and tips for staying motivated while mastering the art of coding.",
  date: "August 22nd, 2024",
  datetime: "10:15:45", // Updated to ISO format
  category: { title: "Programming", href: "/categories/programming" },
  imageUrl: "/socials10.avif",
  fallbackImageUrl: "/socials11.avif",
  author: {
    id: 8, // Added id for consistency
    name: "Kingsley Anada",
    position: "Fullstack Engineer",
    role: "author",
    date: "August 20th, 2024",
    datetime: "10:15:45", // Updated to ISO format
    organization: "Tech Innovators",
    href: "/authors/john-smith",
    imageUrl: "/profile02.jpeg",
    fallbackImageUrl: "/profile02.jpeg",
    canCreatePost: true, // Added
    canLike: true,
    bio: "Kinglsey Anada is a Fullstack Engineer at Tech Innovators. He specializes in developing end-to-end web applications and solutions that meet the needs of clients and users.",
    followersCount: 0,
    followingCount: 0
  },
  features: ["SEO", "Design", "Marketing", "Science", "Technology", "Architecture", "Writing"],
  tags: ["conversion", "marketing", "user engagement"], // Add some example tags
  content: "Detailed content about boosting conversion rates, strategies, and insights.", // Add content
},
{
  id: 9,
  title: "Becoming a Software specialist",
  href: "/single-post/4",
  description: "Explore the best practices and resources for learning programming from scratch. This post covers essential programming languages, coding exercises, and tips for staying motivated while mastering the art of coding.",
  date: "August 24th, 2024",
  datetime: "10:15:45", // Updated to ISO format
  category: { title: "Programming", href: "/categories/programming" },
  imageUrl: "/socials06.avif",
  fallbackImageUrl: "/socials07.avif",
  author: {
    id: 9, // Added id for consistency
    name: "Blenda Smith",
    position: "Software Specialist",
    role: "author",
    date: "March 20th, 2024",
    datetime: "10:15:45", // Updated to ISO format
    organization: "Tech Innovators",
    href: "/authors/john-smith",
    imageUrl: "/team-member-2.jpg",
    fallbackImageUrl: "/socials02.jpg",
    canCreatePost: true, // Added
    canLike: true,
    bio: "Blenda Smith is a Software Specialist at Tech Innovators. She specializes in developing software applications and solutions that meet the needs of clients and users.",
    followersCount: 0,
    followingCount: 0
  },
  features: ["SEO", "Design", "Marketing", "Science", "Technology", "Architecture", "Writing"],
  tags: ["conversion", "marketing", "user engagement"], // Add some example tags
  content: "Detailed content about boosting conversion rates, strategies, and insights.", // Add content
},
{
  id: 10,
  title: "Knowing committed staffs in your organization",
  href: "/single-post/4",
  description: "Explore the best practices and resources for learning programming from scratch. This post covers essential programming languages, coding exercises, and tips for staying motivated while mastering the art of coding.",
  date: "August 22nd, 2024",
  datetime: "10:15:45", // Updated to ISO format
  category: { title: "Business", href: "/categories/programming" },
  imageUrl: "/socials08.avif",
  fallbackImageUrl: "/socials09.avif",
  author: {
    id: 10, // Added id for consistency
    name: "Paul Freedom",
    position: "Hr Manager",
    role: "author",
    date: "August 22nd, 2024",
    datetime: "10:15:45", // Updated to ISO format
    organization: "Crown Technologies",
    href: "/authors/paul-freedom",
    imageUrl: "/socials10.avif",
    fallbackImageUrl: "/socials10.avif",
    canCreatePost: true, // Added
    canLike: true,
    bio: "Paul Freedom is an HR Manager at Crown Technologies. He specializes in managing human resources and ensuring the well-being and productivity of employees.",
    followersCount: 0,
    followingCount: 0
  },
  features: ["SEO", "Design", "Marketing", "Science", "Technology", "Architecture", "Writing"],
  tags: ["conversion", "marketing", "user engagement"], // Add some example tags
  content: "Detailed content about boosting conversion rates, strategies, and insights.", // Add content
},
{
  id: 11,
  title: "Ensuring your website security",
  href: "/single-post/4",
  description: "Explore the best practices and resources for learning programming from scratch. This post covers essential programming languages, coding exercises, and tips for staying motivated while mastering the art of coding.",
  date: "August 22nd, 2024",
  datetime: "10:15:45", // Updated to ISO format
  category: { title: "Technology", href: "/categories/programming" },
  imageUrl: "/socials14.avif",
  fallbackImageUrl: "/socials14.avif",
  author: {
    id: 11, // Added id for consistency
    name: "Thomas Anderson",
    position: "Data Analyst",
    role: "author",
    date: "August 22nd, 2024",
    datetime: "10:15:45", // Updated to ISO format
    organization: "Tech Innovators",
    href: "/authors/john-smith",
    imageUrl: "/profile02.jpeg",
    fallbackImageUrl: "/socials14.avif",
    canCreatePost: true, // Added
    canLike: true,
    bio: "Thomas Anderson is a Data Analyst at Tech Innovators. He specializes in analyzing data and generating insights to drive business decisions and strategies.",
    followersCount: 0,
    followingCount: 0
  },
  features: ["SEO", "Design", "Marketing", "Science", "Technology", "Architecture", "Writing"],
  tags: ["conversion", "marketing", "user engagement"], // Add some example tags
  content: "Detailed content about boosting conversion rates, strategies, and insights.", // Add content
},
{
  id: 12,
  title: "Knowing your IT infrastructure",
  href: "/single-post/4",
  description: "Explore the best practices and resources for learning programming from scratch. This post covers essential programming languages, coding exercises, and tips for staying motivated while mastering the art of coding.",
  date: "August 22nd, 2024",
  datetime: "10:15:45", // Updated to ISO format
  category: { title: "Programming", href: "/categories/programming" },
  imageUrl: "/socials15.avif",
  fallbackImageUrl: "/socials15.avif",
  author: {
    id: 12, // Added id for consistency
    name: "Kenneth Johnson",
    position: "Technology Consultant",
    role: "author",
    date: "August 22nd, 2024",
    datetime: "10:15:45", // Updated to ISO format
    organization: "Tech Innovators",
    href: "/authors/kenneth-johnson",
    imageUrl: "/team-memeber-3.jpg",
    fallbackImageUrl: "/user01.jpg",
    canCreatePost: true, // Added
    canLike: true,
    bio: "Kenneth Johnson is a Technology Consultant at Tech Innovators. He specializes in advising businesses on technology solutions and strategies to optimize their IT infrastructure.",
    followersCount: 0,
    followingCount: 0
  },
  features: ["SEO", "Design", "Marketing", "Science", "Technology", "Architecture", "Writing"],
  tags: ["conversion", "marketing", "user engagement"], // Add some example tags
  content: "Detailed content about boosting conversion rates, strategies, and insights.", // Add content
},
{
  id: 13,
  title: "Becoming world-class software engineer",
  href: "/single-post/4",
  description: "Explore the best practices and resources for learning programming from scratch. This post covers essential programming languages, coding exercises, and tips for staying motivated while mastering the art of coding.",
  date: "August 24th, 2024",
  datetime: "10:15:45", // Updated to ISO format
  category: { title: "Programming", href: "/categories/programming" },
  imageUrl: "/socials16.avif",
  fallbackImageUrl: "/socials17.avif",
  author: {
    id: 13, // Added id for consistency
    name: "Fred Johnson",
    position: "Software Engineer",
    role: "author",
    date: "August 22nd, 2024",
    datetime: "10:15:45", // Updated to ISO format
    organization: "Tech Innovators",
    href: "/authors/Fred-johnson",
    imageUrl: "/user01.jpg",
    fallbackImageUrl: "/user01.jpg",
    canCreatePost: true, // Added
    canLike: true,
    bio: "Fred Johnson is a Software Engineer at Tech Innovators. He specializes in developing software applications and solutions that meet the needs of clients and users.",
    followersCount: 0,
    followingCount: 0
  },
  features: ["SEO", "Design", "Marketing", "Science", "Technology", "Architecture", "Writing"],
  tags: ["conversion", "marketing", "user engagement"], // Add some example tags
  content: "Detailed content about boosting conversion rates, strategies, and insights.", // Add content
},
{
  id: 14,
  title: "How to Learn React framework",
  href: "/single-post/4",
  description: "Explore the best practices and resources for learning programming from scratch. This post covers essential programming languages, coding exercises, and tips for staying motivated while mastering the art of coding.",
  date: "August 22nd, 2024",
  datetime: "10:15:45", // Updated to ISO format
  category: { title: "Programming", href: "/categories/programming" },
  imageUrl: "/socials17.avif",
  fallbackImageUrl: "/socials17.avif",
  author: {
    id: 14, // Added id for consistency
    name: "Sixtus Chibueze",
    position: "Software Engineer",
    role: "author",
    date: "August 22nd, 2024",
    datetime: "10:15:45", // Updated to ISO format
    organization: "Tech Innovators",
    href: "/authors/Sixtus-chibueze",
    imageUrl: "/user03.jpg",
    fallbackImageUrl: "/user03.jpg",
    canCreatePost: true, // Added
    canLike: true,
    bio: "Sixtus Chibueze is a Software Engineer at Tech Innovators. He specializes in developing software applications and solutions that meet the needs of clients and users.",
    followersCount: 0,
    followingCount: 0
  },
  features: ["SEO", "Design", "Marketing", "Science", "Technology", "Architecture", "Writing"],
  tags: ["conversion", "marketing", "user engagement"], // Add some example tags
  content: "Detailed content about boosting conversion rates, strategies, and insights.", // Add content
},
{
  id: 15,
  title: "The best technology practices",
  href: "/single-post/4",
  description: "Explore the best practices and resources for learning programming from scratch. This post covers essential programming languages, coding exercises, and tips for staying motivated while mastering the art of coding.",
  date: "August 22nd, 2024",
  datetime: "10:15:45", // Updated to ISO format
  category: { title: "Programming", href: "/categories/programming" },
  imageUrl: "/socials18.avif",
  fallbackImageUrl: "/socials18.avif",
  author: {
    id: 15, // Added id for consistency
    name: "Benjamin Chukwuka",
    position: "CEO",
    role: "author",
    date: "June 21st, 2024",
    datetime: "10:15:45", // Updated to ISO format
    organization: "Gleam Technologies",
    href: "/authors/Benjamin-chukwuka",
    imageUrl: "/user03.jpg",
    fallbackImageUrl: "/user03.jpg",
    canCreatePost: true, // Added
    canLike: true,
    bio: "Benjamin Chukwuka is the CEO of Gleam Technologies. He has a passion for technology and innovation, driving the company's growth and success in the tech industry.",
    followersCount: 0,
    followingCount: 0
  },
  features: ["SEO", "Design", "Marketing", "Science", "Technology", "Architecture", "Writing"],
  tags: ["conversion", "marketing", "user engagement"], // Add some example tags
  content: "Detailed content about boosting conversion rates, strategies, and insights.", // Add content
},
{
  id: 16,
  title: "How to use the AWS Lambda",
  href: "/single-post/4",
  description: "Explore the best practices and resources for learning programming from scratch. This post covers essential programming languages, coding exercises, and tips for staying motivated while mastering the art of coding.",
  date: "August 22nd, 2024",
  datetime: "10:15:45", // Updated to ISO format
  category: { title: "Programming", href: "/categories/programming" },
  imageUrl: "/socials23.avif",
  fallbackImageUrl: "/socials23.avif",
  author: {
    id: 16, // Added id for consistency
    name: "Zara Smith",
    position: "Cloud Engineer",
    role: "author",
    date: "Jan 21st, 2024",
    datetime: "10:15:45", // Updated to ISO format
    organization: "Africa Tech",
    href: "/authors/Zara-smith",
    imageUrl: "/user02.jpg",
    fallbackImageUrl: "/user02.jpg",
    canCreatePost: true, // Added
    canLike: true,
    bio: "Zara Smith is a Cloud Engineer at Africa Tech. She specializes in cloud computing and infrastructure, leveraging AWS services to build scalable and reliable solutions for clients.",
    followersCount: 0,
    followingCount: 0
  },
  features: ["SEO", "Design", "Marketing", "Science", "Technology", "Architecture", "Writing"],
  tags: ["conversion", "marketing", "user engagement"], // Add some example tags
  content: "Detailed content about boosting conversion rates, strategies, and insights.", // Add content
},
{
  id: 17,
  title: "The best UI/UX design practices",
  href: "/single-post/4",
  description: "Explore the best practices and resources for learning programming from scratch. This post covers essential programming languages, coding exercises, and tips for staying motivated while mastering the art of coding.",
  date: "Jan 22nd, 2024",
  datetime: "10:15:45", // Updated to ISO format
  category: { title: "Programming", href: "/categories/programming" },
  imageUrl: "/socials13.avif",
  fallbackImageUrl: "/socials13.avif",
  author: {
    id: 17, // Added id for consistency
    name: "Franklin Chukwuka",
    position: "Frontend Engineer",
    role: "author",
    date: "June 21st, 2024",
    datetime: "10:15:45", // Updated to ISO format
    organization: "Tech Innovators",
    href: "/authors/Franklin-chukwuka",
    imageUrl: "/user03.jpg",
    fallbackImageUrl: "/user03.jpg",
    canCreatePost: true, // Added
    canLike: true,
    bio: "Franklin Chukwuka is a Frontend Engineer at Tech Innovators. He specializes in creating intuitive and user-friendly interfaces that enhance the user experience and drive engagement.",
    followersCount: 0,
    followingCount: 0
  },
  features: ["SEO", "Design", "Marketing", "Science", "Technology", "Architecture", "Writing"],
  tags: ["conversion", "marketing", "user engagement"], // Add some example tags
  content: "Detailed content about boosting conversion rates, strategies, and insights.", // Add content
},
{
  id: 18,
  title: "How to know the best practices in sales",
  href: "/single-post/4",
  description: "Explore the best practices and resources for learning programming from scratch. This post covers essential programming languages, coding exercises, and tips for staying motivated while mastering the art of coding.",
  date: "August 22nd, 2024",
  datetime: "10:15:45", // Updated to ISO format
  category: { title: "Programming", href: "/categories/programming" },
  imageUrl: "/socials21.avif",
  fallbackImageUrl: "/socials21.avif",
  author: {
    id: 18, // Added id for consistency
    name: "Kingston Aondofa",
    position: "Sales Engineer",
    role: "author",
    date: "June 21st, 2024",
    datetime: "10:15:45", // Updated to ISO format
    organization: "Drinks and Foods",
    href: "/authors/Kingston-aondofa",
    imageUrl: "/user01.jpg",
    fallbackImageUrl: "/user01.jpg",
    canCreatePost: true, // Added
    canLike: true,
    bio: "Kingston Aondofa is a Sales Engineer at Drinks and Foods. He specializes in developing sales strategies and techniques to drive revenue and growth for the company.",
    followersCount: 0,
    followingCount: 0
  },
  features: ["SEO", "Design", "Marketing", "Science", "Technology", "Architecture", "Writing"],
  tags: ["conversion", "marketing", "user engagement"], // Add some example tags
  content: "Detailed content about boosting conversion rates, strategies, and insights.", // Add content
},

];


export const getPostById = (id: number): Post | undefined => {
  return posts.find(post => post.id === id);
};

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

// /data/sidebarLinks.ts

export const DashboardNavLinks = [
  { name: 'Users', href: 'users' },
  { name: 'Posts', href: 'posts' },
  { name: 'Roles', href: 'roles' },
  { name: 'Manage Posts', href: 'manage-posts' },
];


