import type { NextApiRequest, NextApiResponse } from 'next';
import { db } from '@/firebase/firebaseConfig'; // Import your Firestore instance
import { doc, getDoc, updateDoc } from 'firebase/firestore'; // Import Firestore methods

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  const { postId } = req.query;

  if (typeof postId !== 'string') {
    res.status(400).json({ error: 'Invalid postId' });
    return;
  }

  try {
    if (req.method === 'GET') {
      // Fetch post by ID
      const postRef = doc(db, 'posts', postId); // Get document reference
      const docSnap = await getDoc(postRef); // Fetch document snapshot

      if (!docSnap.exists()) {
        res.status(404).json({ error: 'Post not found' });
        return;
      }

      res.status(200).json(docSnap.data());
    } else if (req.method === 'PUT') {
      // Update post by ID
      const postRef = doc(db, 'posts', postId); // Get document reference
      await updateDoc(postRef, req.body); // Update document

      res.status(200).json({ message: 'Post updated successfully' });
    } else {
      res.setHeader('Allow', ['GET', 'PUT']);
      res.status(405).end(`Method ${req.method} Not Allowed`);
    }
  } catch (error) {
    console.error('Error handling post request', error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
}
