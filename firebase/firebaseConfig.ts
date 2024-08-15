import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';
import { getStorage } from 'firebase/storage';
import { getAnalytics } from 'firebase/analytics';
import { getAuth } from 'firebase/auth';  // Import getAuth from Firebase Authentication

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBkfzxAMgi9d7n2HsO1R5QmkY3O3_AQAbA",
  authDomain: "chatter-application-549bd.firebaseapp.com",
  projectId: "chatter-application-549bd",
  storageBucket: "chatter-application-549bd.appspot.com",
  messagingSenderId: "569930315839",
  appId: "1:569930315839:web:e56d0b78be3711d30f208a",
  measurementId: "G-N2X0M1QDGS"
};

// Initialize Firebase
const firebaseApp = initializeApp(firebaseConfig);
const analytics = getAnalytics(firebaseApp);

// Initialize Firebase Authentication and export it
export const auth = getAuth(firebaseApp);

// Export Firebase services
export const db = getFirestore(firebaseApp);
export const storage = getStorage(firebaseApp);
export { analytics, firebaseApp };
