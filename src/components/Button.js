import React from 'react';

const genreList = [
  'All',
  'Music',
  'Mixes',
  'Movie Musicals',
  'Nusrat Fateh Ali Khan',
  'Ghazals',
  'News',
  'Amir Khan',
  'Jukebox',
  'Indian Pop Music',
  'Live',
  'Arijit Singh',
  'Roop Kumar Rathod',
  'Reverberations',
  'Sukhwinder Singh',
  'Ghazals1',
  'News1',
  'Amir Khan1',
  'Jukebox1',
  'Indian Pop Music1',
  'Live1',
  'Arijit Singh1',
  'Roop Kumar Rathod1',
  'Reverberations1',
  'Sukhwinder Singh1',
];
const Button = ({ list }) => {
  return (
    <div className="flex items-center hide-scrollbar">
      {genreList.map((genre) => (
        <button
          className="bg-gray-100 px-2 py-2 items-center font-semibold flex-shrink-0 rounded-md mx-2 hover:bg-gray-200 "
          key={genre}
        >
          {genre}
        </button>
      ))}
    </div>
  );
};

export default Button;
