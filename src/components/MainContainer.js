import React from 'react';
import ButtonList from './ButtonList';
import VideoContainer from './VideoContainer.js';
const MainContainer = () => {
  return (
    <div className="h-full overflow-y-auto ">
      <ButtonList />
      <VideoContainer />
    </div>
  );
};

export default MainContainer;
