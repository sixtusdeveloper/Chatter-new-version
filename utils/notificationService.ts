// src/services/notificationService.ts
import { collection, addDoc, query, where, getDocs, Timestamp } from "firebase/firestore";
import { db } from "@/firebase/firebaseConfig";

// Create a notification for a user
export async function createNotification(userId: string, message: string, type: string) {
  try {
    await addDoc(collection(db, "users", userId, "notifications"), {
      message,
      type,
      isRead: false,
      createdAt: Timestamp.now(),
    });
    console.log("Notification created!");
  } catch (error) {
    console.error("Error creating notification:", error);
  }
}

// Get unread notifications for a user
export async function getUnreadNotifications(userId: string) {
  const q = query(collection(db, "users", userId, "notifications"), where("isRead", "==", false));
  const querySnapshot = await getDocs(q);

  const notifications = querySnapshot.docs.map(doc => ({
    id: doc.id,
    ...doc.data(),
  }));

  return notifications;
}
