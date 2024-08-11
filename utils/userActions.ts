// userActions.ts

import { Admin, Author, Post } from '@/types'; // Adjust path as needed

// Function to create a post (Admin and Author can create posts)
export function createPost(user: Admin | Author, post: Post): void {
  if (user.canCreatePost) {
    // Logic to create a post
    console.log(`Post created by ${user.role}:`, post);
  } else {
    console.error('You do not have permission to create a post.');
  }
}

// Function to like a post (Admin and Author can like posts)
export function likePost(user: Admin | Author, postId: number): void {
  if (user.canLike) {
    // Logic to like a post
    console.log(`${user.role} liked post ${postId}`);
  } else {
    console.error('You do not have permission to like posts.');
  }
}

// Function to comment on a post (Only Admins can comment)
export function commentOnPost(user: Admin, postId: number, comment: string): void {
  if (user.canComment) {
    // Logic to comment on a post
    console.log(`${user.role} commented on post ${postId}: ${comment}`);
  } else {
    console.error('You do not have permission to comment on posts.');
  }
}

// Function to feature a post (Only Admins can feature posts)
export function featurePost(user: Admin, postId: number): void {
  if (user.canFeaturePost) {
    // Logic to feature a post
    console.log(`${user.role} featured post ${postId}`);
  } else {
    console.error('You do not have permission to feature posts.');
  }
}

// Function to view commenters (Only Admins can view commenters)
export function viewCommenters(user: Admin, postId: number): void {
  if (user.canViewCommenters) {
    // Logic to view commenters
    console.log(`${user.role} is viewing commenters on post ${postId}`);
  } else {
    console.error('You do not have permission to view commenters.');
  }
}
