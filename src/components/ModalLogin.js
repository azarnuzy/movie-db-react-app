import { Dialog, Transition } from '@headlessui/react';
import { Fragment, useState } from 'react';
import {
  AiOutlineEyeInvisible,
  AiOutlineMail,
  AiOutlineUser,
} from 'react-icons/ai';
import Button from './Button';

export default function ModalLogin() {
  let [isOpen, setIsOpen] = useState(false);

  function closeModal() {
    setIsOpen(false);
  }

  function openModal() {
    console.log('click me!');
    setIsOpen(true);
  }

  return (
    <>
      <div className="">
        <Button openModal={openModal}>Login</Button>
      </div>

      <Transition appear show={isOpen} as={Fragment}>
        <Dialog as="div" className="relative z-[100]" onClose={closeModal}>
          <Transition.Child
            as={Fragment}
            enter="ease-out duration-300"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="ease-in duration-200"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <div className="fixed inset-0 bg-black bg-opacity-25" />
          </Transition.Child>

          <div className="fixed inset-0 overflow-y-auto">
            <div className="flex min-h-full items-center justify-center p-4 text-center">
              <Transition.Child
                as={Fragment}
                enter="ease-out duration-300"
                enterFrom="opacity-0 scale-95"
                enterTo="opacity-100 scale-100"
                leave="ease-in duration-200"
                leaveFrom="opacity-100 scale-100"
                leaveTo="opacity-0 scale-95"
              >
                <Dialog.Panel className="w-full max-w-md transform overflow-hidden rounded-2xl bg-white p-6 text-left align-middle shadow-xl transition-all">
                  <Dialog.Title
                    as="h3"
                    className="text-lg font-medium leading-6 text-gray-900"
                  >
                    Create Account
                  </Dialog.Title>
                  <div className="h-[1px] w-full bg-slate-300 my-3"></div>
                  <form>
                    <div className="py-2 px-4 border border-slate-300 border-solid rounded-full my-3 flex justify-between items-center">
                      <input
                        className="outline-none"
                        type="text"
                        placeholder="First Name"
                        id="first-name"
                        autoComplete="off"
                        required
                      />
                      <label htmlFor="first-name">
                        <AiOutlineUser />
                      </label>
                    </div>
                    <div className="py-2 px-4 border border-slate-300 border-solid rounded-full my-3 flex justify-between items-center">
                      <input
                        className="outline-none"
                        type="text"
                        placeholder="Last Name"
                        id="last-name"
                        autoComplete="off"
                        required
                      />
                      <label htmlFor="last-name">
                        <AiOutlineUser />
                      </label>
                    </div>
                    <div className="py-2 px-4 border border-slate-300 border-solid rounded-full my-3 flex justify-between items-center">
                      <input
                        className="outline-none"
                        type="text"
                        placeholder="Email Address"
                        id="email"
                        autoComplete="off"
                        required
                      />
                      <label htmlFor="email">
                        <AiOutlineMail />
                      </label>
                    </div>
                    <div className="py-2 px-4 border border-slate-300 border-solid rounded-full my-3 flex justify-between items-center">
                      <input
                        className="outline-none"
                        type="password"
                        placeholder="Password"
                        autoComplete="off"
                        id="password"
                        required
                      />
                      <label htmlFor="password">
                        <AiOutlineEyeInvisible />
                      </label>
                    </div>
                    <div className="py-2 px-4 border border-slate-300 border-solid rounded-full my-3 flex justify-between items-center">
                      <input
                        className="outline-none"
                        type="password"
                        placeholder="Password Confirmation"
                        autoComplete="off"
                        id="password-confirm"
                        required
                      />
                      <label htmlFor="password-confirm">
                        <AiOutlineEyeInvisible />
                      </label>
                    </div>
                    <Button type={'primary'}>Register</Button>
                  </form>
                </Dialog.Panel>
              </Transition.Child>
            </div>
          </div>
        </Dialog>
      </Transition>
    </>
  );
}
