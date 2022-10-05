import React from 'react';
import { AiOutlineSearch, AiOutlineUser } from 'react-icons/ai';
import Button from './Button';
import logo from '../images/Logo.svg';
import { useMediaQuery } from 'react-responsive';
import ModalElement from './ModalElement';

export default function Navbar() {
  const isSmallWidth = useMediaQuery({ query: '(min-width: 640px)' });
  const isPhone = useMediaQuery({ query: '(max-width: 640px)' });
  return (
    <div className="flex justify-between mt-3">
      <img src={logo} alt="" className="transform scale-90" />
      {isPhone && (
        <div className="flex gap-3 text-[30px]  text-white items-center bg-slate-300">
          <ModalElement />
          <AiOutlineUser />
        </div>
      )}
      {isSmallWidth && (
        <div className="sm:flex justify-between px-5 py-[6.5px] rounded-full group focus-within:border-lightRed border-slate-300 border-solid border items-center hidden">
          <input
            type="text"
            className="outline-none"
            id="search-movie"
            placeholder="what do you want to watch?"
          />
          <label htmlFor="search-movie">
            <AiOutlineSearch />
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
