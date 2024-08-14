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
  bio: string; // Add this line
  followersCount: number; // Add this line
  followingCount: number; // Add this line
}

// Author interface extending from User
export interface Author extends User {
  role: "author";
  canComment?: never; // Authors cannot comment
  canFeaturePost?: never; // Authors cannot feature posts
  canViewCommenters?: never; // Authors cannot view commenters
  date: string;
  datetime: string;
  position: string; // Added
  organization: string; // Added
  bio: string; // Added
  followersCount: number; // Added
  followingCount: number; // Added
}

// Admin interface extending from User
export interface Admin extends User {
  role: "admin"; // Role is fixed to "admin"
  canComment: boolean;
  canFeaturePost: boolean;
  canViewCommenters: boolean;
  date: string;
  datetime: string;
  position: string; // Added
  organization: string; // Added
  bio: string; // Added
  followersCount: number; // Added
  followingCount: number; // Added
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
  category: Category;
  author: Author; // Ensure this matches the `Author` type
  features: string[];
  tags: string[];
  content: string;
}



// Testimonial types
// types.ts
export interface Testimonial {
  rating: number;
  quote: string;
  name: string;
  title: string;
  imageUrl: string;
  fallbackImageUrl: string;
  fullQuote: string;
}


