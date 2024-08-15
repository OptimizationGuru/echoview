import React from 'react';
import { youtube_logo_url, user_logo_url } from './../constants';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useDispatch } from 'react-redux';
import { toggleMenu } from '../utils/appSlice';

const Header = () => {
  const dispatch = useDispatch();

  const toggleSidebar = () => {
    dispatch(toggleMenu());
  };

  return (
    <header className="grid grid-cols-12 items-center p-2 shadow-md h-16">
      <div className="col-span-2 flex items-center ">
        <FontAwesomeIcon
          onClick={toggleSidebar}
          icon="fa-solid fa-bars"
          className="h-6 w-6 cursor-pointer hover:bg-gray-200 rounded-full p-2"
        />
        <img
          src={youtube_logo_url}
          alt="YouTube Logo"
          className="h-12 ml-4 cursor-pointer"
        />
      </div>

      <div className="col-span-8 flex justify-center">
        <input
          type="text"
          placeholder="Search"
          className="w-3/5 border border-gray-300 rounded-l-full py-2 px-4 focus:outline-none focus:border-gray-400"
        />
        <button className="border border-gray-300 bg-gray-100 py-2 px-5 rounded-r-full hover:bg-gray-200">
          <FontAwesomeIcon icon="fa-solid fa-magnifying-glass" />
        </button>
      </div>

      <div className="col-span-2 flex justify-end pr-4">
        <img
          src={user_logo_url}
          alt="User Logo"
          className="h-10 w-10 rounded-full cursor-pointer"
        />
      </div>
    </header>
  );
};

export default Header;
