users (collection)
└── userId (document)
    ├── firstname: "John"
    ├── lastname: "Doe"
    ├── position: "Software Developer"
    ├── organization: "Tech Innovators Inc."
    ├── profileImage: "https://example.com/profile.jpg"
    ├── biography: "Software developer and tech enthusiast"
    ├── facebookLink: "https://facebook.com/johndoe"
    ├── linkedinLink: "https://linkedin.com/in/johndoe"
    ├── twitterLink: "https://twitter.com/johndoe"
    ├── createdAt: Timestamp.now()
    ├── followers (subcollection)
    │   └── followerId1 (document)
    │       └── followedAt: Timestamp.now()
    ├── following (subcollection)
    │   └── followingId1 (document)
    │       └── followedAt: Timestamp.now()
    ├── savedPosts (subcollection)
    │   └── postId1 (document)
    │       └── savedAt: Timestamp.now()
    ├── posts (subcollection)
    │   └── postId1 (document)
    │       ├── title: "Understanding React Hooks"
    │       ├── category: 1
    │       ├── description: "This post explains the use of React Hooks with examples..."
    │       ├── isFeatured: false
    │       ├── thumbnailName: "thumbnail.jpg"
    │       ├── thumbnailUrl: "https://firebasestorage.googleapis.com/v0/b/chatter-application-549bd.appspot.com/o/posts%2Fthumbnail.jpg?alt=media"
    │       ├── authorId: "abc123"
    │       ├── createdAt: Timestamp.now()
    │       ├── likes (subcollection)
    │       │   └── userId1 (document)
    │       │       └── likedAt: Timestamp.now()
    │       ├── comments (subcollection)
    │       │   └── commentId1 (document)
    │       │       ├── userId: "userId"
    │       │       ├── text: "This is a comment"
    │       │       ├── createdAt: Timestamp.now()
    │       │       └── replies (subcollection)
    │       │           └── replyId1 (document)
    │       │               ├── userId: "userId"
    │       │               ├── text: "This is a reply"
    │       │               └── createdAt: Timestamp.now()
    │       ├── saves (subcollection)
    │       │   └── userId1 (document)
    │       │       └── savedAt: Timestamp.now()
    │       └── shares (subcollection)
    │           └── shareId1 (document)
    │               ├── userId: "userId"
    │               ├── sharedAt: Timestamp.now()
    │               └── sharedWith: ["userId1", "userId2"]
    ├── notifications (subcollection)
    │   └── notificationId (document)
    │       ├── message: "User John Doe posted a new article."
    │       ├── type: "post"  // Type of notification (e.g., post, comment, follow, etc.)
    │       ├── isRead: false  // Whether the notification has been read
    │       ├── createdAt: Timestamp.now()  // When the notification was created
    └── contributors (subcollection)
        └── contributorId (document)
            ├── message: "I love using Chatter because..."
            ├── rating: 5
            ├── createdAt: Timestamp.now()

newsletterSubscribers (collection)
└── subscriberId (document)
    ├── email: "example@example.com"
    ├── subscribedAt: Timestamp.now()
    ├── confirmed: false  // Whether the email has been confirmed (for double opt-in)
    └── lastUpdate: Timestamp.now()  // When the record was last updated

faqFeedback (collection)
└── feedbackId (document)
    ├── userId: "userId"  // ID of the user who gave the feedback (optional)
    ├── isHelpful: true  // Indicates whether the FAQ was helpful or not
    └── timestamp: Timestamp.now()  // When the feedback was given
