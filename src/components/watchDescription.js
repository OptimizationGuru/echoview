import React from 'react';
import Description from './Desciption';

const watchDescription = (video) => {
  const { snippet, statistics } = video.video;

  const { description, tags } = snippet;

  function convertTimestampToDate(timestamp) {
    const date = new Date(timestamp);
    const options = { year: 'numeric', month: 'short', day: 'numeric' };
    return date.toLocaleDateString('en-GB', options);
  }
  return (
    <div className="w-[1180px] ml-4 bg-gray-100 rounded-xl px-4 py-5">
      <p className="text-black font-medium">
        {statistics.viewCount} views{' '}
        {convertTimestampToDate(snippet.publishedAt)}
        {tags
          ? tags.map((tag, index) => (
              <span className="mx-1" key={index}>
                #{tag.replace(' ', '')}{' '}
              </span>
            ))
          : ''}
      </p>

      <Description text={description} />
    </div>
  );
};

export default watchDescription;
