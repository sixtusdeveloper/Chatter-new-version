// src/services/postService.ts
import { collection, addDoc, Timestamp } from "firebase/firestore";
import { db } from "@/firebase/firebaseConfig";

// Save a post for a user
export async function savePost(userId: string, postData: { title: string, category: number, description: string, isFeatured: boolean, thumbnailName: string, thumbnailUrl: string, authorId: string }) {
  try {
    const docRef = await addDoc(collection(db, "users", userId, "posts"), {
      ...postData,
      createdAt: Timestamp.now(),
    });
    console.log("Post saved with ID:", docRef.id);
    return docRef.id;
  } catch (error) {
    console.error("Error saving post:", error);
    return null;
  }
}
