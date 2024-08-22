import { formatDistanceToNow } from 'date-fns';
import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import {
  setVideoId,
  setVideoInfo,
  clearVideoId,
  clearVideoInfo,
} from '../utils/watchPageSlice';
import { youtube_api_key, most_popular_videos_url } from '../constants';
import { useDispatch } from 'react-redux';

const Suggestion = () => {
  const [youtubeItem, setYoutubeItem] = useState([]);
  const dispatch = useDispatch();

  const scrollToTop = () => {
    window.scrollTo(0, 0);
  };
  const setVideoDetails = (item) => {
    dispatch(clearVideoId());
    dispatch(clearVideoInfo());
    dispatch(setVideoId(item.id));
    dispatch(setVideoInfo(item));
    scrollToTop();
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

  if (youtubeItem.length === 0) return;
  else
    return youtubeItem.map((item) => {
      const { snippet, statistics, id } = item;
      const { title, channelTitle, thumbnails, publishedAt } = snippet;
      const publishedDate = new Date(publishedAt);
      return (
        <div
          key={id}
          onClick={() => {
            setVideoDetails(item);
          }}
          className=" w-[470px] flex border bg-slate-100 rounded-lg mx-1 my-2 overflow-y-auto flex-col-reverse"
        >
          <div className="w-[200px] h-[120px]">
            <Link to={'/watch?v=' + id}>
              <div className="flex  h-[120px] w-[450px] rounded-lg  cursor-pointer">
                <div>
                  <img
                    alt="thumbnail"
                    src={thumbnails.high.url}
                    className="rounded-xl cursor-pointer h-[120px] w-[200px] shadow-md "
                  />
                </div>
                <div>
                  <ul className=" h-auto  w-[230px] ml-2 ">
                    <li className="font-bold  truncate">{title}</li>
                    <li className="text-wrap truncate mb-2">{channelTitle}</li>
                    <li className=" text-wrap truncate mb-2">
                      {statistics.viewCount} views{' . '}
                      {formatDistanceToNow(publishedDate, { addSuffix: true })}
                    </li>
                  </ul>
                </div>
              </div>
            </Link>
          </div>
        </div>
      );
    });
  //
};

export default Suggestion;
