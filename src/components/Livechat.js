import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { user_logo_url } from '../constants';

const Livechat = () => {
  const { comments } = useSelector((store) => store.livechat);
  const [updatedComments, setUpdatedComments] = useState([]);
  const [userComment, setUserComment] = useState('');
  const CommentComponent = (comment) => {
    return updatedComments.map((c, i) => {
      return (
        <div
          key={i}
          className={`flex border border-black my-1 mx-1 py-2 rounded-lg shadow-md transition-colors duration-500 ${
            i === updatedComments.length - 1 ? 'bg-yellow-100' : 'bg-gray-50'
          }`}
        >
          <img
            src={user_logo_url}
            alt="user"
            className="h-10 w-10 rounded-full cursor-pointer"
          />
          <p className="mx-2">
            {c.userName} : {c.userComment}
          </p>
        </div>
      );
    });
  };

  const addComment = () => {
    if (userComment.trim() === '') return;
    setUpdatedComments([userComment, ...updatedComments]);
    setUserComment('');
  };

  const onPressEnterKey = () => {
    if (userComment.trim() === '') return;
    addComment();
  };

  document.addEventListener('keydown', function (event) {
    if (event.key === 'Enter' && document.activeElement.tagName === 'INPUT') {
      onPressEnterKey();
    }
  });

  useEffect(() => {
    if (updatedComments.length === 0) setUpdatedComments(comments);
  }, [comments, updatedComments.length]);

  useEffect(() => {
    if (updatedComments.length > 0) {
      const newComment = comments[comments.length - 1];
      setUpdatedComments([...updatedComments, newComment]);
      if (updatedComments.length > 100) {
        const latestComments = updatedComments.slice(-100);
        setUpdatedComments(latestComments);
      }
    }
  }, [comments]);

  return (
    <>
      <div className="mx-4 my-2 px-4  py-2 flex flex-col bg-slate-50 w-auto h-[615px] border border-gray-400 rounded-lg">
        <div className="w-auto">
          Live chat <FontAwesomeIcon icon="fa-solid fa-chevron-down" />
        </div>
        <div className="border border-black my-1 mx-1 py-2 rounded-lg shadow-md bg-gray-50 overflow-y-auto flex flex-col-reverse">
          <CommentComponent />
        </div>
        <div className="flex cursor-pointer">
          <input
            value={userComment}
            type="text"
            placeholder="Comment here... "
            className="border border-black mt-2 ml-3 px-10 py-2 mr-4 rounded-lg text-black w-[350px] bg-gray-100"
            onChange={(e) => setUserComment(e.target.value)}
          />
          <FontAwesomeIcon
            icon="fa-solid fa-up-right-from-square"
            className="h-6 w-6 mt-3 cursor-pointer"
            onClick={addComment}
          />
        </div>
      </div>
    </>
  );
};

export default Livechat;
