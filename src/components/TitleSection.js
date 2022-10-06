import React from 'react';
import { AiOutlineArrowRight } from 'react-icons/ai';
import { Link } from 'react-router-dom';

export default function TitleSection({ children, page, destination }) {
  let mt, link;
  if (page === 'home') {
    mt = 'mt-[97vh]';
  }
  if (destination === 'allMovie') {
    link = '/movie';
  }
  return (
    <div
      className={`flex text-lg  mb-4 justify-between mx-2 ${mt} font-semibold`}
    >
      <h2>{children}</h2>
      <Link to={link} className="">
        <div className="text-lightRed gap-10 flex items-center">
          <span className="">See All Movie</span> <AiOutlineArrowRight />
        </div>
      </Link>
    </div>
  );
}
