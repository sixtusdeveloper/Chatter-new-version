// pages/api/contributors.ts
import { NextApiRequest, NextApiResponse } from 'next';

// Dummy example: Replace with actual database logic
const handlePostRequest = async (req: NextApiRequest, res: NextApiResponse) => {
    if (req.method === 'POST') {
        const { name, message, rating } = req.body;

        // Store this data in your database
        // Example: await database.insert('contributors', { name, message, rating });

        res.status(200).json({ success: true });
    } else {
        res.status(405).json({ error: 'Method not allowed' });
    }
};

export default handlePostRequest;
