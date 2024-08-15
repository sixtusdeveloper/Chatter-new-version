'use client';

import React, { useState, useEffect, useRef } from 'react';
import { BellIcon } from '@heroicons/react/24/outline';
import Link from 'next/link';

interface NotificationProps {
  isMobile?: boolean;
}

const Notification: React.FC<NotificationProps> = ({ isMobile = false }) => {
  const [isOpen, setIsOpen] = useState(false);
  const modalRef = useRef<HTMLDivElement>(null);
  const buttonRef = useRef<HTMLButtonElement>(null);

   // Dummy notifications for demonstration
   const notifications = [
    { id: 1, message: 'User John Doe posted a new article.' },
    { id: 2, message: 'User Jane Smith commented on a post.' },
    { id: 3, message: 'User Alice Johnson updated their profile.' },
    { id: 4, message: 'User Raymond Andy updated their profile.' },
    { id: 5, message: 'User Frank Ben updated their profile.' },
    { id: 6, message: 'User Sharon Jacob updated their profile.' },
    { id: 7, message: 'User Linda Martin posted a new article.' },
    { id: 8, message: 'User Mark Taylor commented on a post.' },
    { id: 9, message: 'User Emily Davis updated their profile.' },
    { id: 10, message: 'User Michael Brown updated their profile.' },
  ];

  const handleClickOutside = (event: MouseEvent) => {
    if (
      modalRef.current &&
      !modalRef.current.contains(event.target as Node) &&
      buttonRef.current &&
      !buttonRef.current.contains(event.target as Node)
    ) {
      setIsOpen(false);
    }
  };

  useEffect(() => {
    document.addEventListener('click', handleClickOutside, true);
    return () => {
      document.removeEventListener('click', handleClickOutside, true);
    };
  }, []);

  return (
    <div
      className={`relative p-2 ${isMobile ? 'block lg:hidden' : 'hidden lg:flex justify-end sm:px-6'}`}
    >
      <button
        ref={buttonRef}
        onClick={() => setIsOpen(!isOpen)}
        className="relative text-white"
      >
        <BellIcon className="h-8 w-8" />
        {notifications.length > 0 && (
          <span className="absolute top-0 left-2 inline-flex items-center justify-center px-2 py-1 text-xs font-bold leading-none text-white bg-red-600 rounded-full">
            {notifications.length}
          </span>
        )}
      </button>
      {isOpen && (
        <div
          ref={modalRef}
          className="absolute right-0 top-8 mt-2 w-80 max-w-md bg-gray-700 text-white text-xs sm:text-sm rounded-md shadow-lg z-50 overflow-hidden"
        >
          <div className="h-64 overflow-y-auto p-2 text-left notification-custom-scrollbar">
            <h3 className="font-medium tracking-wide leading-tight">Notifications</h3>
            <hr className="my-2 border-gray-500" />
            {notifications.length > 0 ? (
              <ul className="space-y-1">
                {notifications.map((notification) => (
                  <li key={notification.id}>
                    <Link href="#">
                      <p className="p-2 rounded-md hover:bg-gray-600">{notification.message}</p>
                    </Link>
                  </li>
                ))}
              </ul>
            ) : (
              <p>No new notifications.</p>
            )}
          </div>
        </div>
      )}
    </div>
  );
};

export default Notification;




