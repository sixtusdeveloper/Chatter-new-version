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
      {error && <div className="text-red-600 text-md py-2">{error}</div>}
      <table className="min-w-full bg-black-200 shadow-md rounded-lg overflow-hidden">
        <thead className="bg-transparent text-white border border-gray-800">
          <tr>
            <th className="border-b-2 py-2 md:py-4 text-left text-purple text-sm tracking-wide">First Name</th>
            <th className="border-b-2 py-2 md:py-4 text-left text-purple text-sm tracking-wide">Last Name</th>
            <th className="border-b-2 py-2 md:py-4 text-left text-purple text-sm tracking-wide">Number of Posts</th>
            <th className="border-b-2 py-2 md:py-4 text-left text-purple text-sm tracking-wide">Last Active</th>
            <th className="border-b-2 py-2 md:py-4 text-left text-purple text-sm tracking-wide">Gender</th>
            <th className="border-b-2 py-2 md:py-4 text-left text-purple text-sm tracking-wide">Role</th>
            <th className="border-b-2 py-2 md:py-4 text-left text-purple text-sm tracking-wide">Actions</th>
          </tr>
        </thead>
        <tbody>
          {posts.map((post) => (
            <tr key={post.id} className="bg-gray-900 border-b">
              <td className="border-b border-gray-800 sm:py-2 md:py-4 text-left text-sm text-white tracking-wider">{post.author.firstName}</td>
              <td className="border-b border-gray-800 sm:py-2 md:py-4 text-left text-sm text-white tracking-wider">{post.author.lastName}</td>
              <td className="border-b border-gray-800 sm:py-2 md:py-4 text-left text-sm text-white tracking-wider">{post.numPosts}</td>
              <td className="border-b border-gray-800 sm:py-2 md:py-4 text-left text-sm text-white tracking-wider">{post.lastActive}</td>
              <td className="border-b border-gray-800 sm:py-2 md:py-4 text-left text-sm text-white tracking-wider">{post.author.gender}</td>
              <td className="border-b border-gray-800 sm:py-2 md:py-4 text-left text-sm text-white tracking-wider">{post.author.role}</td>
              <td className="border-b border-gray-800 sm:py-2 md:py-4 text-left text-sm text-white tracking-wider">
                <button
                  onClick={() => handleEdit(post.id)}
                  className="bg-green-600 text-white px-3 py-1 rounded mr-2"
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
