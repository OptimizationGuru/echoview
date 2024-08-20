// import React from 'react';
import { useSelector } from 'react-redux';
import React, { useEffect, useState } from 'react';
import { youtube_api_key } from '../constants';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import WatchDescription from './watchDescription';

const Watch = () => {
  const { videoId, videoInfo } = useSelector((store) => store.watch);
  const [bannerUrl, setBannerUrl] = useState('');
  const [infoVideo, setinfoVideo] = useState();

  // console.log('video info', videoInfo);

  const { snippet, statistics } = videoInfo;

  const { title, channelTitle, channelId } = snippet;

  const no_banner_url =
    'https://image.similarpng.com/very-thumbnail/2020/05/YouTube-logo-in-circle-PNG.png';
  const videoUrl = `https://www.youtube.com/embed/${videoId}?si=hU2rqJNhWWFkWPOK`;
  const getbannerUrlEndPoint = `https://www.googleapis.com/youtube/v3/channels?part=brandingSettings&id=${channelId}&key=${youtube_api_key}`;

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

  return (
    <div>
      <div className="rounded-xl ml-4 mt-4">
        <iframe
          className="rounded-xl"
          width="1180"
          height="615"
          src={videoUrl}
          title="YouTube video player"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
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
            <FontAwesomeIcon icon=" fa-thumbs-up" className="w-8 h-6 cursor-pointer" />
            <p className="mx-1">{parseInt(statistics.likeCount / 1000)}K</p>
          </div>
          <div className=" my-1 px-3 py-2 flex border border-gray-300 rounded-r-full hover:bg-gray-200">
            <FontAwesomeIcon icon=" fa-thumbs-down" className="w-8 h-6 cursor-pointer" />
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

        {/* <div>{infoVideo ? <WatchDescription video={infoVideo} /> : ''}</div> */}
      </div>
      <div>{infoVideo ? <WatchDescription video={infoVideo} /> : ''}</div>
    </div>
  );
};

export default Watch;
