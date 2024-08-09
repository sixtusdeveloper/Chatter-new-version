// components/AnalyticsOverview.tsx
import React from 'react';

const AnalyticsOverview = () => {
  // Dummy data for demonstration
  const totalUsers = 100;
  const totalPosts = 250;
  const totalComments = 500;

  return (
    <div className="bg-black-200 border border-gray-800 shadow rounded-lg p-2 md:p-4 mt-6 sm:mb-6">
      <h2 className="text-2xl font-semibold mb-4">Analytics Overview</h2>
      <div className="flex space-x-2 sm:space-x-6">
        <div className="bg-blue-800 p-4 rounded-lg flex-1">
          <h3 className="text-lg tracking-wide">Total Users</h3>
          <p className="text-2xl tracking-wide font-bold">{totalUsers}</p>
        </div>
        <div className="bg-green-800 p-4 rounded-lg flex-1">
          <h3 className="text-lg font-bold tracking-wide">Total Posts</h3>
          <p className="text-2xl tracking-wide font-bold">{totalPosts}</p>
        </div>
        <div className="bg-yellow-800 p-4 rounded-lg flex-1">
          <h3 className="text-lg font-bold tracking-wide">Total Comments</h3>
          <p className="text-2xl tracking-wide font-bold">{totalComments}</p>
        </div>
      </div>
    </div>
  );
};

export default AnalyticsOverview;
