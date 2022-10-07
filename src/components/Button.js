import React from 'react';
import { AiOutlinePlayCircle } from 'react-icons/ai';
import PropTypes from 'prop-types';

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

export function TrailerButton({ item }) {
  return (
    <a
      href={`https://youtube.com/results?search_query=${
        item.name || item.title
      }`}
      target="_blank"
      className={`px-4 py-2 rounded-full border-solid border-lightRed bg-lightRed font-medium text-white hover:opacity-80 flex items-center gap-2 max-w-fit`}
      rel="noreferrer"
    >
      <AiOutlinePlayCircle className="text-xl" /> Watch Trailer
    </a>
  );
}

export const OutlineButton = (props) => {
  return (
    <button
      className={`btn-outline ${props.className}`}
      onClick={props.onClick ? () => props.onClick() : null}
    >
      {props.children}
    </button>
  );
};

Button.propTypes = {
  onClick: PropTypes.func,
};
