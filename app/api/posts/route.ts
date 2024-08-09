import { NextResponse } from 'next/server';
import { v4 as uuidv4 } from 'uuid';
// Import your database connection or ORM here
// Example: import db from '@/lib/db';

export async function POST(request: Request) {
  try {
    const data = await request.json();
    const newPost = {
      id: uuidv4(), // Generate a unique ID for the post
      ...data,
      createdAt: new Date().toISOString(),
    };

    // Save the new post to your database
    // Example: await db.collection('posts').insertOne(newPost);

    return NextResponse.json({ success: true, post: newPost });
  } catch (error) {
    console.error('Failed to create post:', error);
    return NextResponse.json({ success: false, error: 'Failed to create post' }, { status: 500 });
  }
}
