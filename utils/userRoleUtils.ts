// userRoleUtils.ts

// Base User type
interface User {
    role: string;
    posts: Post[]; // Replace 'any' with your specific Post type
    manuallyAssignedRole?: string;
    // Define other common user properties if needed
  }
  
  // Define Post type if not already defined
  interface Post {
    id: number;
    title: string;
    content: string;
  }
  
  // Admin-specific privileges
  interface Admin extends User {
    canCreatePost: boolean;
    canLike: boolean;
    canComment: boolean;
    canFeaturePost: boolean;
    canViewCommenters: boolean;
    canChangeUserRole: boolean;
  }
  
  // Author-specific privileges
  interface Author extends User {
    canCreatePost: boolean;
    canLike: boolean;
    canComment: false; // Authors cannot comment
    canFeaturePost: false; // Authors cannot feature posts
    canViewCommenters: false; // Authors cannot view commenters
    canChangeUserRole: false; // Authors cannot change user roles
  }
  
  // Example usage in functions
  
  export function assignUserRole(user: User): User {
    // Default role is "author"
    user.role = "author";
  
    // Check if the user has made 5 or more posts
    if (user.posts.length >= 5) {
      user.role = "admin";
    }
  
    // Alternatively, check if an admin has manually assigned them as an admin
    if (user.manuallyAssignedRole === "admin") {
      user.role = "admin";
    }
  
    return user;
  }
  
  export function changeUserRole(admin: Admin, user: User, newRole: string): User {
    // Only allow admins to change roles
    if (admin.canChangeUserRole && admin.role === "admin") {
      user.role = newRole;
    }
    return user;
  }
  