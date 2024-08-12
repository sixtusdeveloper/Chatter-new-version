import { Author, Admin } from "@/types";

//==========================  Users data from Users page ============================//
const users: (Author | Admin)[] = [
    {
      id: 1,
      name: "Michael Benjamin",
      role: "author",
      position: "Co-Founder / CTO",
      organization: "ElitesDev Ltd",
      href: "/authors/michael-foster",
      imageUrl: "https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwzNjUyOXwwfDF8c2VxfHx8fHx8fHwxNjkxNTA3MzU4&ixlib=rb-1.2.1&q=80&w=1080",
      fallbackImageUrl: "/profile.svg",
      canCreatePost: true,
      canLike: true,
      date: "2024-08-11",
      datetime: "2024-08-11T08:00:00Z",
      bio: 'John Doe is an experienced software developer...',
      followersCount: 1200, // Example value
      followingCount: 350, // Example value
    },
    {
      id: 2,
      name: "Sandra Ankana",
      role: "admin",
      position: "Lead Designer",
      organization: "Pinace Ltd",
      href: "/authors/sandra-ankana",
      imageUrl: "https://images.unsplash.com/photo-1524504388940-b1c1722653e1?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwzNjUyOXwwfDF8c2VxfHx8fHx8fHwxNjkxNTA3MzU4&ixlib=rb-1.2.1&q=80&w=1080",
      fallbackImageUrl: "/socials01.jpg",
      canCreatePost: true,
      canLike: true,
      canComment: true,
      canFeaturePost: true,
      canViewCommenters: true,
      date: "2024-08-11",
      datetime: "2024-08-11T08:00:00Z",
      bio: 'John Doe is an experienced software developer...',
      followersCount: 1200, // Example value
      followingCount: 350, // Example value
    },
    {
      id: 3,
      name: "Anita Johnson",
      role: "admin",
      position: "Cloud Engineer",
      organization: "Google Inc",
      href: "/author/anita-johnson",
      imageUrl: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwxMjA3fDB8MXxyYW5kb218fHx8fHx8fHwxNjYxMzM3MDUw&ixlib=rb-1.2.1&q=80&w=400",
      fallbackImageUrl: "/socials01.jpg",
      canCreatePost: true,
      canLike: true,
      canComment: true,
      canFeaturePost: true,
      canViewCommenters: true,
      date: "2024-08-11",
      datetime: "2024-08-11T08:00:00Z",
      bio: 'John Doe is an experienced software developer...',
      followersCount: 1200, // Example value
      followingCount: 350, // Example value
    },
    {
      id: 4,
      name: "Daniel Dobson",
      role: "admin",
      position: "Software Engineer",
      organization: "Pinace Ltd",
      href: "/authors/daniel-dobson", 
      imageUrl: "/user01.jpg",
      fallbackImageUrl: "/user01.jpg",
      canCreatePost: true,
      canLike: true,
      canComment: true,
      canFeaturePost: true,
      canViewCommenters: true,
      date: "2024-09-01",
      datetime: "2024-09-11T08:00:00Z",
      bio: 'John Doe is an experienced software developer...',
      followersCount: 1200, // Example value
      followingCount: 350, // Example value
    },
    {
      id: 5,
      name: "Andrew Akin",
      role: "author",
      position: "DevOps Engineer",
      organization: "Pinace Ltd",
      href: "/authors/andrew-akin",
      imageUrl: "/user02.jpg",
      fallbackImageUrl: "/user02.jpg",
      canCreatePost: true,
      canLike: true,
      date: "2024-02-04",
      datetime: "2024-02-11T08:00:00Z",
      bio: 'John Doe is an experienced software developer...',
      followersCount: 1200, // Example value
      followingCount: 350, // Example value
    },
    {
      id: 6,
      name: "Sixtus Okeke",
      role: "author",
      position: "Technical Analyst",
      organization: "Google Inc",
      href: "/authors/sixtus-okeke",
      imageUrl: "/user03.jpg",
      fallbackImageUrl: "/user03.jpg",
      canCreatePost: true,
      canLike: true,
      date: "2024-05-21",
      datetime: "2024-05-11T08:00:00Z",
      bio: 'John Doe is an experienced software developer...',
      followersCount: 1200, // Example value
      followingCount: 350, // Example value
    },
    {
      id: 7,
      name: "Nathaniel Fruster",
      role: "author",
      position: "Cloud Engineer",
      organization: "Palace Hotel",
      href: "/authors/nathaniel-fruster",
      imageUrl: "/profile02.jpeg",
      fallbackImageUrl: "/profile02.jpeg",
      canCreatePost: true,
      canLike: true,
      date: "2024-01-01",
      datetime: "2024-01-11T08:00:00Z",
      bio: 'John Doe is an experienced software developer...',
      followersCount: 1200, // Example value
      followingCount: 350, // Example value
    },
    {
      id: 8,
      name: "Freedom Zaki",
      role: "author",
      position: "Security Engineer",
      organization: "Microsoft Inc",
      href: "/authors/freedom-zaki",
      imageUrl: "/user04.png",
      fallbackImageUrl: "/user04.png",
      canCreatePost: true,
      canLike: true,
      date: "2024-03-14",
      datetime: "2024-03-11T08:00:00Z",
      bio: 'John Doe is an experienced software developer...',
      followersCount: 1200, // Example value
      followingCount: 350, // Example value
    },
    {
      id: 9,
      name: "Nelson Akon",
      role: "admin",
      position: "Data Analyst",
      organization: "Microsoft Inc",
      href: "/authors/nelson-akon",
      imageUrl: "/user05.jpg",
      fallbackImageUrl: "/user05.jpg",
      canCreatePost: true,
      canLike: true,
      canComment: true,
      canFeaturePost: true,
      canViewCommenters: true,
      date: "2024-03-21",
      datetime: "2024-03-11T08:00:00Z",
      bio: 'John Doe is an experienced software developer...',
      followersCount: 1200, // Example value
      followingCount: 350, // Example value
    },
  ];
  
  export default users;