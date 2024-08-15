// src/services/userService.ts
import { doc, setDoc, getDoc, Timestamp } from "firebase/firestore";
import { db } from "@/firebase/firebaseConfig";

// Create or update a user profile
export async function createUserProfile(userId: string, data: { firstname: string, lastname: string, position: string, organization: string, profileImage: string, biography: string, facebookLink: string, linkedinLink: string, twitterLink: string }) {
  try {
    await setDoc(doc(db, "users", userId), {
      ...data,
      createdAt: Timestamp.now(),
    });
    console.log("User profile created!");
  } catch (error) {
    console.error("Error creating user profile:", error);
  }
}

// Retrieve user profile data
export async function getUserProfile(userId: string) {
  const docRef = doc(db, "users", userId);
  const docSnap = await getDoc(docRef);

  if (docSnap.exists()) {
    return docSnap.data();
  } else {
    console.log("No such user profile!");
    return null;
  }
}
