import React from 'react'
import {hamburger_menu_logo_url, youtube_logo_url, user_logo_url} from './../constants'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const Header = () => {
  return (
    <div className='grid grid-flow-col m-0 p-2 shadow-md h-20'>

    <div className='flex mr-4 col-span-1 ml-8' >
    <FontAwesomeIcon icon="fa-solid fa-bars"  className='h-7 mr-2 my-1 hover:bg-gray-200 rounded-full px-3 py-2' />
    <img src={youtube_logo_url} alt='YT Logo' className='h-24 -mt-6 rounded-xl ml-2'/>
    </div>

    <div className='col-span-10'>
        {/* <SearchBarComponent/> */}
        <input type='text' className='w-1/2 border rounded-l-full py-2 px-8 mt-1  border-gray-500  bg-gray-50 ml-64'/>
        <button className='border border-gray-500 bg-gray-200  py-2 px-5 rounded-r-full '>🔍</button>
    </div>

    <div className='col-span-1 '>
        {/* User Component */}
        <img src={user_logo_url} alt='User Logo' className='h-12 rounded-full '/>
    </div>
    </div>
  )
}

export default Header


