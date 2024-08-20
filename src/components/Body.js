import React from 'react';
import SideBar from './SideBar';
import { Outlet } from 'react-router-dom';
import { useSelector } from 'react-redux';
const Body = () => {
  const isMenuOpen = useSelector((store) => store.app.isMenuOpen);
  return (
    <div
      className={`grid ${isMenuOpen ? 'grid-cols-[280px_1fr]' : 'grid-cols-[1fr]'} h-screen`}
    >
     {isMenuOpen && <SideBar />}
      <Outlet />
    </div>
  );
};

export default Body;

// className={`grid ${isSidebarOpen ? 'grid-cols-[280px_1fr]' : 'grid-cols-[1fr]'} h-screen`}

// className="grid grid-cols-[280px_1fr] h-screen"
