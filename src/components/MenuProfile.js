import { Menu, Transition } from '@headlessui/react';
import { Fragment } from 'react';
import { useMediaQuery } from 'react-responsive';

export default function MenuProfile({ firstName, lastName, handleLogout }) {
  const isSmallWidth = useMediaQuery({ query: '(min-width: 640px)' });
  return (
    <div className="flex items-center">
      <Menu>
        <Menu.Button className="flex gap-2 items-center">
          <img
            src={`https://ui-avatars.com/api/?name=${firstName}+${lastName}`}
            alt=""
            className="rounded-full h-[50px]"
          />
          {isSmallWidth && (
            <span className="flex gap-2 flex-col text-white font-semibold text-lg">
              {firstName} {lastName}
            </span>
          )}
        </Menu.Button>
        <Transition
          as={Fragment}
          enter="transition ease-out duration-100"
          enterFrom="transform opacity-0 scale-95"
          enterTo="transform opacity-100 scale-100"
          leave="transition ease-in duration-75"
          leaveFrom="transform opacity-100 scale-100"
          leaveTo="transform opacity-0 scale-95"
        >
          <Menu.Items className="absolute top-12 sm:px-5 sm:right-2 right-0 mt-2 w-fit p-2  origin-top-right divide-y divide-gray-100 rounded-sm md:text-lg bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none text-black text-sm flex flex-col ">
            <Menu.Item className="text-left">
              {({ active }) => (
                <button className={`${active && ''}`} onClick={handleLogout}>
                  Log Out
                </button>
              )}
            </Menu.Item>
          </Menu.Items>
        </Transition>
      </Menu>
    </div>
  );
}
