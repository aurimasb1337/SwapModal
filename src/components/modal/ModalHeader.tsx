import React, { useContext } from 'react';
import { ModalContext } from '../../context/ModalProvider';

type ModalHeaderProps = {
  title: string;
};

const ModalHeader: React.FC<ModalHeaderProps> = ({ title }) => {
  const { closeModal } = useContext(ModalContext);
  return (
    <div className="relative">
      <button
        data-testid='modal-close-button'
        type="button"
        className="btn-close absolute p-2 top-[-20px] right-[-10px] bg-gray-500  rounded-full"
        onClick={closeModal}
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          width="24"
          height="24"
          className="fill-gray-800  h-6 w-6 transition-transform transform-gpu hover:rotate-90"
        >
          <path fill="none" d="M0 0h24v24H0z" />
          <path d="M12 10.586l4.95-4.95 1.414 1.414-4.95 4.95 4.95 4.95-1.414 1.414-4.95-4.95-4.95 4.95-1.414-1.414 4.95-4.95-4.95-4.95L7.05 5.636z" />
        </svg>
      </button>
<div className="modal-header  py-5 mx-3 ">
      <h5 className="modal-title font-bold text-white text-2xl text-center">
        {title}
      </h5>
      
    </div>
    </div>
    
  );
};

export default ModalHeader;
