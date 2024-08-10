'use client';
import React, { useEffect, useState } from 'react';

interface User {
  id: number;
  firstName: string;
  lastName: string;
  gender: string;
  role: string;
}

const UsersTable = () => {
  const [users, setUsers] = useState<User[]>([]);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    // Fetch users from your backend
    fetch('/api/users')
      .then((res) => {
        if (!res.ok) {
          throw new Error(`HTTP error! status: ${res.status}`);
        }
        return res.json();
      })
      .then((data) => setUsers(data))
      .catch((err) => {
        console.error('Failed to fetch users:', err);
        setError('Failed to load users.');
      });
  }, []);

  return (
    <div>
      {error && <div className="text-red-600">{error}</div>}
      <table className="min-w-full bg-black-200 shadow-md rounded-lg overflow-hidden">
        <thead className="border md:px-4 bg-transparent border-gray-800 text-white text-md">
          <tr className=''>
            <th className="border-b-2 py-2 md:py-4 text-left text-purple text-sm tracking-wide">First Name</th>
            <th className="border-b-2 py-2 md:py-4 text-left text-purple text-sm tracking-wide">Last Name</th>
            <th className="border-b-2 py-2 md:py-4 text-left text-purple text-sm tracking-wide">Gender</th>
            <th className="border-b-2 py-2 md:py-4 text-left text-purple text-sm tracking-wide">Role</th>
            <th className="border-b-2 py-2 md:py-4 text-left text-purple text-sm tracking-wide">Action</th>
          </tr>
        </thead>
        <tbody>
          {users.map((user) => (
            <tr key={user.id} className="bg-gray-900 border-b border-text-800">
              <td className="border-b border-gray-800 sm:py-2 md:py-4 text-left text-sm text-gray-200 tracking-wider">{user.firstName}</td>
              <td className="border-b border-gray-800 sm:py-2 md:py-4 text-left text-sm text-gray-200 tracking-wider">{user.lastName}</td>
              <td className="border-b border-gray-800 sm:py-2 md:py-4 text-left text-sm text-gray-200 tracking-wider">{user.gender}</td>
              <td className="border-b border-gray-800 sm:py-2 md:py-4 text-left text-sm text-gray-200 tracking-wider">{user.role}</td>
              <td className="border-b border-gray-800 sm:py-2 md:py-4 text-left text-sm text-gray-200 tracking-wider">
                <button className="bg-blue-600 text-white px-3 py-1 rounded">
                  Manage
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default UsersTable;
