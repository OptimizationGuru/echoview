import React from 'react';
import MainContainer from './MainContainer';
import SideBar from './SideBar';

const Body = () => {
  return (
    <div className="grid grid-cols-[280px_1fr] h-screen">
      <SideBar />
      <MainContainer />
    </div>
  );
};

export default Body;
