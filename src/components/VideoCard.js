import React from 'react';
import { formatDistanceToNow } from 'date-fns';
import { Link } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import {
  setVideoId,
  setVideoInfo,
  clearVideoId,
  clearVideoInfo,
} from '../utils/watchPageSlice';

const VideoCard = (info) => {
  const dispatch = useDispatch();

  const { snippet, statistics, id } = info.info;
  const { title, channelTitle, thumbnails, publishedAt } = snippet;
  const publishedDate = new Date(publishedAt);

  const setVideoDetails = () => {
    dispatch(clearVideoId());
    dispatch(clearVideoInfo());
    dispatch(setVideoId(id));
    dispatch(setVideoInfo(info.info));
  };
  return (
    <div
      className=" h-auto w-[330px] rounded-xl my-1 mx-2 cursor-pointer shadow-md   hover:bg-gray-200"
      onClick={setVideoDetails}
    >
      <Link to={'/watch?v=' + id}>
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
      </Link>
    </div>
  );
};

export default VideoCard;
