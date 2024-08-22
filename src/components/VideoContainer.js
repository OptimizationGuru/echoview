import React, { useEffect, useState } from 'react';
import VideoCard from './VideoCard';
import { youtube_api_key, most_popular_videos_url } from '../constants';
import { useDispatch } from 'react-redux';
import { showMenu } from '../utils/appSlice';

const VideoContainer = () => {
  const dispatch = useDispatch();

  const [youtubeItem, setYoutubeItem] = useState([]);

  const openSidebar = () => {
    dispatch(showMenu());
  };

  const fetchYoutubeVideos = async () => {
    try {
      const response = await fetch(most_popular_videos_url + youtube_api_key);
      const data = await response.json();
      setYoutubeItem(data.items);
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    fetchYoutubeVideos();
  }, []);

  useEffect(() => {
    openSidebar();
  }, []);

  if (youtubeItem.length === 0) return;
  else {
    return (
      <div className="flex flex-wrap items-center mt-2">
        {youtubeItem.map((video) => (
          <VideoCard info={video} key={video.id} />
        ))}
      </div>
    );
  }
};

export default VideoContainer;
