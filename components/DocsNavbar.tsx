'use client';

import React, { useState } from 'react';
import { Dialog, DialogPanel } from '@headlessui/react';
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline';
import Image from 'next/image';
import { SignedIn, SignedOut, SignInButton, UserButton, useUser } from '@clerk/nextjs';
import { SidebarNavbarLists } from '@/data';

interface DocsNavbarProps {
  activeSection: string;
  onSectionChange: (section: string) => void;
}

const DocsNavbar: React.FC<DocsNavbarProps> = ({ activeSection, onSectionChange }) => {
  const { user } = useUser();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const handleClick = (href: string) => {
    onSectionChange(href);
    setMobileMenuOpen(false); // Close mobile menu on section click
  };

  return (
    <header className="lg:hidden z-50 fixed top-0 left-0 w-full">
        <nav className="flex items-center justify-between p-4 bg-black-200 border-b border-b-gray-700">
            <a href="/" className="flex items-center">
            <Image
                alt="Chatter"
                src="/img/logo-black.png"
                className="h-16 w-auto"
                width={90}
                height={90}
                priority={true}
            />
            </a>
            <button
            type="button"
            onClick={() => setMobileMenuOpen(true)}
            className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-white"
            >
            <span className="sr-only">Open main menu</span>
            <Bars3Icon aria-hidden="true" className="h-6 w-6" />
            </button>
        </nav>
        <Dialog open={mobileMenuOpen} onClose={() => setMobileMenuOpen(false)}>
            <div className="fixed inset-0 z-50" />
            <DialogPanel className="fixed inset-y-0 right-0 z-50 w-full overflow-y-auto bg-black-100 p-6 sm:max-w-sm sm:ring-1 sm:ring-gray-900/10">
                <div className="flex items-center justify-between mb-6 border-b border-b-gray-700 ">
                    <a href="/" className="flex items-center">
                    <Image
                        alt="Chatter"
                        src="/img/logo-black.png"
                        className="h-16 w-auto"
                        width={100}
                        height={100}
                        priority={true}
                    />
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
                        {SidebarNavbarLists.map((item) => (
                            <button
                            key={item.name}
                            onClick={() => handleClick(item.href)}
                            className={`block w-full text-left px-3 tracking-wide py-2 my-3 rounded-full text-sm font-semibold ${
                                activeSection === item.href ? 'bg-gray-800 text-purple' : 'text-gray-300 hover:bg-gray-800 hover:text-white'
                            }`}
                            >
                            {item.name}
                            </button>
                        ))}
                    </div>
                    <div className="mt-6">
                        <SignedOut>
                            <SignInButton />
                        </SignedOut>
                        <SignedIn>
                            <div className="flex ml-2 items-center gap-2">
                            {user && <span className="text-md font-semibold text-purple">{user.firstName}</span>}
                            <UserButton />
                            </div>
                        </SignedIn>
                    </div>
                </div>
            </DialogPanel>
        </Dialog>
    </header>
  );
};

export default DocsNavbar;
















