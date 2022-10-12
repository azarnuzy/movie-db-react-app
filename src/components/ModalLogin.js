import { Dialog, Transition } from '@headlessui/react';
import axios from 'axios';
import { Fragment, useState, useEffect } from 'react';
import { AiOutlineEyeInvisible, AiOutlineMail } from 'react-icons/ai';
import Button from './Button';

export default function ModalLogin() {
  let [isOpen, setIsOpen] = useState(false);
  const [user, setUser] = useState('');
  const [password, setPassword] = useState('');
  const [errMsg, setErrMsg] = useState('');
  const [success, setSuccess] = useState(false);

  function closeModal() {
    setIsOpen(false);
  }

  function openModal() {
    setIsOpen(true);
  }

  useEffect(() => {
    setErrMsg('');
  }, [user, password]);

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post(
        'http://notflixtv.herokuapp.com/api/v1/users/login',
        { email: user, password: password }
      );

      localStorage.setItem('data', JSON.stringify(response?.data));

      console.log(JSON.stringify(response?.data));
      console.log(user);
      console.log(password);
      setUser('');
      setPassword('');
      setSuccess(true);
    } catch (err) {
      if (!err?.response) {
        setErrMsg('No Server Response');
      } else if (err.response?.status === 400) {
        setErrMsg('Missing Username or Password');
      } else if (err.response?.status === 401) {
        setErrMsg('Unauthorized');
      } else {
        setErrMsg('Login Failed');
      }
    }
    // console.log(e.target[0].value);
    // console.log(e.target[1].value);
    closeModal();
  };

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
                    Login to Your Account
                  </Dialog.Title>
                  <div className="h-[1px] w-full bg-slate-300 my-3"></div>
                  <form onSubmit={handleSubmit}>
                    <div className="py-2 px-4 border border-slate-300 border-solid rounded-full my-3 flex justify-between items-center">
                      <input
                        className="outline-none"
                        type="email"
                        placeholder="Email Address"
                        id="email"
                        onChange={(e) => setUser(e.target.value)}
                        value={user}
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
                        onChange={(e) => setPassword(e.target.value)}
                        value={password}
                        id="password"
                        required
                      />
                      <label htmlFor="password">
                        <AiOutlineEyeInvisible />
                      </label>
                    </div>
                    <Button
                      type={'primary'}
                      typeButton={'submit'}
                      closeModal={closeModal}
                    >
                      Login
                    </Button>
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
