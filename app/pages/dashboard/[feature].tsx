// pages/dashboard/[feature].tsx
'use client';
import { useRouter } from 'next/router';
import AdminSidebar from '@/components/AdminSidebar';

const Dashboard = ({ params }) => {
  const { feature } = params;
  const router = useRouter();

  // Placeholder components for different features
  const featureComponents = {
    users: UsersTable,
    posts: PostsTable,
    roles: RolesTable,
    'manage-posts': ManagePostsTable,
  };

  const ActiveComponent = featureComponents[feature] || UsersTable;

  return (
    <div className="flex">
      <AdminSidebar active={feature} />
      <main className="flex-1 p-8 bg-gray-100 overflow-y-auto">
        <h2 className="text-3xl font-semibold mb-6">{feature}</h2>
        <ActiveComponent />
      </main>
    </div>
  );
};

export default Dashboard;
