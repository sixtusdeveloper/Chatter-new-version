export interface FeaturedPost {
  title: string;
  description: string;
  imageUrl: string;
  author: Author;
  category: Category;
  features: string[]; // Array of feature strings
}

export interface Category {
  title: string;
  href: string;
}

type Role = "author" | "admin";

// Base User interface with common properties
export interface User {
  id: number;
  name: string;
  role: Role;
  canCreatePost: boolean;
  canLike: boolean;
  canComment?: boolean; // Only Admins can comment
  canFeaturePost?: boolean; // Only Admins can feature posts
  canViewCommenters?: boolean; // Only Admins can view commenters
}

// Extended Author interface with additional properties
export interface Author extends User {
  role: "author"; // Role is fixed to "author"
  canComment?: never; // Ensure Author cannot comment
  canFeaturePost?: never; // Ensure Author cannot feature posts
  canViewCommenters?: never; // Ensure Author cannot view commenters
  position: string; // New property
  organization: string; // New property
  imageUrl: string;
  fallbackImageUrl: string;
  date: string; // New property
  datetime: string; // New property
  href: string; // Added href for linking to author profile
}

// Extended Admin interface
export interface Admin extends User {
  role: "admin"; // Role is fixed to "admin"
  date: string; // New property
  datetime: string; // New property
}

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
}
