'use client';

// AdminDashboard.tsx
import React, { useState } from 'react';
import Sidebar from '@/components/AdminSidebar';
import DashboardNavbar from '@/components/DashboardNavbar';
import UsersTable from '@/components/UsersTable';
import PostsTable from '@/components/PostsTable';
import RolesTable from '@/components/RolesTable';
import ManagePostTable from '@/components/ManagePostsTable';
import Notification from '@/components/Notification';
import AnalyticsOverview from '@/components/AnalyticsOverview';
import { SignedIn, SignedOut, RedirectToSignIn } from '@clerk/nextjs';

const AdminDashboard = () => {
  const [activeSection, setActiveSection] = useState('users');

  return (
    <>
      <SignedIn>
        <div className="flex h-screen">
          <Sidebar activeSection={activeSection} onSectionChange={setActiveSection} className="hidden lg:block" />
          <DashboardNavbar activeSection={activeSection} onSectionChange={setActiveSection} className="block lg:hidden" />
          <main className="flex-1 p-1 mt-4 sm:mt-0 md:mt-0 lg:ml-[15.1rem] lg:pl-1 bg-black-200">
            <Notification />
            <AnalyticsOverview />
            {activeSection === 'users' && <UsersTable />}
            {activeSection === 'posts' && <PostsTable />}
            {activeSection === 'roles' && <RolesTable />}
            {activeSection === 'manage-posts' && <ManagePostTable />}
          </main>
        </div>
      </SignedIn>
      <SignedOut>
        <RedirectToSignIn />
      </SignedOut>
    </>
  );
};

export default AdminDashboard;









// 'use client';

// import React, { useState } from 'react';
// import Sidebar from '@/components/AdminSidebar';
// import DocsNavbar from '@/components/DocsNavbar'; // Import the mobile navbar
// import UsersTable from '@/components/UsersTable';
// import PostsTable from '@/components/PostsTable';
// import RolesTable from '@/components/RolesTable';
// import ManagePostTable from '@/components/ManagePostsTable';
// import Notification from '@/components/Notification';
// import AnalyticsOverview from '@/components/AnalyticsOverview';
// import DashboardNavbar from '@/components/DashboardNavbar';
// import { SignedIn, SignedOut, RedirectToSignIn } from "@clerk/nextjs";

// const AdminDashboard = () => {
//   const [activeSection, setActiveSection] = useState('users');

//   return (
//     <>
//       <SignedIn>
//         <div className="flex h-screen">
//           {/* Desktop Sidebar - Visible only on larger screens */}
//           <Sidebar activeSection={activeSection} onSectionChange={setActiveSection} className="hidden lg:block" />
          
//           {/* Mobile Navbar - Visible only on mobile devices */}
//           <DashboardNavbar activeSection={activeSection} onSectionChange={setActiveSection} className="block lg:hidden" />
          
//           {/* Main Content Area */}
//           <main className="flex-1 p-1 mt-4 sm:mt-0 md:mt-0 lg:ml-[15.1rem] lg:pl-1 bg-black-200"> {/* Adjusted for a gap on larger screens */}
//             {/* Notification Component for larger screens */}
//             <Notification className="lg:hidden bg-red-500 border border-yellow-500" />
//             <AnalyticsOverview />
//             {activeSection === 'users' && <UsersTable />}
//             {activeSection === 'posts' && <PostsTable />}
//             {activeSection === 'roles' && <RolesTable />}
//             {activeSection === 'manage-posts' && <ManagePostTable />}
//           </main>
//         </div>
//       </SignedIn>
//       <SignedOut>
//         <RedirectToSignIn />
//       </SignedOut>
//     </>
//   );
// };

// export default AdminDashboard;













// 'use client';

// import React, { useState } from 'react';
// import Sidebar from '@/components/AdminSidebar';
// import DocsNavbar from '@/components/DocsNavbar'; // Import the mobile navbar
// import UsersTable from '@/components/UsersTable';
// import PostsTable from '@/components/PostsTable';
// import RolesTable from '@/components/RolesTable';
// import ManagePostTable from '@/components/ManagePostsTable';
// import Notification from '@/components/Notification';
// import AnalyticsOverview from '@/components/AnalyticsOverview';
// import DashboardNavbar from '@/components/DashboardNavbar';
// import { SignedIn, SignedOut, RedirectToSignIn } from "@clerk/nextjs";

// const AdminDashboard = () => {
//   const [activeSection, setActiveSection] = useState('users');

//   return (
//     <>
//       <SignedIn>
//         <div className="flex h-screen">
//           {/* Desktop Sidebar - Visible only on larger screens */}
//           <Sidebar activeSection={activeSection} onSectionChange={setActiveSection} className="hidden lg:block" />
          
//           {/* Mobile Navbar - Visible only on mobile devices */}
//           <DashboardNavbar activeSection={activeSection} onSectionChange={setActiveSection} className="block lg:hidden" />
          
//           {/* Main Content Area */}
//           <main className="flex-1 p-1 mt-4 sm:mt-0 md:mt-0 lg:ml-[15.1rem] lg:pl-1 bg-black-200"> {/* Adjusted for a gap on larger screens */}
//             <Notification />
//             <AnalyticsOverview />
//             {activeSection === 'users' && <UsersTable />}
//             {activeSection === 'posts' && <PostsTable />}
//             {activeSection === 'roles' && <RolesTable />}
//             {activeSection === 'manage-posts' && <ManagePostTable />}
//           </main>
//         </div>
//       </SignedIn>
//       <SignedOut>
//         <RedirectToSignIn />
//       </SignedOut>
//     </>
//   );
// };

// export default AdminDashboard;




