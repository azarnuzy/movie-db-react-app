import React from 'react';
import { AiOutlineSearch, AiOutlineUser } from 'react-icons/ai';
import Button from './Button';
import logo from '../images/Logo.svg';
import { useMediaQuery } from 'react-responsive';
import ModalElement from './ModalElement';
import { Link } from 'react-router-dom';

export default function Navbar() {
  const isSmallWidth = useMediaQuery({ query: '(min-width: 640px)' });
  const isPhone = useMediaQuery({ query: '(max-width: 640px)' });
  return (
    <div className="flex justify-between mt-3 relative z-10">
      <Link to="/">
        <img src={logo} alt="" className="transform scale-90" />
      </Link>
      {isPhone && (
        <div className="flex gap-3 text-[30px]  text-slate-200 items-center ">
          <ModalElement />
          <AiOutlineUser />
        </div>
      )}
      {isSmallWidth && (
        <div className="sm:flex w-full mx-5 lg:mx-20 justify-between px-4 py-[6.5px] rounded-full group focus-within:border-lightRed border-slate-300 border-solid border items-center hidden">
          <input
            type="text"
            className="outline-none bg-transparent text-white"
            id="search-movie"
            placeholder="what do you want to watch?"
          />
          <label htmlFor="search-movie">
            <AiOutlineSearch className="text-white" />
          </label>
        </div>
      )}
      {isSmallWidth && (
        <div className="sm:flex justify-between gap-2 hidden">
          <Button type={'secondary'}>Login</Button>
          <Button type={'primary'}>Register</Button>
        </div>
      )}
    </div>
  );
}
