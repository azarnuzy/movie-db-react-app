import React from 'react';

export default function Button({ children, type }) {
  return (
    <button
      className={`px-3 py-2 rounded-full border-solid  border-lightRed font-medium w-[100px] transition duration-300 ${
        type === 'primary'
          ? 'bg-lightRed  text-white hover:bg-transparent hover:text-lightRed hover:border-lightRed hover:border-solid hover:border'
          : 'bg-transparent border-lightRed border-solid border  text-lightRed hover:text-white hover:bg-lightRed'
      } `}
    >
      {children}
    </button>
  );
}
