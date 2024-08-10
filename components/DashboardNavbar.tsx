'use client';

import React, { useState } from 'react';
import { Dialog, DialogPanel } from '@headlessui/react';
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline';
import Image from 'next/image';
import { SignedIn, SignedOut, SignInButton, UserButton, useUser } from '@clerk/nextjs';
import { DashboardNavLinks } from '@/data';
import Notification from './Notification';

interface DashboardNavbarProps {
  activeSection: string;
  onSectionChange: (section: string) => void;
  className?: string;
}

const DashboardNavbar: React.FC<DashboardNavbarProps> = ({ activeSection, onSectionChange, className }) => {
  const { user } = useUser();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const handleClick = (href: string) => {
    onSectionChange(href);
    setMobileMenuOpen(false);
  };

  return (
    <header className={`fixed top-0 left-0 w-full lg:w-auto lg:static lg:flex lg:flex-col lg:h-full bg-black-200 border-b border-b-gray-700 lg:border-b-0 lg:border-r lg:border-gray-700 z-50 ${className}`}>
      <nav className="flex items-center justify-between p-4 lg:flex-col lg:justify-start lg:p-6">
        <a href="/" className="flex items-center">
          <Image alt="Chatter" src="/img/logo-black.png" className="h-16 w-auto" width={90} height={90} priority={true} />
        </a>
        <button
          type="button"
          onClick={() => setMobileMenuOpen(true)}
          className="lg:hidden -m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-white"
        >
          <span className="sr-only">Open main menu</span>
          <Bars3Icon aria-hidden="true" className="h-6 w-6" />
        </button>
      </nav>

      <div className="hidden lg:flex lg:flex-col lg:justify-between lg:h-full">
        <div className="flex-grow space-y-2">
          {DashboardNavLinks.map((item) => (
            <button
              key={item.name}
              onClick={() => handleClick(item.href)}
              className={`block w-full text-left px-4 py-3 rounded-full text-sm font-semibold ${
                activeSection === item.href ? 'bg-gray-800 text-purple' : 'text-gray-300 hover:bg-gray-800 hover:text-white'
              }`}
            >
              {item.name}
            </button>
          ))}
        </div>
        <div className="flex items-center gap-4">
          <Notification /> {/* Display Notification component on larger screens */}
          {user && <span className="text-md font-semibold text-purple">{user.firstName}</span>}
          <UserButton /> {/* Display the user button when signed in */}
        </div>
        <div className="flex flex-col items-center justify-center p-4">
          <SignedOut>
            <SignInButton /> {/* Display sign-in button when signed out */}
          </SignedOut>
          <SignedIn>
            {/* Additional signed-in content, if needed */}
          </SignedIn>
        </div>
      </div>

      {/* Mobile Menu */}
      <Dialog open={mobileMenuOpen} onClose={() => setMobileMenuOpen(false)}>
        <div className="fixed inset-0 z-50" />
        <DialogPanel className="fixed inset-y-0 right-0 z-50 w-full overflow-y-auto bg-black-100 p-6 sm:max-w-sm sm:ring-1 sm:ring-gray-900/10">
          <div className="flex items-center justify-between mb-6 border-b border-b-gray-700">
            <a href="/" className="flex items-center">
              <Image alt="Chatter" src="/img/logo-black.png" className="h-16 w-auto" width={100} height={100} priority={true} />
            </a>
            <button
              type="button"
              onClick={() => setMobileMenuOpen(false)}
              className="-m-2.5 rounded-md p-2.5 text-white"
            >
              <span className="sr-only">Close menu</span>
              <XMarkIcon aria-hidden="true" className="h-6 w-6" />
            </button>
          </div>
          <div className="flow-root">
            <div className="space-y-2">
              {DashboardNavLinks.map((item) => (
                <button
                  key={item.name}
                  onClick={() => handleClick(item.href)}
                  className={`block w-full text-left px-3 tracking-wide py-2 my-1 rounded-full text-sm font-semibold ${
                    activeSection === item.href ? 'bg-gray-800 text-purple' : 'text-gray-300 hover:bg-gray-800 hover:text-white'
                  }`}
                >
                  {item.name}
                </button>
              ))}
              {/* Display Notification component on mobile */}
              <Notification />
              <SignedOut>
                <SignInButton /> {/* Display sign-in button on mobile when signed out */}
              </SignedOut>
              <SignedIn>
                <UserButton /> {/* Display the user button on mobile when signed in */}
              </SignedIn>
            </div>
          </div>
        </DialogPanel>
      </Dialog>
    </header>
  );
};

export default DashboardNavbar;


















