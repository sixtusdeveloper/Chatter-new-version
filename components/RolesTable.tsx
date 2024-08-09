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
      {error && <div className="text-red-500">{error}</div>}
      <table className="min-w-full bg-black-200 shadow-md rounded-lg overflow-hidden">
        <thead className="border bg-transparent border-gray-800 text-white">
          <tr>
            <th className="py-3 px-6 border-b-2 text-left text-white tracking-wider">First Name</th>
            <th className="py-3 px-6 border-b-2 text-left text-white tracking-wider">Last Name</th>
            <th className="py-3 px-6 border-b-2 text-left text-white tracking-wider">Gender</th>
            <th className="py-3 px-6 border-b-2 text-left text-white tracking-wider">Role</th>
            <th className="py-3 px-6 border-b-2 text-left text-white tracking-wider">Action</th>
          </tr>
        </thead>
        <tbody>
          {users.map((user) => (
            <tr key={user.id} className="bg-gray-900 border-b border-text-800">
              <td className="py-3 px-6 border-b text-white-100 tracking-wider border-gray-800">{user.firstName}</td>
              <td className="py-3 px-6 border-b text-white-100 tracking-wider border-gray-800">{user.lastName}</td>
              <td className="py-3 px-6 border-b text-white-100 tracking-wider border-gray-800">{user.gender}</td>
              <td className="py-3 px-6 border-b text-white-100 tracking-wider border-gray-800">{user.role}</td>
              <td className="py-3 px-6 border-b text-white-100 tracking-wider border-gray-800">
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
