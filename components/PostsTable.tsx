// components/PostsTable.tsx
import React, { useState } from 'react';

const PostsTable = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [filterStatus, setFilterStatus] = useState('All');

  const posts = [
    {
      firstName: 'John',
      lastName: 'Doe',
      postCount: 15,
      commentCount: 30,
      likeCount: 120,
      lastActive: '2 days ago',
      activeStatus: 'Active',
    },
    {
      firstName: 'Jane',
      lastName: 'Smith',
      postCount: 10,
      commentCount: 25,
      likeCount: 90,
      lastActive: '1 day ago',
      activeStatus: 'Active',
    },
    {
      firstName: 'Alice',
      lastName: 'Johnson',
      postCount: 8,
      commentCount: 18,
      likeCount: 75,
      lastActive: '3 days ago',
      activeStatus: 'Inactive',
    },
    {
      firstName: 'Bob',
      lastName: 'Brown',
      postCount: 20,
      commentCount: 40,
      likeCount: 150,
      lastActive: '5 hours ago',
      activeStatus: 'Active',
    },
  ];

  const filteredPosts = posts.filter(post =>
    (post.firstName.toLowerCase().includes(searchTerm.toLowerCase()) ||
     post.lastName.toLowerCase().includes(searchTerm.toLowerCase())) &&
    (filterStatus === 'All' || post.activeStatus === filterStatus)
  );

  return (
    <div className="bg-gray-900 shadow rounded-lg p-6 overflow-x-auto">
      <h2 className="text-2xl font-semibold mb-4">Posts</h2>
      <div className="mb-4">
        <input
          type="text"
          placeholder="Search by name..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          className="p-2 border bg-transparent border-gray-700 rounded-lg w-full"
        />
        <select
          value={filterStatus}
          onChange={(e) => setFilterStatus(e.target.value)}
          className="mt-2 p-2 border bg-transparent border-gray-700 rounded-lg w-full"
        >
          <option className="bg-blue-700" value="All">All Statuses</option>
          <option className="bg-blue-700" value="Active">Active</option>
          <option className="bg-blue-700" value="Inactive">Inactive</option>
        </select>
      </div>
      <table className="w-full border-collapse">
        <thead>
          <tr>
            <th className="border-b-2 py-3 text-left text-white tracking-wider">First Name</th>
            <th className="border-b-2 py-3 text-left text-white tracking-wider">Last Name</th>
            <th className="border-b-2 py-3 text-left text-white tracking-wider">Posts</th>
            <th className="border-b-2 py-3 text-left text-white tracking-wider">Comments</th>
            <th className="border-b-2 py-3 text-left text-white tracking-wider">Likes</th>
            <th className="border-b-2 py-3 text-left text-white tracking-wider">Last Active</th>
            <th className="border-b-2 py-3 text-left text-white tracking-wider">Status</th>
          </tr>
        </thead>
        <tbody>
          {filteredPosts.map((post, index) => (
            <tr key={index}>
              <td className="border-b py-3 text-white-100 tracking-wider border-gray-800">{post.firstName}</td>
              <td className="border-b py-3 text-white-100 tracking-wider border-gray-800">{post.lastName}</td>
              <td className="border-b py-3 text-white-100 tracking-wider border-gray-800">{post.postCount}</td>
              <td className="border-b py-3 text-white-100 tracking-wider border-gray-800">{post.commentCount}</td>
              <td className="border-b py-3 text-white-100 tracking-wider border-gray-800">{post.likeCount}</td>
              <td className="border-b py-3 text-white-100 tracking-wider border-gray-800">{post.lastActive}</td>
              <td className={`border-b py-3 text-white-100 tracking-wider border-gray-800 ${post.activeStatus === 'Active' ? 'text-green-500' : 'text-red-500'}`}>
                {post.activeStatus}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default PostsTable;






// This table is without dumi text
// components/UsersTable.tsx
// 'use client';
// import React, { useEffect, useState } from 'react';

// const PostsTable = () => {
//   const [users, setUsers] = useState([]);

//   useEffect(() => {
//     // Fetch users from your backend
//     fetch('/api/users')
//       .then((res) => res.json())
//       .then((data) => setUsers(data));
//   }, []);

//   return (
//     <table className="min-w-full bg-white shadow-md rounded-lg overflow-hidden">
//       <thead className="bg-gray-800 text-white">
//         <tr>
//           <th className="py-3 px-6">First Name</th>
//           <th className="py-3 px-6">Last Name</th>
//           <th className="py-3 px-6">Gender</th>
//           <th className="py-3 px-6">Role</th>
//           <th className="py-3 px-6">Action</th>
//         </tr>
//       </thead>
//       <tbody>
//         {users.map((user) => (
//           <tr key={user.id} className="bg-gray-100 border-b">
//             <td className="py-3 px-6">{user.firstName}</td>
//             <td className="py-3 px-6">{user.lastName}</td>
//             <td className="py-3 px-6">{user.gender}</td>
//             <td className="py-3 px-6">{user.role}</td>
//             <td className="py-3 px-6">
//               <button className="bg-blue-600 text-white px-3 py-1 rounded">
//                 Manage
//               </button>
//             </td>
//           </tr>
//         ))}
//       </tbody>
//     </table>
//   );
// };

// export default PostsTable;
