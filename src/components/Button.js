import React from 'react';
import { AiOutlinePlayCircle } from 'react-icons/ai';

export default function Button({ children, type }) {
  return (
    <button
      className={`px-3 py-2 rounded-full border-solid border-lightRed  w-[100px] transition duration-300 ${
        type === 'primary'
          ? 'bg-lightRed font-medium text-white hover:bg-transparent hover:text-lightRed hover:border-lightRed hover:border-solid hover:border'
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
      className={`px-3 py-2 rounded-full border-solid border-lightRed bg-lightRed font-medium text-white hover:bg-transparent hover:text-lightRed hover:border-lightRed hover:border-solid hover:border flex items-center gap-2`}
    >
      <AiOutlinePlayCircle className="text-xl" /> Watch Trailer
    </button>
  );
}
