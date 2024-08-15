// src/pages/exampleUsage.tsx
import React, { useEffect } from "react";
import { createUserProfile, getUserProfile } from "@/utils/userService";
import { savePost } from "@/utils/postService";
import { createNotification, getUnreadNotifications } from "@/utils/notificationService";
import { auth } from "@/firebase/firebaseConfig";

const ExampleUsage: React.FC = () => {
  useEffect(() => {
    const userId = auth.currentUser?.uid;

    if (userId) {
      createUserProfile(userId, {
        firstname: "John",
        lastname: "Doe",
        position: "Software Developer",
        organization: "Tech Innovators Inc.",
        profileImage: "https://example.com/profile.jpg",
        biography: "Software developer and tech enthusiast",
        facebookLink: "https://facebook.com/johndoe",
        linkedinLink: "https://linkedin.com/in/johndoe",
        twitterLink: "https://twitter.com/johndoe",
      });

      savePost(userId, {
        title: "Understanding React Hooks",
        category: 1,
        description: "This post explains the use of React Hooks with examples...",
        isFeatured: false,
        thumbnailName: "thumbnail.jpg",
        thumbnailUrl: "https://example.com/thumbnail.jpg",
        authorId: userId,
      });

      createNotification(userId, "Your post has received a new comment.", "comment");

      getUnreadNotifications(userId).then(notifications => {
        console.log("Unread notifications:", notifications);
      });

      getUserProfile(userId).then(profile => {
        console.log("User profile:", profile);
      });
    }
  }, []);

  return <div>Check the console for results.</div>;
};

export default ExampleUsage;
