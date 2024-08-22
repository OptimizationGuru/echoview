import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import {
  youtube_logo_url,
  user_logo_url,
  yutube_search_autocomplete_api,
  youtube_api_key,
} from './../constants';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useDispatch, useSelector } from 'react-redux';
import { toggleMenu, showMenu, closeMenu } from '../utils/appSlice';
import { addSuggestion } from '../utils/searchSuggestionSlice';

const Header = () => {
  const dispatch = useDispatch();
  const suggestions = useSelector(
    (store) => store.searchSuggestions.suggestions
  );
  const isSideMenuOpen = useSelector((store) => store.app.isMenuOpen);
  const [searchQuery, setSearchQuery] = useState('');
  const [searchSuggestions, setSearchSuggestions] = useState([]);
  const [flag, setFlag] = useState(false);
  const apiParams = `&q=${searchQuery}&key=${youtube_api_key}`;

  const fetchSuggestions = async () => {
    setFlag(false);
    const hasKey = suggestions.hasOwnProperty(searchQuery);
    if (!hasKey) {
      try {
        const response = await fetch(
          yutube_search_autocomplete_api + apiParams
        );
        const data = await response.json();
        setSearchSuggestions(data[1]);
        setFlag(true);
      } catch (err) {
        console.error(err);
      }
    }
  };

  const toggleSidebar = () => {
    if (isSideMenuOpen) dispatch(closeMenu());
    else dispatch(showMenu());
  };

  const openSidebar = () => {
    dispatch(showMenu());
  };

  useEffect(() => {
    let timerId;
    if (searchQuery.length > 0) {
      timerId = setTimeout(fetchSuggestions, 300);
    }
    return () => clearTimeout(timerId);
  }, [searchQuery]);

  useEffect(() => {
    if (flag) dispatch(addSuggestion({ searchQuery, searchSuggestions }));
  }, [flag]);

  return (
    <header className="grid grid-cols-12 items-center p-2 shadow-md h-16">
      <div className="col-span-2 flex items-center">
        <FontAwesomeIcon
          onClick={toggleSidebar}
          icon="fa-solid fa-bars"
          className="h-6 w-6 cursor-pointer hover:bg-gray-200 rounded-full p-2"
        />
        <Link to="/">
          <img
            src={youtube_logo_url}
            alt="YouTube Logo"
            className="h-12 ml-4 cursor-pointer"
            onClick={openSidebar}
          />
        </Link>
      </div>
      <div className="col-span-8 flex justify-center">
        <input
          type="text"
          value={searchQuery}
          placeholder="Search"
          onChange={(e) => setSearchQuery(e.target.value)}
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
