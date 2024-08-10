import React from 'react';
import Image from 'next/image';
import { SignedIn, SignedOut, SignInButton, UserButton, useUser } from '@clerk/nextjs';
import { DashboardNavLinks } from '@/data';

interface SidebarProps {
  activeSection: string;
  onSectionChange: (section: string) => void;
  className?: string; // Add className as an optional prop
}

const Sidebar: React.FC<SidebarProps> = ({ activeSection, onSectionChange, className }) => {
  const { user } = useUser();

  return (
    <nav className={`hidden lg:flex flex-col fixed top-0 left-0 h-screen w-60 py-0 bg-gray-900 text-white border-r text-md tracking-wider leading-7 ${className}`}>
      <div className="flex items-center border-b border-gray-800 p-4 bg-gray-900">
        <a href="/" className="-m-1.5 p-1.5">
          <Image
            alt="Chatter"
            src="/img/logo-black.png"
            className="h-16 w-auto"
            width={100}
            height={100}
            style={{ width: 'auto', height: 'auto' }} // Maintain aspect ratio
            priority={true}
          />
        </a>
      </div>
      <div className="flex-1 overflow-y-auto">
        {DashboardNavLinks.map((item) => (
          <button
            key={item.href}
            onClick={() => onSectionChange(item.href)}
            className={`block lg:w-full lg:max-w-[90%] px-4 my-6 mx-2 py-2 text-sm rounded-full text-left font-medium ${
              activeSection === item.href ? 'bg-gray-800 text-purple' : 'hover:bg-gray-800'
            }`}
          >
            {item.name}
          </button>
        ))}
      </div>
      <div className="mt-auto p-4 bg-gray-900 border-t border-gray-800">
        <SignedOut>
          <SignInButton />
        </SignedOut>
        <SignedIn>
          <div className="flex items-center gap-2">
            {user && <span className="text-md tracking-wide text-purple-400 text-purple font-semibold">{user.firstName}</span>}
            <UserButton />
          </div>
        </SignedIn>
      </div>
    </nav>
  );
};

export default Sidebar;













// import React from 'react';
// import Image from 'next/image';
// import { SignedIn, SignedOut, SignInButton, UserButton, useUser } from '@clerk/nextjs';
// import { DashboardNavLinks } from '@/data'; // Import the sidebarLinks from your data file

// interface SidebarProps {
//   activeSection: string;
//   onSectionChange: (section: string) => void;
// }

// const Sidebar: React.FC<SidebarProps> = ({ activeSection, onSectionChange }) => {
//   const { user } = useUser();

//   return (
//     <nav className="hidden lg:flex flex-col fixed top-0 left-0 h-screen w-60 py-0 bg-gray-900 text-white border-r text-md tracking-wider leading-7">
//       <div className="flex items-center border-b border-gray-800 p-4 bg-gray-900">
//         <Image
//           alt="Chatter"
//           src="/img/logo-black.png"
//           className="h-16 w-auto"
//           width={100}
//           height={100}
//           style={{ width: 'auto', height: 'auto' }} // Maintain aspect ratio
//           priority={true}
//         />
//       </div>
//       <div className="flex-1 overflow-y-auto">
//         {DashboardNavLinks.map((item) => (
//           <button
//             key={item.href}
//             onClick={() => onSectionChange(item.href)}
//             className={`block lg:w-full lg:max-w-[90%] px-4 my-6 mx-2 py-2 text-sm rounded-full text-left font-medium ${
//               activeSection === item.href ? 'bg-gray-800 text-purple' : 'hover:bg-gray-800'
//             }`}
//           >
//             {item.name}
//           </button>
//         ))}
//       </div>
//       <div className="mt-auto p-4 bg-gray-900 border-t border-gray-800">
//         <SignedOut>
//           <SignInButton />
//         </SignedOut>
//         <SignedIn>
//           <div className="flex items-center gap-2">
//             {user && <span className="text-md tracking-wide text-purple-400 text-purple font-semibold">{user.firstName}</span>}
//             <UserButton />
//           </div>
//         </SignedIn>
//       </div>
//     </nav>
//   );
// };

// export default Sidebar;














// import React from 'react';
// import Image from 'next/image';
// import { SignedIn, SignedOut, SignInButton, UserButton, useUser } from '@clerk/nextjs';

// interface SidebarProps {
//   activeSection: string;
//   onSectionChange: (section: string) => void;
// }

// const Sidebar: React.FC<SidebarProps> = ({ activeSection, onSectionChange }) => {
//   const { user } = useUser();

//   const DashboardNavLinks = [
//     { name: 'Users', href: 'users' },
//     { name: 'Posts', href: 'posts' },
//     { name: 'Roles', href: 'roles' },
//     { name: 'Manage Posts', href: 'manage-posts' },
//   ];

//   return (
//     <nav className="hidden lg:flex flex-col fixed top-0 left-0 h-screen w-60 py-0 bg-gray-900 text-white border-r text-md tracking-wider leading-7">
//       <div className="flex items-center border-b border-gray-800 p-4 bg-gray-900">
//         <Image
//           alt="Chatter"
//           src="/img/logo-black.png"
//           className="h-16 w-auto"
//           width={100}
//           height={100}
//           style={{ width: 'auto', height: 'auto' }} // Maintain aspect ratio
//           priority={true}
//         />
//       </div>
//       <div className="flex-1 overflow-y-auto">
//         {sidebarLinks.map((item) => (
//           <button
//             key={item.href}
//             onClick={() => onSectionChange(item.href)}
//             className={`block px-4 my-6 mx-2 py-2 text-sm rounded-full text-left font-medium ${
//               activeSection === item.href ? 'bg-gray-800 flex text-purple' : 'hover:bg-gray-800'
//             }`}
//           >
//             {item.name}
//           </button>
//         ))}
//       </div>
//       <div className="mt-auto p-4 bg-gray-900 border-t border-gray-800">
//         <SignedOut>
//           <SignInButton />
//         </SignedOut>
//         <SignedIn>
//           <div className="flex items-center gap-2">
//             {user && <span className="text-md tracking-wide text-purple-400 text-purple font-semibold">{user.firstName}</span>}
//             <UserButton />
//           </div>
//         </SignedIn>
//       </div>
//     </nav>
//   );
// };

// export default Sidebar;





