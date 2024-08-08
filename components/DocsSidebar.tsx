import React from 'react';
import { SignedIn, SignedOut, SignInButton, UserButton, useUser } from '@clerk/nextjs';
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline';

interface SidebarProps {
  activeSection: string;
  onSectionChange: (section: string) => void;
}

const DocumentationSidebar: React.FC<SidebarProps> = ({ activeSection, onSectionChange }) => {
  const { user } = useUser();
  const navigation = [
    { name: 'Introduction', href: 'introduction' },
    { name: 'Getting Started', href: 'getting-started' },
    { name: 'Features', href: 'features' },
    { name: 'API Reference', href: 'api-reference' },
    { name: 'FAQ', href: 'faq' },
  ];

  return (
    <nav className="flex flex-col h-full p-4 bg-black-200 text-white">
      {navigation.map((item) => (
        <button
          key={item.name}
          onClick={() => onSectionChange(item.href)}
          className={`block px-3 py-2 rounded-md text-base font-medium ${
            activeSection === item.href ? 'bg-black-300' : 'hover:bg-black-300'
          }`}
        >
          {item.name}
        </button>
      ))}
      <div className="mt-auto p-4 bg-black-300">
        <SignedOut>
          <SignInButton />
        </SignedOut>
        <SignedIn>
          <div className="flex items-center gap-2">
            {user && <span className="text-sm font-semibold">{user.firstName}</span>}
            <UserButton />
          </div>
        </SignedIn>
      </div>
    </nav>
  );
};

export default DocumentationSidebar;
