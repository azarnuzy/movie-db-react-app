import React from 'react';
import { AiOutlinePlayCircle } from 'react-icons/ai';

export default function Button({ children, type }) {
  return (
    <button
      className={`px-3 py-2 rounded-full border-solid border-lightRed  w-[100px] transition duration-300 ${
        type === 'primary'
          ? 'bg-lightRed font-medium text-white  hover:opacity-80 '
          : 'bg-transparent font-extrabold border-lightRed border-solid border  text-lightRed hover:text-white hover:bg-lightRed'
      }`}
    >
      {children}
    </button>
  );
}

export function TrailerButton() {
  return (
    <button
      className={`px-3 py-2 rounded-full border-solid border-lightRed bg-lightRed font-medium text-white hover:opacity-80 flex items-center gap-2`}
    >
      <AiOutlinePlayCircle className="text-xl" /> Watch Trailer
    </button>
  );
}
