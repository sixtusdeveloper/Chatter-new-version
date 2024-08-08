import React from 'react';
import { SignedIn, SignedOut, SignInButton, UserButton, useUser } from '@clerk/nextjs';
import { SidebarNavbarLists } from '@/data';

interface SidebarProps {
  activeSection: string;
  onSectionChange: (section: string) => void;
}

const DocumentationSidebar: React.FC<SidebarProps> = ({ activeSection, onSectionChange }) => {
  const { user } = useUser();
  
  return (
    <nav className="hidden lg:flex flex-col h-full py-0 bg-gray-900 text-white-100 border md:pt-4 text-md tracking-wider leading-7">
      {SidebarNavbarLists.map((item) => (
        <button
          key={item.name}
          onClick={() => onSectionChange(item.href)}
          className={`block px-4 my-2 mx-2 py-2 text-sm rounded-full text-left font-medium ${
            activeSection === item.href ? 'bg-gray-800 text-purple' : 'hover:bg-gray-800'
          }`}
        >
          {item.name}
        </button>
      ))}
      <div className="mt-auto p-4 bg-gray-900 border border-bg-gray-800">
        <SignedOut>
          <SignInButton />
        </SignedOut>
        <SignedIn>
          <div className="flex ml-2 items-center gap-2">
            {user && <span className="text-md tracking-wide text-purple font-semibold">{user.firstName}</span>}
            <UserButton />
          </div>
        </SignedIn>
      </div>
    </nav>
  );
};

export default DocumentationSidebar;









