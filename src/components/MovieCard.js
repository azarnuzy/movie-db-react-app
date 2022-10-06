import React from 'react';
import { AiFillStar } from 'react-icons/ai';
import { Link } from 'react-router-dom';
import apiConfig from '../api/apiConfig';
import { category as tempCategory } from '../api/tmdbApi';
export default function MovieCard({ item, category }) {
  const link = '/' + tempCategory[category] + '/' + item.id;

  const bg = apiConfig.w500Image(item.poster_path || item.backdrop_path);

  return (
    <Link to={link}>
      <div className="relative group">
        <img
          src={bg}
          alt=""
          className="rounded-lg brightness-50 group-hover:brightness-[0.25] transition ease-out delay-75 duration-300"
        />
        <div className=" absolute bottom-5 translate-y-20 sm:translate-y-0 left-5 z-10 group-hover:transform group-hover:-translate-y-2 transition ease-out delay-75 duration-300">
          <h3 className="text-white font-semibold text-lg w-full">
            {item.name}
          </h3>
          <span className="flex gap-3 items-center text-yellow-400 mt-1 ">
            <AiFillStar /> <p>{item.vote_average} / 10</p>
          </span>
        </div>
      </div>
    </Link>
  );
}
