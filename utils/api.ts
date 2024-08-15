// import { getFirestore, doc, setDoc } from 'firebase/firestore';
// import { getStorage, ref, uploadBytes, getDownloadURL } from 'firebase/storage';
// import { firebaseApp } from '@/firebase/firebaseConfig'; // Adjust path if necessary


// const db = getFirestore(firebaseApp);
// const storage = getStorage(firebaseApp);

// export const updateUserProfile = async (userId: string, profileData: any) => {
//   try {
//     await setDoc(doc(db, 'users', userId), profileData, { merge: true });
//     console.log('User profile updated successfully');
//   } catch (error) {
//     console.error('Error updating user profile: ', error);
//   }
// };

// export const uploadProfileImage = async (file: File, userId: string) => {
//   try {
//     const storageRef = ref(storage, `profileImages/${userId}/${file.name}`);
//     await uploadBytes(storageRef, file);
//     const downloadURL = await getDownloadURL(storageRef);
//     return downloadURL;
//   } catch (error) {
//     console.error('Error uploading profile image: ', error);
//     throw error;
//   }
// };













'use client';

import axios from 'axios';

export const createPost = async (postData: any) => {
  const formData = new FormData();
  formData.append('title', postData.title);
  formData.append('category', postData.category);
  formData.append('isFeatured', String(postData.isFeatured));
  formData.append('avatar', postData.avatar);
  formData.append('thumbnail', postData.thumbnail);

  const response = await fetch('/api/posts', {
    method: 'POST',
    body: formData,
  });

  if (!response.ok) {
    throw new Error('Failed to create post');
  }

  const data = await response.json();
  return data.post;
};
  

  

// Fetch a single post by ID
export const fetchPostById = async (postId: string) => {
  const response = await axios.get(`/api/posts/${postId}`);
  return response.data;
};

// Update a post by ID
export const updatePost = async (postId: string, updatedPost: any) => {
  const response = await axios.put(`/api/posts/${postId}`, updatedPost);
  return response.data;
};