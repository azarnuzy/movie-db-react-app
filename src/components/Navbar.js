import React, { useState } from 'react';
import { AiOutlineSearch, AiOutlineUser } from 'react-icons/ai';
import Button from './Button';
import logo from '../images/Logo.svg';
import { useMediaQuery } from 'react-responsive';
import ModalElement from './ModalElement';
import { Link, useNavigate } from 'react-router-dom';
import { useLocation } from 'react-router-dom';
import ModalRegister from './ModalRegister';
import ModalLogin from './ModalLogin';

export default function Navbar() {
  const isSmallWidth = useMediaQuery({ query: '(min-width: 640px)' });
  const isPhone = useMediaQuery({ query: '(max-width: 640px)' });
  const navigate = useNavigate();
  const [keyword, setKeyword] = useState();
  const page = useLocation();

  const category =
    page.pathname.indexOf('/tv') >= 0
      ? 'tv'
      : page.pathname.indexOf('/movie') >= 0
      ? 'movie'
      : 'multi';

  const handleKeyPressed = (e) => {
    if (e.key === 'Enter') {
      navigate(`/${category}/search/${keyword}`, {
        state: { search: keyword },
      });
      setKeyword('');
    }
  };

  return (
    <div className="flex justify-between mt-3 relative z-10">
      <Link to="/" className="flex items-center">
        <img src={logo} alt="" className="transform scale-90 lg:scale-100" />
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
            value={keyword}
            onChange={(e) => setKeyword(e.target.value)}
            onKeyDown={(e) => handleKeyPressed(e)}
          />
          <label htmlFor="search-movie">
            <AiOutlineSearch className="text-white" />
          </label>
        </div>
      )}
      {isSmallWidth && (
        <div className="sm:flex justify-between gap-2 hidden">
          {/* <Button type={'secondary'}>Login</Button> */}
          {/* <Button type={'primary'}>Register</Button> */}
          <ModalLogin />
          <ModalRegister />
        </div>
      )}
      {isSmallWidth && (
        <div className="sm:flex justify-between gap-2 hidden">
          {/* <Button type={'secondary'}>Login</Button> */}
          {/* <Button type={'primary'}>Register</Button> */}
        </div>
      )}
    </div>
  );
}
