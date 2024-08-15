import React from 'react';
import ButtonList from './ButtonList';
import VideoContainer from './VideoContainer.js';
const MainContainer = () => {
  return (
    <div className="h-full overflow-y-auto ">
      <div>
        <ButtonList />
      </div>
      <div className="h-full overflow-y-auto ">
        <VideoContainer />
      </div>
    </div>
  );
};

export default MainContainer;
