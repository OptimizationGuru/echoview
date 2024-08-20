import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import {
  IconMusic,
  IconDownload,
  IconShoppingBag,
  IconFlame,
  IconBrandYoutube,
  IconThumbUpFilled,
  IconClock,
  IconBrandYoutubeKids,
  IconDeviceTv,
  IconHomeFilled,
  IconPlaylist,
  IconChevronRight,
  IconUserSquare,
  IconHistory,
  IconMovie,
  IconBuildingBroadcastTower,
  IconDeviceGamepad,
  IconNews,
  IconTrophy,
  IconBulb,
  IconHanger2,
  IconBrandApplePodcast,
  IconChevronDown,
} from '@tabler/icons-react';
import { subcription_img_url, subcription_img_url2 } from './../constants';
import { useSelector } from 'react-redux';

const SideBar = () => {
  const isMenuOpen = useSelector((store) => store.app.isMenuOpen);
  const [showAll, setShowAll] = useState(false);
  const [btnText, setBtnText] = useState('Show More');

  const handleToggle = () => {
    setShowAll(!showAll);
    setBtnText(showAll ? 'Show More' : 'Show Less');
  };

  const SidebarItem = ({ icon, text }) => (
    <li className="my-1 text-base py-2 px-3 flex items-center hover:bg-gray-200 rounded-md cursor-pointer">
      <div className="mr-3">{icon}</div>
      <span>{text}</span>
    </li>
  );

  const SectionHeader = ({ title }) => (
    <div className="py-2 px-3 text-base font-medium flex items-center hover:bg-gray-200 rounded-md cursor-pointer">
      <span className="mr-2">{title}</span>
      <IconChevronRight />
    </div>
  );

  if (!isMenuOpen) return <></>;

  return (
    <aside className="h-full overflow-y-auto bg-white shadow-lg">
      <nav className="p-3">
        <ul>
          <Link to="/">
            <SidebarItem icon={<IconHomeFilled />} text="Home" />
          </Link>
          <SidebarItem icon={<IconBrandYoutube />} text="Shorts" />
          <SidebarItem icon={<IconBrandYoutubeKids />} text="Subscriptions" />
          <SidebarItem icon={<IconMusic />} text="YouTube Music" />
        </ul>
      </nav>

      <hr />

      <nav className="p-3">
        <SectionHeader title="You" />
        <ul>
          <SidebarItem icon={<IconUserSquare />} text="Your Channel" />
          <SidebarItem icon={<IconHistory />} text="History" />
          <SidebarItem icon={<IconPlaylist />} text="Playlists" />
          <SidebarItem icon={<IconDeviceTv />} text="Your Videos" />
          <SidebarItem icon={<IconClock />} text="Watch Later" />
          <SidebarItem icon={<IconThumbUpFilled />} text="Liked Videos" />
          <SidebarItem icon={<IconDownload />} text="Downloads" />
        </ul>
      </nav>

      <hr />

      <nav className="p-3">
        <SectionHeader title="Explore" />
        <ul>
          <SidebarItem icon={<IconFlame />} text="Trending" />
          <SidebarItem icon={<IconShoppingBag />} text="Shopping" />
          <SidebarItem icon={<IconMusic />} text="Music" />
          <SidebarItem icon={<IconMovie />} text="Movies" />
          <SidebarItem icon={<IconBuildingBroadcastTower />} text="Live" />
          <SidebarItem icon={<IconDeviceGamepad />} text="Gaming" />
          <SidebarItem icon={<IconNews />} text="News" />
          <SidebarItem icon={<IconTrophy />} text="Sports" />
          <SidebarItem icon={<IconBulb />} text="Courses" />
          <SidebarItem icon={<IconHanger2 />} text="Fashion & Beauty" />
          <SidebarItem icon={<IconBrandApplePodcast />} text="Podcasts" />
        </ul>
      </nav>

      <hr />

      <nav className="p-3">
        <SectionHeader title="Subscriptions" />
        <ul>
          <SidebarItem
            icon={
              <img
                src={subcription_img_url}
                alt="Jashn-e-Rekhta"
                className="rounded-full h-8"
              />
            }
            text="Jashn-e-Rekhta"
          />
          <SidebarItem
            icon={
              <img
                src={subcription_img_url2}
                alt="sudoCode"
                className="rounded-full h-8"
              />
            }
            text="sudoCode"
          />
          {showAll && (
            <>
              <SidebarItem icon={<IconPlaylist />} text="Playlists" />
              <SidebarItem icon={<IconDeviceTv />} text="Your Videos" />
            </>
          )}
          <li
            className="my-1 text-base py-2 px-3 flex items-center hover:bg-gray-200 rounded-md cursor-pointer"
            onClick={handleToggle}
          >
            <IconChevronDown />
            <span className="ml-2">{btnText}</span>
          </li>
        </ul>
      </nav>
    </aside>
  );
};

export default SideBar;
