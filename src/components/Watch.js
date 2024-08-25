// import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import React, { useEffect, useRef, useState } from 'react';
import { no_banner_url, youtube_api_key } from '../constants';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import WatchDescription from './watchDescription';

import StringGenerator from '../utils/randomCommentsGenerator';
import { addNewComment } from '../utils/LivechatSlice';
import userNamegenerate from '../utils/randomUserNameGenerator';
import Livechat from './Livechat';
import { closeMenu } from '../utils/appSlice';
import Suggestion from './Suggestion';
import { toggleComments } from '../utils/LivechatSlice';
import CommentsContainer from './CommentsContainer';

const Watch = () => {
  const { videoId, videoInfo } = useSelector((store) => store.watch);
  const iframeRef = useRef(null);

  const { showComments } = useSelector((store) => store.livechat);
  const [bannerUrl, setBannerUrl] = useState('');
  const [infoVideo, setinfoVideo] = useState();
  const [key, setKey] = useState(100);
  const dispatch = useDispatch();

  const { snippet, statistics } = videoInfo;

  const { title, channelTitle, channelId } = snippet;

  const videoUrl = `https://www.youtube.com/embed/${videoId}?si=hU2rqJNhWWFkWPOK`;
  const getbannerUrlEndPoint = `https://www.googleapis.com/youtube/v3/channels?part=brandingSettings&id=${channelId}&key=${youtube_api_key}`;

  const showChat = () => {
    dispatch(toggleComments(true));
  };

  const showSuggestion = () => {
    dispatch(toggleComments(false));
  };

  useEffect(() => {
    dispatch(closeMenu());
  }, []);

  useEffect(() => {
    const fetchBanner = async () => {
      const response = await fetch(getbannerUrlEndPoint);
      const data = await response.json();
      const bannerUrl =
        data?.items[0]?.brandingSettings?.image?.bannerExternalUrl;
      setBannerUrl(bannerUrl);
    };
    fetchBanner();
    setinfoVideo(videoInfo);
  }, [getbannerUrlEndPoint, videoInfo]);

  useEffect(() => {
    let intervalId = setInterval(() => {
      const newcomment = StringGenerator(20);
      const newuser = userNamegenerate();
      dispatch(addNewComment({ user: newuser, comment: newcomment }));
      setKey(key + 1);
    }, 200);

    return () => {
      clearInterval(intervalId);
    };
  }, [showComments]);

  useEffect(() => {
    if (iframeRef.current) {
      const iframe = iframeRef.current;
      const autoplayVideo = () => {
        iframe.contentWindow.postMessage(
          '{"event":"command","func":"playVideo","args":""}',
          '*'
        );
      };
      iframe.onload = autoplayVideo;
    }
  }, [videoId]);

  return (
    <div className="flex">
      <div className="flex flex-col">
        <div className="rounded-xl ml-4 mt-4">
          <iframe
            ref={iframeRef}
            className="rounded-xl"
            width="1180"
            height="615"
            src={`${videoUrl}?autoplay=1&mute=0`}
            title="YouTube video player"
            frameBorder="0"
            allow="autoplay"
            referrerPolicy="strict-origin-when-cross-origin"
            allowFullScreen
          ></iframe>
        </div>

        <p className="text-xl font-semibold ml-4 mt-2 mb-1">{title}</p>

        <div className="flex justify-normal mb-1">
          <div className="flex">
            <img
              src={bannerUrl ? bannerUrl : no_banner_url}
              alt="banner"
              className="rounded-full h-10 w-10 ml-4 my-2 cursor-pointer"
            />
            <div className="text-lg font-semibold mx-4 my-2 cursor-pointer">
              {channelTitle}
              <p className="text-center mt-1 text-gray-400 font-normal text-sm ">
                1.42M subscribers
              </p>
            </div>
            <div className=" h-8 w-28 mx-4 my-2  border border-yellow-800  bg-black cursor-pointer rounded-3xl">
              <p className="text-center mt-1 text-white font-medium ">
                Subscribe
              </p>
            </div>
          </div>

          <div className="flex ml-[260px]  h-12">
            <div className="ml-1 my-1 px-2 py-2 flex border border-gray-300 rounded-l-full hover:bg-gray-200">
              <FontAwesomeIcon
                icon=" fa-thumbs-up"
                className="w-8 h-6 cursor-pointer"
              />
              <p className="mx-1">{parseInt(statistics.likeCount / 1000)}K</p>
            </div>
            <div className=" my-1 px-3 py-2 flex border border-gray-300 rounded-r-full hover:bg-gray-200">
              <FontAwesomeIcon
                icon=" fa-thumbs-down"
                className="w-8 h-6 cursor-pointer"
              />
            </div>
            <div>
              <div className=" my-1 mx-2 px-3 py-2 flex border cursor-pointer border-gray-300 rounded-3xl hover:bg-gray-200">
                <FontAwesomeIcon icon="fa-share" className="w-8 h-6" />
                <p className="mx-1 -my-[2px]">Share</p>
              </div>
            </div>
            <div>
              <div className=" my-1 mx-2 px-3 py-2 flex border border-gray-300 rounded-3xl cursor-pointer hover:bg-gray-200">
                <FontAwesomeIcon icon="fa-arrow-down" className="w-8 h-6" />
                <p className="mx-1 -my-[2px]">Download</p>
              </div>
            </div>
            <div>
              <div className=" my-1 mx-2 px-3 py-2 flex border border-gray-300 rounded-3xl cursor-pointer hover:bg-gray-200">
                <FontAwesomeIcon icon="fa-bookmark" className="w-8 h-6" />
                <p className="mx-1 -my-[2px]">Save</p>
              </div>
            </div>

            <div>
              <div className=" my-1 px-1 py-2 flex border border-gray-300 rounded-full cursor-pointer hover:bg-gray-200">
                <FontAwesomeIcon icon="fa-ellipsis" className="w-8 h-6" />
              </div>
            </div>
          </div>
        </div>

        <div>{infoVideo ? <WatchDescription video={infoVideo} /> : ''}</div>
        <div className='-mt-2'>
          <CommentsContainer />
        </div>
      </div>

      <div className="w-full mt-2 ml-6">
        <div className="shadow-lg flex p-2">
          <button
            className={`mx-2 px-4 py-2 text-lg font-medium rounded-md hover:bg-gray-200 hover:font-bold ${
              showComments ? ' bg-gray-200' : ''
            }`}
            onClick={showChat}
          >
            Live
          </button>

          <button
            className={`mx-2 px-4  py-2 text-lg font-medium rounded-md hover:bg-gray-200 ${
              !showComments ? ' bg-gray-200' : ''
            }`}
            onClick={showSuggestion}
          >
            Suggestions
          </button>
        </div>
        {showComments ? (
          <Livechat />
        ) : (
          <div className="overflow-y-auto">
            <Suggestion />
          </div>
        )}
      </div>
    </div>
  );
};

export default Watch;
