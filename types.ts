export interface Author {
    name: string;
    imageUrl: string;
    role: string;
    href: string;
    fallbackImageUrl: string;
  }
  
  export interface Category {
    title: string;
    href: string;
  }
  
  export interface Post {
    id: number;
    title: string;
    description: string;
    imageUrl: string;
    fallbackImageUrl: string;
    datetime: string;
    date: string;
    category: Category; // Updated to match the correct structure
    author: Author;
    href: string;
  }
  