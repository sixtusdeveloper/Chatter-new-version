export interface Author {
    name: string;
    imageUrl: string;
    role: string;
    date: string;
    datetime: string;
    organization: string;  // Add organization here
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
    date: string;
    datetime: string;
    category: Category;  // Use the correct Category structure
    author: Author;      // Use the updated Author structure
    href: string;
    features: string[];
    // comments: Array<{
    //   commenter: {
    //     name: string;
    //     imageUrl: string;
    //   };
    //   commentText: string;
    // }>;

  }
  