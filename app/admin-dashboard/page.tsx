'use client';

import React, { useState } from 'react';
import Sidebar from '@/components/AdminSidebar';
// import DocsNavbar from '@/components/DocsNavbar'; // Import the mobile navbar
import UsersTable from '@/components/UsersTable';
import PostsTable from '@/components/PostsTable';
import RolesTable from '@/components/RolesTable';
import ManagePostTable from '@/components/ManagePostsTable';
import Notification from '@/components/Notification';
import AnalyticsOverview from '@/components/AnalyticsOverview';
import DashboardNavbar from '@/components/DashboardNavbar';

const AdminDashboard = () => {
  const [activeSection, setActiveSection] = useState('users');

  return (
    <div className="flex h-screen">
      {/* Desktop Sidebar */}
      <Sidebar activeSection={activeSection} onSectionChange={setActiveSection} />
      
      {/* Mobile Navbar */}
      {/* <DocsNavbar activeSection={activeSection} onSectionChange={setActiveSection} /> */}
      <DashboardNavbar activeSection={activeSection} onSectionChange={setActiveSection} />
      
      {/* Main Content Area */}
      <main className="flex-1 p-4 mt-10 md:mt-0 lg:ml-64 lg:pl-4 bg-black-200"> {/* Adjusted for a gap on larger screens */}
        <Notification />
        <AnalyticsOverview />
        {activeSection === 'users' && <UsersTable />}
        {activeSection === 'posts' && <PostsTable />}
        {activeSection === 'roles' && <RolesTable />}
        {activeSection === 'manage-posts' && <ManagePostTable />}
      </main>
    </div>
  );
};

export default AdminDashboard;
