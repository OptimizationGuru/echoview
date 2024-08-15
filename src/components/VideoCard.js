import React from 'react';
import { formatDistanceToNow } from 'date-fns';

const VideoCard = (info) => {
  const { snippet, statistics } = info.info;

  const { title, channelTitle, thumbnails, publishedAt } = snippet;
  const publishedDate = new Date(publishedAt);

  return (
    <div className=" h-auto w-[450px] rounded-xl my-1 mx-1 cursor-pointer">
      <img
        alt="thumbnail"
        src={thumbnails.high.url}
        className="rounded-xl cursor-pointer  h-[270px] w-[450px] "
      />
      <ul className="m-4 h-auto">
        <li className="font-bold  truncate mb-2">{title}</li>
        <li className="text-wrap truncate mb-2">{channelTitle}</li>
        <li className=" text-wrap truncate mb-2">
          {statistics.viewCount} views{' . '}
          {formatDistanceToNow(publishedDate, { addSuffix: true })}
        </li>
      </ul>
    </div>
  );
};

export default VideoCard;
