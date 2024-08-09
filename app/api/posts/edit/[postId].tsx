import { NextApiRequest, NextApiResponse } from 'next';
import { doc, getDoc, updateDoc } from 'firebase/firestore';
import { db } from '@/firebase/firebaseConfig';

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  const { postId } = req.query;

  if (typeof postId !== 'string') {
    return res.status(400).json({ error: 'Invalid postId' });
  }

  try {
    if (req.method === 'GET') {
      // Fetch the post by ID
      const postRef = doc(db, 'posts', postId);
      const docSnap = await getDoc(postRef);

      if (!docSnap.exists()) {
        return res.status(404).json({ error: 'Post not found' });
      }

      return res.status(200).json(docSnap.data());
    } else if (req.method === 'PUT') {
      // Update the post by ID
      const postRef = doc(db, 'posts', postId);
      await updateDoc(postRef, req.body);

      return res.status(200).json({ message: 'Post updated successfully' });
    } else {
      res.setHeader('Allow', ['GET', 'PUT']);
      return res.status(405).end(`Method ${req.method} Not Allowed`);
    }
  } catch (error) {
    console.error('Error handling post request', error);
    return res.status(500).json({ error: 'Internal Server Error' });
  }
}
