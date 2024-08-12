type Role = "author" | "admin";

// Base User interface with common properties
export interface User {
  id: number;
  name: string;
  role: Role;
  position: string;
  organization: string;
  imageUrl: string;
  fallbackImageUrl: string;
  href: string;
  canCreatePost: boolean;
  canLike: boolean;
  canComment?: boolean; // Only Admins can comment
  canFeaturePost?: boolean; // Only Admins can feature posts
  canViewCommenters?: boolean; // Only Admins can view commenters
}

// Author interface extending from User
export interface Author extends User {
  role: "author";
  canComment?: never; // Authors cannot comment
  canFeaturePost?: never; // Authors cannot feature posts
  canViewCommenters?: never; // Authors cannot view commenters
  date: string;
  datetime: string;
}

// Admin interface extending from User
export interface Admin extends User {
  role: "admin"; // Role is fixed to "admin"
  canComment: boolean;
  canFeaturePost: boolean;
  canViewCommenters: boolean;
  date: string;
  datetime: string;
}

// Category interface
export interface Category {
  title: string;
  href: string;
}

// FeaturedPost interface
export interface FeaturedPost {
  title: string;
  description: string;
  imageUrl: string;
  author: Author;
  category: Category;
  features: string[]; // Array of feature strings
}

// Post interface
export interface Post {
  id: number;
  title: string;
  description: string;
  href: string;
  imageUrl: string;
  fallbackImageUrl: string;
  datetime: string;
  date: string;
  category: Category; // Reused the Category interface here
  author: Author; // Reused the Author interface here
  features: string[]; // Array of feature strings
  tags: string[];
  content: string; // Add this line
}




// export interface FeaturedPost {
//   title: string;
//   description: string;
//   imageUrl: string;
//   author: Author;
//   category: Category;
//   features: string[]; // Array of feature strings
// }

// export interface Category {
//   title: string;
//   href: string;
// }

// type Role = "author" | "admin";

// // Base User interface with common properties
// export interface User {
//   id: number;
//   name: string;
//   role: Role;
//   canCreatePost: boolean;
//   canLike: boolean;
//   canComment?: boolean; // Only Admins can comment
//   canFeaturePost?: boolean; // Only Admins can feature posts
//   canViewCommenters?: boolean; // Only Admins can view commenters
// }

// export interface Author extends User {
//   role: "author";
//   canComment?: never; // Authors cannot comment
//   canFeaturePost?: never; // Authors cannot feature posts
//   canViewCommenters?: never; // Authors cannot view commenters
//   position: string;
//   organization: string;
//   imageUrl: string;
//   fallbackImageUrl: string;
//   date: string;
//   datetime: string;
//   href: string;
// }


// // Extended Admin interface
// export interface Admin extends User {
//   role: "admin"; // Role is fixed to "admin"
//   date: string; // New property
//   datetime: string; // New property
// }

// export interface Post {
//   id: number;
//   title: string;
//   description: string;
//   href: string;
//   imageUrl: string;
//   fallbackImageUrl: string;
//   datetime: string;
//   date: string;
//   category: Category; // Reused the Category interface here
//   author: Author; // Reused the Author interface here
//   features: string[]; // Array of feature strings
// }
