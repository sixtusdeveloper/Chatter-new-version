// components/UsersTable.tsx
import React, { useState } from 'react';

const UsersTable = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [filterRole, setFilterRole] = useState('All');

  const users = [
    { firstName: 'John', lastName: 'Doe', gender: 'Male', role: 'Admin' },
    { firstName: 'Jane', lastName: 'Smith', gender: 'Female', role: 'Author' },
    { firstName: 'Alice', lastName: 'Johnson', gender: 'Female', role: 'Author' },
    { firstName: 'Bob', lastName: 'Brown', gender: 'Male', role: 'Admin' },
  ];

  const filteredUsers = users.filter(user => 
    (user.firstName.toLowerCase().includes(searchTerm.toLowerCase()) ||
     user.lastName.toLowerCase().includes(searchTerm.toLowerCase())) &&
    (filterRole === 'All' || user.role === filterRole)
  );

  return (
    <div className="bg-black-200 shadow rounded-lg p-1 sm:p-6 overflow-x-auto">
      <h2 className="text-2xl font-semibold mb-4">Users</h2>
      <div className="mb-4">
        <input
          type="text"
          placeholder="Search by name..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          className="p-2 border bg-transparent border-gray-700 rounded-lg w-full"
        />
        <select
          value={filterRole}
          onChange={(e) => setFilterRole(e.target.value)}
          className="mt-2 p-2 border bg-transparent border-gray-700 rounded-lg w-full"
        >
          <option className="bg-blue-600 text-sm tracking-wide border-b-2 py-2 lg:py-4" value="All">All Roles</option>
          <option className="bg-blue-600 text-sm tracking-wide border-b-2 py-2 lg:py-4" value="Admin">Admin</option>
          <option className="bg-blue-600 text-sm tracking-wide border-b-2 py-2 lg:py-4" value="Author">Author</option>
        </select>
      </div>
      <table className="w-full border-collapse">
        <thead>
          <tr>
            <th className="border-b-2 py-2 md:py-4 text-left text-purple text-sm tracking-wide">First Name</th>
            <th className="border-b-2 py-2 md:py-4 text-left text-purple text-sm tracking-wide">Last Name</th>
            <th className="border-b-2 py-2 md:py-4 text-left text-purple text-sm tracking-wide">Gender</th>
            <th className="border-b-2 py-2 md:py-4 text-left text-purple text-sm tracking-wide">Role</th>
          </tr>
        </thead>
        <tbody>
          {filteredUsers.map((user, index) => (
            <tr key={index}>
              <td className="border-b border-gray-800 sm:py-2 md:py-4 text-left text-sm text-white tracking-wider">{user.firstName}</td>
              <td className="border-b border-gray-800 sm:py-2 md:py-4 text-left text-sm text-white tracking-wider">{user.lastName}</td>
              <td className="border-b border-gray-800 sm:py-2 md:py-4 text-left text-sm text-white tracking-wider">{user.gender}</td>
              <td className="border-b border-gray-800 sm:py-2 md:py-4 text-left text-sm text-white tracking-wider">{user.role}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default UsersTable;













// This table is without dumi text
// components/UsersTable.tsx
// 'use client';
// import React, { useEffect, useState } from 'react';

// const UsersTable = () => {
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

// export default UsersTable;
