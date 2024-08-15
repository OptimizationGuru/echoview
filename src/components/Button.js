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
];
const Button = ({ list }) => {
  return (
    <div className="flex items-center hide-scrollbar">
      {genreList.map((genre) => (
        <button
          className="bg-gray-200 px-2 py-1 items-center flex-shrink-0 rounded-md mx-2 hover:bg-gray-300 hover:font-semibold"
          key={genre}
        >
          {genre}
        </button>
      ))}
    </div>
  );
};

export default Button;
