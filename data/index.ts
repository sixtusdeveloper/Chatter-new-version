export const navigation = [
    { name: 'Features', href: '#Features' },
    { name: 'Services', href: '#Services' },
    { name: 'Posts', href: '#Posts' },
    { name: 'Testimonials', href: '#Testimonials' },
    { name: 'FAQ', href: '#FAQ' },
];
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
];
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





