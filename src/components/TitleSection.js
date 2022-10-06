import React from 'react';
import { AiOutlineArrowRight } from 'react-icons/ai';

export default function TitleSection({ children }) {
  return (
    <div className="flex text-lg  mb-4 justify-between mx-2 mt-[97vh] font-semibold">
      <h2>{children}</h2>
      <div className="text-lightRed gap-10">
        <a href="/" className="flex gap-10 items-center">
          <span className="">See All Movie</span> <AiOutlineArrowRight />
        </a>
      </div>
    </div>
  );
}
