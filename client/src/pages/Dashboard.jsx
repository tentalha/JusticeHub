import React from 'react';
import { useSelector } from 'react-redux';
import { Sidebar } from 'components';
import { useNavigate } from 'react-router-dom';

export const Dashboard = () => {
  const { user } = useSelector((state) => state.user);

  return (
    <div className="flex">
      {/* Sidebar */}
      <Sidebar />

      {/* Main Content */}
      <main className="flex-1 p-6 bg-white">
        <div className="w-4/5 mx-auto">
          <h2 className="text-2xl font-bold mb-4 text-center">
            Welcome to your Dashboard, {user?.name}
          </h2>
          <p className="text-gray-600">
            This is a sample dashboard built using React and Tailwind CSS. Feel free to customize it to suit your needs.
          </p>
        </div>
      </main>
    </div>
  );
};


