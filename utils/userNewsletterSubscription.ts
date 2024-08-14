// src/services/firebaseService.ts

import { firebaseApp } from '@/firebase/firebaseConfig'; // Adjust the path based on your project structure
import { getFirestore, collection, addDoc, Timestamp } from 'firebase/firestore';

const db = getFirestore(firebaseApp);

/**
 * Adds a new subscriber to the newsletter.
 * @param email - The email address of the subscriber.
 */
export const addSubscriber = async (email: string) => {
  try {
    const docRef = await addDoc(collection(db, 'newsletterSubscribers'), {
      email,
      subscribedAt: Timestamp.now(),
      confirmed: false,
      lastUpdate: Timestamp.now()
    });
    console.log('Subscriber added with ID: ', docRef.id);
  } catch (e) {
    console.error('Error adding subscriber: ', e);
  }
};
