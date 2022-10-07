import React, { useState } from 'react';
import { AiOutlineClose, AiOutlineSearch } from 'react-icons/ai';
import Modal from 'react-modal';

const customStyles = {
  content: {
    top: '50%',
    left: '50%',
    right: 'auto',
    bottom: 'auto',
    marginRight: '-50%',
    transform: 'translate(-50%, -50%)',
    background: 'rgba(0, 0, 0, 0.90)',
    border: 'none',
  },
};

// Make sure to bind modal to your appElement (https://reactcommunity.org/react-modal/accessibility/)
Modal.setAppElement('#root');

export default function ModalElement() {
  const [modalIsOpen, setIsOpen] = useState(false);

  function openModal() {
    setIsOpen(true);
  }

  function afterOpenModal() {
    // references are now  sync'd and can be accessed.
    // subtitle.style.color = '#f00';
  }

  function closeModal() {
    setIsOpen(false);
  }

  return (
    <div className="flex items-center">
      <button onClick={openModal}>
        <AiOutlineSearch />
      </button>
      <Modal
        isOpen={modalIsOpen}
        onAfterOpen={afterOpenModal}
        onRequestClose={closeModal}
        style={customStyles}
        contentLabel="Example Modal"
      >
        <div className="flex justify-end text-2xl mt-3 mr-4 text-white">
          <button onClick={closeModal} className="absolute top-[15px]">
            <AiOutlineClose />
          </button>
        </div>
        <form className="-mt-4 w-[95vw] h-[95vh] bg-transparent flex justify-center items-center z-[100]">
          <input
            className="w-[90%] rounded-md bg-transparent border-solid border-white border py-2 px-5 text-white"
            placeholder="what do you want to watch?"
          />
        </form>
      </Modal>
    </div>
  );
}
