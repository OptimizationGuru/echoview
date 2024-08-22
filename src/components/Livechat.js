import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';

const Livechat = () => {
  const { comments } = useSelector((store) => store.livechat);
  const [updatedComments, setUpdatedComments] = useState([]);

  const CommentComponent = (comment) => {
    return updatedComments.map((c, i) => {
      return (
        <div
          key={i}
          className={`border border-black my-1 mx-1 py-2 rounded-lg shadow-md transition-colors duration-500 ${
            i === updatedComments.length - 1 ? 'bg-yellow-100' : 'bg-gray-50'
          }`}
        >
          <p className="mx-2">
            {c.userName} : {c.userComment}
          </p>
        </div>
      );
    });
  };

  useEffect(() => {
    if (updatedComments.length === 0) setUpdatedComments(comments);
  }, [comments, updatedComments.length]);

  useEffect(() => {
    if (updatedComments.length > 0) {
      const newComment = comments[comments.length - 1];
      setUpdatedComments([...updatedComments, newComment]);
    }
  }, [comments]);

  return (
    <div className="mx-4 my-2 px-4  py-2 flex flex-col bg-slate-50 w-auto h-[615px] border border-gray-400 rounded-lg">
      <div className="w-auto">
        Live chat <FontAwesomeIcon icon="fa-solid fa-chevron-down" />
      </div>
      <div className="border border-black my-1 mx-1 py-2 rounded-lg shadow-md bg-gray-50 overflow-y-auto flex flex-col-reverse">
        <CommentComponent />
      </div>
    </div>
  );
};

export default Livechat;
