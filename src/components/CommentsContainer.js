import React from 'react';
import { commentsData } from '../constants';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const Comment = ({ data }) => {
  const { name, text, replies } = data;
  return (
    <div className="flex items-start h-auto mt-2">
      <img
        className="rounded-full h-8 w-8 mr-2"
        src="https://randomuser.me/api/portraits/women/1.jpg"
        alt="User Avatar"
      />
      <div className="text-sm">
        <span className="font-semibold">{name}</span>
        <span className="text-gray-500 ml-2">10 minutes ago</span>
        <p className="text-black px-4 py-2 my-2">{text}</p>
        <span className="mb-2 cursor-pointer">
          <FontAwesomeIcon
            icon=" fa-thumbs-up"
            className="w-8 h-6 mx-2 cursor-pointer"
          />
        </span>
        <span className="mb-2 cursor-pointer">
          <FontAwesomeIcon
            icon=" fa-thumbs-down"
            className="w-8 h-6  mx-2 cursor-pointer"
          />
        </span>
        <span className="cursor-pointer mx-[20px] my-4 text-base">Reply</span>
        {replies &&
          replies.map((reply) => (
            <div className='my-2'>
              <Comment data={reply} />
            </div>
          ))}
      </div>
    </div>
  );
};

const CommentsContainer = () => {
  return (
    <div className="text-black h-auto w-[1180px] my-4  ml-4 -mr-4 rounded-lg border border-black px-2 bg-gray-100">
      {commentsData.map((comment, idx) => (
        <Comment data={comment} key={idx} />
      ))}
    </div>
  );
};

export default CommentsContainer;
