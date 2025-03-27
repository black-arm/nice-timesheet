import React from 'react';

const AdminLayout: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  return (
    <div>
      <header>
        <h1>Admin Dashboard</h1>

      </header>
      <main>{children}</main>
    </div>
  );
};

export default AdminLayout;