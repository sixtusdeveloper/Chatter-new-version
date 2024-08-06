// firebase/firebaseConfig.ts

import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';
import { getStorage } from 'firebase/storage';
import { getAnalytics } from 'firebase/analytics';

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
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

// Export Firebase services
export const db = getFirestore(app);
export const storage = getStorage(app);
export { analytics };
