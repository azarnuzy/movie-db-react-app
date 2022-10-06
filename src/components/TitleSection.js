import React from 'react';
import { AiOutlineArrowRight } from 'react-icons/ai';

export default function TitleSection({ children }) {
  return (
    <div className="flex  my-3 justify-between mx-2 mt-[96vh]">
      <h2>{children}</h2>
      <div className="text-lightRed gap-10">
        <a href="/" className="flex gap-10 items-center">
          <span>See All Movie</span> <AiOutlineArrowRight />
        </a>
      </div>
    </div>
  );
}
