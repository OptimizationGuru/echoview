// components/Description.js
import React, { useState } from 'react';
import textFormatter from '../utils/textFormatter';

const Description = ({ text }) => {
  const formattedText = textFormatter(text);
  const [showMore, setShowMore] = useState(false);

  return (
    <div className="p-4  rounded-lg truncate text-gray-700">
      <div
        className="whitespace-pre-line truncate"
        dangerouslySetInnerHTML={{ __html: formattedText }}
      ></div>
    </div>
  );
};

export default Description;
