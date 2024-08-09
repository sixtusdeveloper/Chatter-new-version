'use client';
import React, { useEffect, useState } from 'react';

interface Author {
  firstName: string;
  lastName: string;
  gender: string;
  role: string;
}

interface Post {
  id: number;
  author: Author;
  numPosts: number;
  lastActive: string;
}

const ManagePostsTable = () => {
  const [posts, setPosts] = useState<Post[]>([]);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    fetch('/api/posts')
      .then((res) => {
        if (!res.ok) {
          throw new Error(`HTTP error! status: ${res.status}`);
        }
        return res.json();
      })
      .then((data) => setPosts(data))
      .catch((err) => {
        console.error('Failed to fetch posts:', err);
        setError('Failed to load posts.');
      });
  }, []);

  const handleEdit = (postId: number) => {
    console.log(`Edit post with ID: ${postId}`);
  };

  const handleDelete = (postId: number) => {
    if (confirm('Are you sure you want to delete this post?')) {
      fetch(`/api/posts/${postId}`, { method: 'DELETE' })
        .then((res) => {
          if (res.ok) {
            setPosts(posts.filter(post => post.id !== postId));
          } else {
            alert('Failed to delete the post');
          }
        })
        .catch((err) => {
          console.error('Failed to delete the post:', err);
          alert('Failed to delete the post');
        });
    }
  };

  return (
    <div>
      {error && <div className="text-red-500">{error}</div>}
      <table className="min-w-full bg-black-200 shadow-md rounded-lg overflow-hidden">
        <thead className="bg-transparent text-white border border-gray-800">
          <tr>
            <th className="border-b-2 py-3 text-left text-white text-md font-semibold tracking-wider px-6 ">First Name</th>
            <th className="border-b-2 py-3 text-left text-white text-md font-semibold tracking-wider px-6 ">Last Name</th>
            <th className="border-b-2 py-3 text-left text-white text-md font-semibold tracking-wider px-6 ">Number of Posts</th>
            <th className="border-b-2 py-3 text-left text-white text-md font-semibold tracking-wider px-6 ">Last Active</th>
            <th className="border-b-2 py-3 text-left text-white text-md font-semibold tracking-wider px-6 ">Gender</th>
            <th className="border-b-2 py-3 text-left text-white text-md font-semibold tracking-wider px-6 ">Role</th>
            <th className="border-b-2 py-3 text-left text-white text-md font-semibold tracking-wider px-6 ">Actions</th>
          </tr>
        </thead>
        <tbody>
          {posts.map((post) => (
            <tr key={post.id} className="bg-gray-900 border-b">
              <td className="border-b border-gray-800 py-3 text-left text-white tracking-wider">{post.author.firstName}</td>
              <td className="border-b border-gray-800 py-3 text-left text-white tracking-wider">{post.author.lastName}</td>
              <td className="border-b border-gray-800 py-3 text-left text-white tracking-wider">{post.numPosts}</td>
              <td className="border-b border-gray-800 py-3 text-left text-white tracking-wider">{post.lastActive}</td>
              <td className="border-b border-gray-800 py-3 text-left text-white tracking-wider">{post.author.gender}</td>
              <td className="border-b border-gray-800 py-3 text-left text-white tracking-wider">{post.author.role}</td>
              <td className="border-b border-gray-800 py-3 text-left text-white tracking-wider">
                <button
                  onClick={() => handleEdit(post.id)}
                  className="bg-green-500 text-white px-3 py-1 rounded mr-2"
                >
                  Edit
                </button>
                <button
                  onClick={() => handleDelete(post.id)}
                  className="bg-red-600 text-white px-3 py-1 rounded"
                >
                  Delete
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default ManagePostsTable;
