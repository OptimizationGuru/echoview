import React, { useEffect, useState } from 'react';
import VideoCard from './VideoCard';
import { youtube_api_key, most_popular_videos_url } from '../constants';

const VideoContainer = () => {
  const [youtubeItem, setYoutubeItem] = useState([]);

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
