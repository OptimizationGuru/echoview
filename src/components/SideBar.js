import React, { useState } from 'react'

import { IconMusic, IconDownload,IconShoppingBag, IconFlame, IconBrandYoutube, IconThumbUpFilled, IconClock, IconBrandYoutubeKids, IconDeviceTv, IconHomeFilled, IconPlaylist, IconChevronRight , IconUserSquare, IconHistory, IconMovie, IconLiveView, IconBuildingBroadcastTower, IconDeviceGamepad, IconNews, IconSportBillard, IconTrophy, IconBulb, IconHanger2, IconBrandApplePodcast, IconChevronDown } from '@tabler/icons-react';
import {subcription_img_url, subcription_img_url2} from './../constants'

const SideBar = () => {

  const {showAll, setShowAll} = useState(false)
  const {btnText, setBtnText} = useState('Show More')

  return (
    <div className='col-span-1 shadow-lg w-3/4 '>
    

    <div className='p-3 mx-1 mt-3 mb-1'>
    <ul>
        <li className='my-1 text-xl py-2 px-3 flex hover:bg-gray-200 rounded-md'> 
        <div className='mx-2'><IconHomeFilled/> </div>
        <div className='mx-2'>Home</div>
        </li>

        <li className='my-1 text-xl py-2 px-3 flex hover:bg-gray-100 rounded-md'> 
        <div className='mx-2'><IconBrandYoutube stroke={2} /></div>
        <div className='mx-2'>Shorts</div>
        </li>

        <li className='my-1 text-xl py-2 px-3 flex hover:bg-gray-100 rounded-md'> 
        <div className='mx-2'><IconBrandYoutubeKids stroke={2} /> </div>
        <div className='mx-2'>Subscriptions</div>
        </li>

        <li className='my-1 text-xl py-2 px-3 flex hover:bg-gray-100 rounded-md'> 
        <div className='mx-2'><IconMusic stroke={2} /></div>
        <div className='mx-2'>YouTube Music</div>
        </li>

    </ul>
    </div>

<hr/>
    <div className='p-3 mx-1 mt-3 mb-1 '>
       <div className='py-2 px-3 text-xl font-medium flex hover:bg-gray-200 rounded-md'><p className='mx-1'>You</p> <IconChevronRight stroke={2} /></div>
      <ul>
      <li className='my-1 text-xl py-2 px-3 flex hover:bg-gray-200 rounded-md'> 
        <div className='mx-2'><IconUserSquare/> </div>
        <div className='mx-2'>Your Channel</div>
        </li>

        <li className='my-1 text-xl py-2 px-3 flex hover:bg-gray-200 rounded-md'> 
        <div className='mx-2'><IconHistory/> </div>
        <div className='mx-2'>History</div>
        </li>

        <li className='my-1 text-xl py-2 px-3 flex hover:bg-gray-200 rounded-md'> 
        <div className='mx-2'><IconPlaylist/> </div>
        <div className='mx-2'>Playlists</div>
        </li>

        <li className='my-1 text-xl py-2 px-3 flex hover:bg-gray-200 rounded-md'> 
        <div className='mx-2'><IconDeviceTv/> </div>
        <div className='mx-2'>Your Videos</div>
        </li>

        <li className='my-1 text-xl py-2 px-3 flex hover:bg-gray-200 rounded-md'> 
        <div className='mx-2'><IconClock/> </div>
        <div className='mx-2'>Watch Later</div>
        </li>

        <li className='my-1 text-xl py-2 px-3 flex hover:bg-gray-200 rounded-md'> 
        <div className='mx-2'><IconThumbUpFilled/> </div>
        <div className='mx-2'>Liked Videos</div>
        </li>

        <li className='my-1 text-xl py-2 px-3 flex hover:bg-gray-200 rounded-md'> 
        <div className='mx-2'><IconDownload/> </div>
        <div className='mx-2'>Downloads</div>
        </li>
       
     </ul>
     </div>
     <hr/>

     <div className='p-3 mx-1 mt-3 mb-1 '>
       <div className='py-2 px-3 text-xl font-medium flex hover:bg-gray-200 rounded-md'><p className='mx-1'>Explore</p></div>
      <ul>
      <li className='my-1 text-xl py-2 px-3 flex hover:bg-gray-200 rounded-md'> 
        <div className='mx-2'><IconFlame/> </div>
        <div className='mx-2'>Trending</div>
        </li>

        <li className='my-1 text-xl py-2 px-3 flex hover:bg-gray-200 rounded-md'> 
        <div className='mx-2'><IconShoppingBag/> </div>
        <div className='mx-2'>Shopping</div>
        </li>

        <li className='my-1 text-xl py-2 px-3 flex hover:bg-gray-200 rounded-md'> 
        <div className='mx-2'><IconMusic/> </div>
        <div className='mx-2'>Music</div>
        </li>

        <li className='my-1 text-xl py-2 px-3 flex hover:bg-gray-200 rounded-md'> 
        <div className='mx-2'><IconMovie/> </div>
        <div className='mx-2'>Movies</div>
        </li>

        <li className='my-1 text-xl py-2 px-3 flex hover:bg-gray-200 rounded-md'> 
        <div className='mx-2'><IconBuildingBroadcastTower/> </div>
        <div className='mx-2'>Live</div>
        </li>

        <li className='my-1 text-xl py-2 px-3 flex hover:bg-gray-200 rounded-md'> 
        <div className='mx-2'><IconDeviceGamepad/> </div>
        <div className='mx-2'>Gaming</div>
        </li>

        <li className='my-1 text-xl py-2 px-3 flex hover:bg-gray-200 rounded-md'> 
        <div className='mx-2'><IconNews/> </div>
        <div className='mx-2'>News</div>
        </li>

        <li className='my-1 text-xl py-2 px-3 flex hover:bg-gray-200 rounded-md'> 
        <div className='mx-2'><IconTrophy/> </div>
        <div className='mx-2'>Sports</div>
        </li>

        <li className='my-1 text-xl py-2 px-3 flex hover:bg-gray-200 rounded-md'> 
        <div className='mx-2'><IconBulb/> </div>
        <div className='mx-2'>Courses</div>
        </li>

        <li className='my-1 text-xl py-2 px-3 flex hover:bg-gray-200 rounded-md'> 
        <div className='mx-2'><IconHanger2/> </div>
        <div className='mx-2'>Fashion & Beauty</div>
        </li>
       
        <li className='my-1 text-xl py-2 px-3 flex hover:bg-gray-200 rounded-md'> 
        <div className='mx-2'><IconBrandApplePodcast/> </div>
        <div className='mx-2'>Podcasts</div>
        </li>
       
     </ul>
     </div>
     <hr/>
   
     <div className='p-3 mx-1 mt-3 mb-1 '>
       <div className='py-2 px-3 text-xl font-medium flex hover:bg-gray-200 rounded-md'><p className='mx-1'>Subscriptions</p></div>
      <ul>
      <li className='my-1 text-xl py-2 px-3 flex hover:bg-gray-200 rounded-md'> 
        <div className='mx-2'><img alt='img' src={subcription_img_url} className='rounded-full h-8'/> </div>
        <div className='mx-2'>Jashn-e-Rekhta</div>
        </li>

        <li className='my-1 text-xl py-2 px-3 flex hover:bg-gray-200 rounded-md'> 
        <div className='mx-2'><img alt='img' src={subcription_img_url2} className='rounded-full h-8'/></div>
        <div className='mx-2'>sudoCode</div>
        </li>

        
        {
          showAll ? `<li className='my-1 text-xl py-2 px-3 flex hover:bg-gray-200 rounded-md'> 
        <div className='mx-2'><IconPlaylist/> </div>
        <div className='mx-2'>Playlists</div>
        </li>

        <li className='my-1 text-xl py-2 px-3 flex hover:bg-gray-200 rounded-md'> 
        <div className='mx-2'><IconDeviceTv/> </div>
        <div className='mx-2'>Your Videos</div>
        </li>
        } ` : ''
       
        }

        <li className='my-1 text-xl py-2 px-3 flex hover:bg-gray-200 rounded-md' onClick={setShowAll(!showAll)}> 
        <div className='mx-2'><IconChevronDown/> </div>
        <div className='mx-2'>Show More</div>
        </li>
     </ul>
     </div>
     <hr/>
    </div>
  )
}

export default SideBar