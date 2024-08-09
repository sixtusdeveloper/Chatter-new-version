'use client';

import React, { useState } from 'react';
import { BellIcon } from '@heroicons/react/24/outline';
import Link from 'next/link';

const Notification = () => {
  const [isOpen, setIsOpen] = useState(false);

  // Dummy notifications for demonstration
  const notifications = [
    { id: 1, message: 'User John Doe posted a new article.' },
    { id: 2, message: 'User Jane Smith commented on a post.' },
    { id: 3, message: 'User Alice Johnson updated their profile.' },
    { id: 4, message: 'User Raymond Andy updated their profile.' },
    { id: 5, message: 'User Frank Ben updated their profile.' },
    { id: 6, message: 'User Sharon Jacob updated their profile.' },
  ];

  return (
    <div className="relative flex justify-end p-4">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="relative p-2 text-white"
      >
        <BellIcon className="h-6 w-6" />
        {notifications.length > 0 && (
          <span className="absolute top-0 right-0 inline-flex items-center justify-center px-2 py-1 text-xs font-bold leading-none text-white bg-red-600 rounded-full">
            {notifications.length}
          </span>
        )}
      </button>
      {isOpen && (
        <div className="absolute right-0 top-12 p-2 mt-2 w-80 border border-gray-700 bg-gray-800 shadow rounded-lg max-h-64 overflow-y-auto no-scrollbar">
          <h3 className="text-lg font-semibold mb-4 tracking-wide text-white">Notifications</h3>
          <ul>
            {notifications.map((notification) => (
              <li key={notification.id} className="border-b p-4 border-gray-700 text-sm cursor-pointer text-gray-400">
                <Link href={`/blog/${notification.id}`}>
                  {notification.message}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
};

export default Notification;





